import './component.css';
import { IconCopy } from './iconCopy';
import { ButtonComponent } from 'local.vue-components.button-component';

export const CopyBlock = {
  props: [
    'title',
    'code'
  ],
  components: {
    IconCopy,
    ButtonComponent
  },
  template: `
    <div class="vue-copy-block" ref="block" @click.prevent="clickBlock">
      <IconCopy class="vue-copy-block__icon" />
      <h3>{{ title }}</h3>
      <pre>{{ code }}</pre>
      <div>
        <ButtonComponent text="Скопировать" :props="['primary', 'small']" />
      </div>
    </div>
  `,
  methods: {
    clickBlock(e) {
        this.copyToClipboard(e);
    },
    copyToClipboard (e) {
        if (window.navigator && navigator.clipboard && navigator.clipboard.writeText) {
            const str = this.code.trim();
            const elem = this.$refs.block;
            navigator.clipboard.writeText(str);

            if (elem) {
                let span = document.createElement('span');
                span.classList.add('b-copy-icon__note');
                span.innerText = 'Скопировано в буфер';
                span.style.top = `${e.clientY - elem.getBoundingClientRect().top - 50}px`;
                span.style.left = `${e.clientX - elem.getBoundingClientRect().left - 70}px`;
                elem.appendChild(span);

                setTimeout(() => {
                  span.classList.add('b-copy-icon__note--show');
                }, 0);

                setTimeout(() => {
                  span.classList.remove('b-copy-icon__note--show');
                }, 1000);

                setTimeout(() => {
                  span.remove();
                }, 1500);
            }
            return;
        }
        return Promise.reject('The Clipboard API is not available.');
    }
  }
};
