/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ControlFileUpload = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: this.control.hint_external,
        minimalLoading: false,
        loading: false,
        loadCircle: false,
        percentage: 0,
        //%
        isFileLoaded: false,
        xhrStatus: '',
        //'Y', 'E'
        active: true,
        files: [],
        "default": '<a href="">Выберите файл</a>&nbsp;или перетащите в поле',
        required: this.control.required,
        icon: "<g transform=\"translate(-4.461)\">\n          <g transform=\"translate(4.461)\">\n            <g>\n              <path d=\"M21.844,6.573v15.88A1.547,1.547,0,0,1,20.3,24H6.008a1.546,1.546,0,0,1-1.547-1.547V1.547A1.546,1.546,0,0,1,6.008,0H15.27Z\" transform=\"translate(-4.461)\" class=\"a\"/>\n            </g>\n            <path d=\"M20.036,8.289l5.677,2.339v-2.2l-3.218-.951Z\" transform=\"translate(-8.33 -1.858)\" class=\"b\"/>\n            <path d=\"M25.416,6.573H20.389a1.546,1.546,0,0,1-1.547-1.547V0Z\" transform=\"translate(-8.033)\" class=\"c\"/>\n          </g>\n          <path d=\"M18.117,19.012l-2.85-2.85a.555.555,0,0,0-.785,0l-2.85,2.85a.555.555,0,0,0,.785.784l1.9-1.9v5.024a.555.555,0,1,0,1.109,0V17.894l1.9,1.9a.555.555,0,0,0,.785-.784Z\" transform=\"translate(-1.741 -3.974)\" class=\"d\"/>\n        </g>"
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--file': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <img\n        :src=\"disabled\"\n        class=\"twpx-form-control__file__disabled-icon\"\n        v-if=\"false\"\n      />\n      <span\n        class=\"twpx-form-control__file__clear\" :class=\"{'btn--load-circle': loadCircle}\"\n        @click.prevent=\"clearInputFile\"\n        v-if=\"isClearable\"\n      ></span>\n      <div\n        class=\"twpx-form-control__file\"\n        :class=\"{\n          filled: isFilled,\n          clearable: isClearable,\n          progressing: isProgressing,\n        }\"\n        ref=\"controlFile\"\n      >\n        <span class=\"twpx-form-control__file__label\">{{ control.label }}</span>\n\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"17.383\"\n          height=\"24\"\n          viewBox=\"0 0 17.383 24\"\n          v-html=\"icon\"\n        ></svg>\n\n        <input\n          type=\"file\"\n          :name=\"control.name\"\n          :id=\"control.id\"\n          @change=\"uploadFile($refs.inputFile.files)\"\n          ref=\"inputFile\"\n        />\n\n        <div class=\"twpx-form-control__file__progressbar\" v-show=\"(isProgressing || loadCircle) && !isInvalid\" ref=\"progressbar\" :class=\"{'minimal': minimalLoading}\">\n          <span v-html=\"label\" v-show=\"isFileLoaded\"></span>\n          <span v-show=\"!isFileLoaded\">{{percentage}}%</span>\n        </div>\n\n        <label\n          :for=\"control.id\"\n          class=\"active\"\n          v-html=\"label\"\n          ref=\"dropzone\"\n        ></label>\n      </div>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter'],
    computed: {
      progress: function progress() {
        return this.control.upload.progress;
      },
      response: function response() {
        return this.control.upload.response;
      },
      readyState: function readyState() {
        return this.control.upload.readyState;
      },
      placeholder: function placeholder() {
        if (this.focused && !this.value.trim()) {
          return this.control.hint_internal;
        } else {
          return '';
        }
      },
      active: function active() {
        return this.focused || !!this.control.value.trim();
      },
      invalid: function invalid() {
        return this.blured && !this.validate();
      },
      disabled: function disabled() {
        return this.control.disabled;
      },
      validateWatcher: function validateWatcher() {
        return this.control.validateWatcher;
      },
      focusWatcher: function focusWatcher() {
        return this.control.focusWatcher;
      },
      isInvalid: function isInvalid() {
        return !!this.invalidString;
      },
      isProgressing: function isProgressing() {
        return this.loading;
      },
      isClearable: function isClearable() {
        return this.loadCircle || !!this.filename && !this.isProgressing;
      },
      isFilled: function isFilled() {
        return !!this.filename && this.control.upload.readyState === 4 && !this.isProgressing;
      },
      fileid: function fileid() {
        return this.control.value;
      },
      invalidString: function invalidString() {
        if (this.control.upload && this.control.upload.xhrStatus === 'E') {
          return 'Ошибка загрузки';
        } else if (this.files[0] && this.files[0].size && this.files[0].name) {
          if (this.files[0].size >= this.control.maxSize) {
            this.files = [];
            return "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 ".concat(this.formatSize(this.control.maxSize));
          }
          var filename = this.files[0].name;
          var lastIndex = filename.lastIndexOf('.');
          var regExp = new RegExp(this.control.accept.join('|'));
          if (!regExp.test(filename.substring(lastIndex + 1).toLowerCase())) {
            this.files = [];
            return "\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043B\u044B ".concat(this.control.accept.map(function (w) {
              return w.toUpperCase();
            }).join(', '), ".");
          }
        }
        return '';
      },
      label: function label() {
        if (this.isProgressing) {
          return '';
        }
        if (this.isInvalid) {
          return this.invalidString;
        }
        if (this.files[0] && this.files[0].name) {
          return this.files[0].name;
        }
        return this["default"];
      },
      filename: function filename() {
        return this.control.value ? this.control.value.name : '';
      }
    },
    watch: {
      progress: function progress() {
        this.progressAnimation();
      },
      response: function response() {
        this.onResponse();
      },
      percentage: function percentage(val) {
        var _this = this;
        setTimeout(function () {
          if (val === 100) {
            _this.isFileLoaded = true;
          } else if (val === 0) {
            _this.isFileLoaded = false;
          }
        }, 600);
      },
      validateWatcher: function validateWatcher() {
        this.blured = true;
      },
      focusWatcher: function focusWatcher() {
        this.$refs.input.focus();
      }
    },
    methods: {
      uploadFile: function uploadFile(files) {
        var _this2 = this;
        this.files = files;
        // this.xhrStatus = '';
        this.percentage = 0;
        //invalid and label change
        setTimeout(function () {
          if (_this2.isInvalid) {
            _this2.$refs.inputFile.value = '';
          } else {
            _this2.loading = true;
            _this2.$emit('input', {
              value: files[0]
            });
          }
        }, 0);
      },
      onResponse: function onResponse() {
        var _this3 = this;
        if (this.response.STATUS === 'success') {
          setTimeout(function () {
            _this3.$refs.inputFile.value = '';
          }, 100);
        }
        this.$refs.progressbar.style = '';
        this.percentage = 0;
        this.loading = false;
        this.loadCircle = false;
      },
      clearInputFile: function clearInputFile() {
        this.loadCircle = true;
        this.percentage = 0;
        this.loading = false;
        this.files = [];
        this.$refs.inputFile.value = '';
        this.$emit('input', {
          value: null
        });
      },
      cancelEvent: function cancelEvent(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      },
      getCoords: function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
          top: box.top + scrollY,
          left: box.left + scrollX
        };
      },
      formatSize: function formatSize(length) {
        var i = 0,
          type = ['б', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб'];
        while (length / 1000 | 0 && i < type.length - 1) {
          length /= 1000;
          i++;
        }
        return parseInt(length) + ' ' + type[i];
      },
      progressAnimation: function progressAnimation() {
        var _this4 = this;
        var _this$progress = this.progress,
          first = _this$progress.first,
          total = _this$progress.total,
          loaded = _this$progress.loaded;
        if (first && loaded === total) {
          //loaded too fast, show minimal animation 1s
          var counter = 0,
            minimalTime = 1000,
            intervalId;
          this.minimalLoading = true;
          this.$refs.progressbar.style.width = "100%";
          intervalId = setInterval(function () {
            if (++counter === 11) {
              clearInterval(intervalId);
              // this.dataLoaded(xhr);
              _this4.loadCircle = false;
              _this4.minimalLoading = false;
              return;
            }
            _this4.percentage = Math.floor(counter * 100 / 10);
          }, minimalTime / 10);
        } else {
          this.percentage = Math.floor(loaded / total * 100);
          this.$refs.progressbar.style.width = "calc(46px + (100% - 46px ) * ".concat(this.percentage, " / 100)");
          this.loadCircle = false;
        }
      },
      focus: function focus() {
        this.focused = true;
        this.blured = false;
        this.$emit('focus');
      },
      blur: function blur() {
        this.focused = false;
        this.blured = true;
        this.$emit('blur');
      },
      enter: function enter() {
        this.$emit('enter');
      },
      validate: function validate() {
        if (this.control.required && this.value.trim() || !this.control.required) {
          if (this.control.regexp) {
            var match = String(this.value.trim()).match(RegExp(this.control.regexp));
            if (!match) {
              this.warning = this.control.regexp_description;
            } else {
              this.warning = '';
            }
            return match;
          } else {
            return true;
          }
        } else if (this.control.required && !this.value) {
          return false;
        }
        return true;
      }
    },
    mounted: function mounted() {
      var _this5 = this;
      //drag&drop file
      var dropZone = this.$refs.dropzone;
      var controlFile = this.$refs.controlFile;
      if (!dropZone) {
        return;
      }
      dropZone.addEventListener('drag', this.cancelEvent);
      dropZone.addEventListener('dragstart', this.cancelEvent);
      dropZone.addEventListener('dragend', this.cancelEvent);
      dropZone.addEventListener('dragover', this.cancelEvent);
      dropZone.addEventListener('dragenter', this.cancelEvent);
      dropZone.addEventListener('dragleave', this.cancelEvent);
      dropZone.addEventListener('drop', this.cancelEvent);
      dropZone.addEventListener('dragover', function () {
        controlFile.classList.add('dragover');
      });
      dropZone.addEventListener('dragenter', function () {
        controlFile.classList.add('dragover');
      });
      dropZone.addEventListener('dragleave', function (e) {
        var dx = e.pageX - _this5.getCoords(dropZone).left;
        var dy = e.pageY - _this5.getCoords(dropZone).top;
        if (dx < 0 || dx > dropZone.clientWidth || dy < 0 || dy > dropZone.clientHeight) {
          controlFile.classList.remove('dragover');
        }
      });
      dropZone.addEventListener('drop', function (e) {
        controlFile.classList.remove('dragover');
        controlFile.classList.add('filled');
        _this5.uploadFile(e.dataTransfer.files);
      });
    }
  };

  exports.ControlFileUpload = ControlFileUpload;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
