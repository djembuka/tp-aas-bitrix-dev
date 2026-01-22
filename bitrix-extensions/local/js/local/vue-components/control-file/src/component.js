import './component.css';

import { IconFile } from './IconFile';
import { IconLock } from './IconLock.js';

export const ControlFile = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      focused: false,
      blured: false,
      warning: '',
      active: true,
      files: [],
      default: `Выберите файл (${(this.control.accept || [])
        .map((w) => w.toLowerCase())
        .join(', ')} до ${this.formatSize(this.control.maxsize)})`,
      hint: this.control.hint_external,
    };
  },
  props: ['control', 'id', 'name'],
  emits: ['input', 'focus', 'blur', 'enter'],
  components: {
    IconFile,
    IconLock,
  },
  // language=Vue
  template: `
  <div
    ref="control"
    :class="{
      'twpx-form-control': true,
      'twpx-form-control--file': true,
      'twpx-form-control--active': active,
      'twpx-form-control--invalid': invalid,
      'twpx-form-control--disabled': disabled,
      'twpx-form-control--filled': isFilled,
      'twpx-form-control--clearable': isClearable,
    }"
  >
    <IconLock
      class="twpx-form-control__file__disabled-icon"
      v-if="disabled"
    />
    <span
      class="twpx-form-control__file__clear"
      @click.prevent="clearInputFile"
      v-if="isClearable"
    ></span>
    <div
      class="twpx-form-control__file"
      ref="controlFile"
    >
      <span class="twpx-form-control__file__label">{{ controlLabel }}</span>

      <IconFile :scheme="iconScheme" />

      <input
        type="file"
        :name="control.name"
        :id="control.id"
        @change="uploadFile($refs.inputFile.files)"
        ref="inputFile"
      />
      <label
        :for="control.id"
        class="active"
      >
        <span
          class="twpx-form-control__file__filename"
          v-html="label"
          ref="dropzone"
        >
        </span>
      </label>
    </div>
    <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
  </div>
	`,
  computed: {
    iconScheme() {
      if (this.disabled) {
        return 'disabled';
      } else if (this.invalid) {
        return 'invalid';
      } else if (this.isFilled) {
        return 'filled';
      }
      //return 'new';
      return 'default';
    },
    controlLabel() {
      if (this.control.required && !this.control.label.includes('*')) {
        return `${this.control.label} *`;
      }
      return this.control.label;
    },
    disabled() {
      return this.control.disabled;
    },
    invalid() {
      return !!this.invalidString;
    },
    isClearable() {
      return !this.disabled && !!this.filename;
    },
    isFilled() {
      return !!this.filename;
    },
    invalidString() {
      if (this.files[0] && this.files[0].size && this.files[0].name) {
        if (this.files[0].size >= this.control.maxsize) {
          //this.files = [];
          return `Размер файла превышает ${this.formatSize(
            this.control.maxsize
          )}`;
        }

        const filename = this.files[0].name;
        const lastIndex = filename.lastIndexOf('.');
        const regExp = new RegExp((this.control.accept || []).join('|'));

        if (!regExp.test(filename.substring(lastIndex + 1).toLowerCase())) {
          return `Прикладывайте файлы ${(this.control.accept || [])
            .map((w) => w.toLowerCase())
            .join(', ')}.`;
        }
      }
      return '';
    },
    label() {
      if (this.invalid) {
        return this.invalidString;
      }
      if (this.files[0] && this.files[0].name) {
        return this.files[0].name;
      }
      if (this.control.value) {
        return this.control.value;
      }
      return this.default;
    },
    filename() {
      return this.control.value;
    },
    clearWatcher() {
      return this.control.clearWatcher;
    },
  },
  watch: {
    clearWatcher() {
      this.clearInputFile();
    }
  },
  methods: {
    uploadFile(files) {
      this.files = files;
      if (!this.invalidString) {
        this.$refs.inputFile.files = files; // for dran-n-drop and browser submit
        this.$emit('input', { value: files[0].name, file: files[0] });
      }
    },
    clearInputFile() {
      this.files = [];
      this.$refs.inputFile.value = '';
      this.$emit('input', { value: '', file: null });
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
    dropZone() {
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
        this.uploadFile(e.dataTransfer.files);
      });
    },
  },
  mounted() {
    this.dropZone();
  },
};
