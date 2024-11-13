/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ControlFile = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        active: true,
        files: [],
        "default": '<a href="">Выберите файл</a>&nbsp;или перетащите в поле',
        hint: this.control.hint_external,
        icon: "<g transform=\"translate(-4.461)\">\n          <g transform=\"translate(4.461)\">\n            <g>\n              <path d=\"M21.844,6.573v15.88A1.547,1.547,0,0,1,20.3,24H6.008a1.546,1.546,0,0,1-1.547-1.547V1.547A1.546,1.546,0,0,1,6.008,0H15.27Z\" transform=\"translate(-4.461)\" class=\"a\"/>\n            </g>\n            <path d=\"M20.036,8.289l5.677,2.339v-2.2l-3.218-.951Z\" transform=\"translate(-8.33 -1.858)\" class=\"b\"/>\n            <path d=\"M25.416,6.573H20.389a1.546,1.546,0,0,1-1.547-1.547V0Z\" transform=\"translate(-8.033)\" class=\"c\"/>\n          </g>\n          <path d=\"M18.117,19.012l-2.85-2.85a.555.555,0,0,0-.785,0l-2.85,2.85a.555.555,0,0,0,.785.784l1.9-1.9v5.024a.555.555,0,1,0,1.109,0V17.894l1.9,1.9a.555.555,0,0,0,.785-.784Z\" transform=\"translate(-1.741 -3.974)\" class=\"d\"/>\n        </g>"
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    template: "\n\t\t<div\n    :class=\"{\n      'twpx-form-control': true,\n      'twpx-form-control--file': true,\n      'twpx-form-control--active': active,\n      'twpx-form-control--invalid': invalid,\n      'twpx-form-control--disabled': disabled,\n    }\"\n  >\n    <img\n      :src=\"disabled\"\n      class=\"twpx-form-control__file__disabled-icon\"\n      v-if=\"false\"\n    />\n    <span\n      class=\"twpx-form-control__file__clear\"\n      @click.prevent=\"clearInputFile\"\n      v-if=\"isClearable\"\n    ></span>\n    <div\n      class=\"twpx-form-control__file\"\n      :class=\"{\n        filled: isFilled,\n        clearable: isClearable,\n      }\"\n      ref=\"controlFile\"\n    >\n      <span class=\"twpx-form-control__file__label\">{{ control.label }}</span>\n\n      <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"17.383\"\n        height=\"24\"\n        viewBox=\"0 0 17.383 24\"\n        v-html=\"icon\"\n      ></svg>\n\n      <input\n        type=\"file\"\n        :name=\"control.name\"\n        :id=\"control.id\"\n        @change=\"uploadFile($refs.inputFile.files)\"\n        ref=\"inputFile\"\n      />\n      <label\n        :for=\"control.id\"\n        class=\"active\"\n        v-html=\"label\"\n        ref=\"dropzone\"\n      ></label>\n    </div>\n    <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n  </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter'],
    computed: {
      disabled: function disabled() {
        return this.control.disabled;
      },
      invalid: function invalid() {
        return !!this.invalidString;
      },
      isClearable: function isClearable() {
        return !!this.filename;
      },
      isFilled: function isFilled() {
        return !!this.filename;
      },
      invalidString: function invalidString() {
        if (this.files[0] && this.files[0].size && this.files[0].name) {
          if (this.files[0].size >= this.control.maxsize) {
            //this.files = [];
            return "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 ".concat(this.formatSize(this.control.maxsize));
          }
          var filename = this.files[0].name;
          var lastIndex = filename.lastIndexOf('.');
          var regExp = new RegExp(this.control.accept.join('|'));
          if (!regExp.test(filename.substring(lastIndex + 1).toLowerCase())) {
            return "\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043B\u044B ".concat(this.control.accept.map(function (w) {
              return w.toUpperCase();
            }).join(', '), ".");
          }
        }
        return '';
      },
      label: function label() {
        if (this.invalid) {
          return this.invalidString;
        }
        if (this.files[0] && this.files[0].name) {
          return this.files[0].name;
        }
        if (this.control.value) {
          return this.control.value;
        }
        return this["default"];
      },
      filename: function filename() {
        return this.control.value;
      },
      clearWatcher: function clearWatcher() {
        return this.control.clearWatcher;
      }
    },
    watch: {
      clearWatcher: function clearWatcher() {
        this.clearInputFile();
      }
    },
    methods: {
      uploadFile: function uploadFile(files) {
        this.files = files;
        if (!this.invalidString) {
          this.$emit('input', {
            value: files[0].name,
            file: files[0]
          });
        }
      },
      clearInputFile: function clearInputFile() {
        this.files = [];
        this.$refs.inputFile.value = '';
        this.$emit('input', {
          value: '',
          file: null
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
      }
    },
    mounted: function mounted() {
      var _this = this;
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
        var dx = e.pageX - _this.getCoords(dropZone).left;
        var dy = e.pageY - _this.getCoords(dropZone).top;
        if (dx < 0 || dx > dropZone.clientWidth || dy < 0 || dy > dropZone.clientHeight) {
          controlFile.classList.remove('dragover');
        }
      });
      dropZone.addEventListener('drop', function (e) {
        controlFile.classList.remove('dragover');
        _this.uploadFile(e.dataTransfer.files);
      });
    }
  };

  exports.ControlFile = ControlFile;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
