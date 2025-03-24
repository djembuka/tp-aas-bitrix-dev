import './component.css';

export const ControlFileUpload = {
  data() {
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
      percentage: 0, //%
      isFileLoaded: false,
      xhrStatus: '', //'Y', 'E'
      active: true,
      files: [],
      default: '<a href="">Выберите файл</a>&nbsp;или перетащите в поле',
      required: this.control.required,
      icon: `<g transform="translate(-4.461)">
          <g transform="translate(4.461)">
            <g>
              <path d="M21.844,6.573v15.88A1.547,1.547,0,0,1,20.3,24H6.008a1.546,1.546,0,0,1-1.547-1.547V1.547A1.546,1.546,0,0,1,6.008,0H15.27Z" transform="translate(-4.461)" class="a"/>
            </g>
            <path d="M20.036,8.289l5.677,2.339v-2.2l-3.218-.951Z" transform="translate(-8.33 -1.858)" class="b"/>
            <path d="M25.416,6.573H20.389a1.546,1.546,0,0,1-1.547-1.547V0Z" transform="translate(-8.033)" class="c"/>
          </g>
          <path d="M18.117,19.012l-2.85-2.85a.555.555,0,0,0-.785,0l-2.85,2.85a.555.555,0,0,0,.785.784l1.9-1.9v5.024a.555.555,0,1,0,1.109,0V17.894l1.9,1.9a.555.555,0,0,0,.785-.784Z" transform="translate(-1.741 -3.974)" class="d"/>
        </g>`,
    };
  },
  props: ['control', 'id', 'name'],
  // language=Vue
  template: `
		<div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--file': true,
        'twpx-form-control--active': active,
        'twpx-form-control--invalid': invalid,
        'twpx-form-control--disabled': disabled,
      }"
    >
      <img
        :src="disabled"
        class="twpx-form-control__file__disabled-icon"
        v-if="false"
      />
      <span
        class="twpx-form-control__file__clear" :class="{'btn--load-circle': loadCircle}"
        @click.prevent="clearInputFile"
        v-if="isClearable"
      ></span>
      <div
        class="twpx-form-control__file"
        :class="{
          filled: isFilled,
          clearable: isClearable,
          progressing: isProgressing,
        }"
        ref="controlFile"
      >
        <span class="twpx-form-control__file__label">{{ control.label }}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.383"
          height="24"
          viewBox="0 0 17.383 24"
          v-html="icon"
        ></svg>

        <input
          type="file"
          :name="control.name"
          :id="control.id"
          @change="uploadFile($refs.inputFile.files)"
          ref="inputFile"
        />

        <div class="twpx-form-control__file__progressbar" v-show="(isProgressing || loadCircle) && !isInvalid" ref="progressbar" :class="{'minimal': minimalLoading}">
          <span v-html="label" v-show="isFileLoaded"></span>
          <span v-show="!isFileLoaded">{{percentage}}%</span>
        </div>

        <label
          :for="control.id"
          class="active"
          v-html="label"
          ref="dropzone"
        ></label>
      </div>
      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
	`,
  emits: ['input', 'focus', 'blur', 'enter'],
  computed: {
    progress() {
      return this.control.upload.progress || {};
    },
    response() {
      return this.control.upload.response || {};
    },
    readyState() {
      return this.control.upload.readyState;
    },
    placeholder() {
      if (this.focused && !this.value.trim()) {
        return this.control.hint_internal;
      } else {
        return '';
      }
    },
    active() {
      return this.focused || !!this.control.value.trim();
    },
    invalid() {
      return this.blured && !this.validate();
    },
    disabled() {
      return this.control.disabled;
    },
    validateWatcher() {
      return this.control.validateWatcher;
    },
    focusWatcher() {
      return this.control.focusWatcher;
    },
    isInvalid() {
      return !!this.invalidString;
    },
    isProgressing() {
      return this.loading;
    },
    isClearable() {
      return this.loadCircle || (!!this.filename && !this.isProgressing);
    },
    isFilled() {
      return (
        !!this.filename &&
        this.control.upload.readyState === 4 &&
        !this.isProgressing
      );
    },
    fileid() {
      return this.control.value;
    },
    invalidString() {
      console.log('inv');
      if (this.control.upload && this.control.upload.xhrStatus === 'E') {
        return 'Ошибка загрузки';
      } else if (this.files[0] && this.files[0].size && this.files[0].name) {
        if (this.files[0].size >= this.control.maxSize) {
          this.files = [];
          return `Размер файла превышает ${this.formatSize(
            this.control.maxSize
          )}`;
        }

        const filename = this.files[0].name;
        const lastIndex = filename.lastIndexOf('.');
        const regExp = new RegExp(this.control.accept.join('|'));

        if (!regExp.test(filename.substring(lastIndex + 1).toLowerCase())) {
          this.files = [];
          return `Прикладывайте файлы ${this.control.accept
            .map((w) => w.toUpperCase())
            .join(', ')}.`;
        }
      }
      return '';
    },
    label() {
      if (this.isProgressing) {
        return '';
      }
      if (this.isInvalid) {
        return this.invalidString;
      }
      if (this.files[0] && this.files[0].name) {
        return this.files[0].name;
      }
      return this.default;
    },
    filename() {
      return this.control.value ? this.control.value.name : '';
    },
  },
  watch: {
    progress() {
      this.progressAnimation();
    },
    response() {
      this.onResponse();
    },
    percentage(val) {
      setTimeout(() => {
        if (val === 100) {
          this.isFileLoaded = true;
        } else if (val === 0) {
          this.isFileLoaded = false;
        }
      }, 600);
    },
    validateWatcher() {
      this.blured = true;
    },
    focusWatcher() {
      this.$refs.input.focus();
    },
  },
  methods: {
    uploadFile(files) {
      this.files = files;
      // this.xhrStatus = '';
      this.percentage = 0;
      //invalid and label change
      setTimeout(() => {
        if (this.isInvalid) {
          this.$refs.inputFile.value = '';
        } else {
          this.loading = true;
          this.$emit('input', { value: files[0] });
        }
      }, 0);
    },
    onResponse() {
      if (this.response.STATUS === 'success') {
        setTimeout(() => {
          this.$refs.inputFile.value = '';
        }, 100);
      }

      this.$refs.progressbar.style = '';
      this.percentage = 0;
      this.loading = false;
      this.loadCircle = false;
    },
    clearInputFile() {
      this.loadCircle = true;
      this.percentage = 0;
      this.loading = false;
      this.files = [];
      this.$refs.inputFile.value = '';

      this.$emit('input', {
        value: null,
      });
    },
    cancelEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    getCoords(elem) {
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + scrollY,
        left: box.left + scrollX,
      };
    },
    formatSize(length) {
      var i = 0,
        type = ['б', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб'];
      while ((length / 1000) | 0 && i < type.length - 1) {
        length /= 1000;
        i++;
      }
      return parseInt(length) + ' ' + type[i];
    },
    progressAnimation() {
      const { first, total, loaded } = this.progress;

      if (first && loaded === total) {
        //loaded too fast, show minimal animation 1s
        let counter = 0,
          minimalTime = 1000,
          intervalId;

        this.minimalLoading = true;
        this.$refs.progressbar.style.width = `100%`;

        intervalId = setInterval(() => {
          if (++counter === 11) {
            clearInterval(intervalId);
            // this.dataLoaded(xhr);
            this.loadCircle = false;
            this.minimalLoading = false;
            return;
          }
          this.percentage = Math.floor((counter * 100) / 10);
        }, minimalTime / 10);
      } else {
        this.percentage = Math.floor((loaded / total) * 100);
        this.$refs.progressbar.style.width = `calc(46px + (100% - 46px ) * ${this.percentage} / 100)`;
        this.loadCircle = false;
      }
    },

    focus() {
      this.focused = true;
      this.blured = false;
      this.$emit('focus');
    },
    blur() {
      this.focused = false;
      this.blured = true;
      this.$emit('blur');
    },
    enter() {
      this.$emit('enter');
    },
    validate() {
      if (
        (this.control.required && this.value.trim()) ||
        !this.control.required
      ) {
        if (this.control.regexp) {
          const match = String(this.value.trim()).match(
            RegExp(this.control.regexp)
          );
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
    },
  },
  mounted() {
    //drag&drop file
    const dropZone = this.$refs.dropzone;
    const controlFile = this.$refs.controlFile;
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

    dropZone.addEventListener('dragover', () => {
      controlFile.classList.add('dragover');
    });
    dropZone.addEventListener('dragenter', () => {
      controlFile.classList.add('dragover');
    });
    dropZone.addEventListener('dragleave', (e) => {
      let dx = e.pageX - this.getCoords(dropZone).left;
      let dy = e.pageY - this.getCoords(dropZone).top;
      if (
        dx < 0 ||
        dx > dropZone.clientWidth ||
        dy < 0 ||
        dy > dropZone.clientHeight
      ) {
        controlFile.classList.remove('dragover');
      }
    });

    dropZone.addEventListener('drop', (e) => {
      controlFile.classList.remove('dragover');
      controlFile.classList.add('filled');
      this.uploadFile(e.dataTransfer.files);
    });
  },
};
