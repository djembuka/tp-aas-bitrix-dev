import { MessageComponent } from 'local.vue-components.message-component';

import { mapState } from 'ui.vue3.pinia';
import { messagesStore } from '../stores/messages-store';

export const MessagesComponent = {
  data() {},
  components: {
    MessageComponent,
  },
  template: `
    <div style="display: grid; gap: 16px;">
      <div class="twpx-design-system-block" v-for="message in messages" :key="message.id">
        <div>
          <MessageComponent :type="message.type" :size="message.size" :message="message.message" :button="message.button" />
        </div>
        <pre>{{ getMessageCode(message) }}</pre>
      </div>
    </div>
  `,
  computed: {
    ...mapState(messagesStore, ['messages']),
  },
  methods: {
    getMessageCode(message) {
      return `import { MessageComponent } from 'local.vue-components.message-component';
      
<MessageComponent
  :type="${message.type}"
  :size="${message.size}"
  :message="${message.message}"
  ${message.button ? ':button="' + message.button : ''}
/>`;
    },
  },
};
