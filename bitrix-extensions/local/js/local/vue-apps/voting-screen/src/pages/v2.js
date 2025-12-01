import '../css/application.css';
import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { StatusTimer } from '../components/status-timer.js';

export const V2 = {
  components: {
    StatusTimer,
  },
  template: `
    <div class="twpx-voting-screen">

      <div class="twpx-voting-screen-block twpx-voting-screen__header">
        <img src="/local/templates/aas/images/logo-aas-small.svg" alt="" />
        <StatusTimer :command="command" />
      </div>
      
      <div class="twpx-voting-screen-block twpx-voting-screen__description">
        <div class="twpx-voting-screen__voting-name">{{ params.title }}</div>
        <div class="twpx-voting-screen__voting-description">{{ params.description }}</div>
      </div>

      <div class="twpx-voting-screen__body">
        <div class="twpx-voting-screen-block twpx-voting-screen-app">
          <div class="twpx-voting-screen__body-title">Используйте приложение<br>для голосования</div>
          <div class="twpx-voting-screen__body-content">
            <img :src="params.app" alt="" class="twpx-voting-screen__qr" />
          </div>
        </div>
        <div class="twpx-voting-screen-block twpx-voting-screen-app">
          <div class="twpx-voting-screen__body-title">Или отсканируйте QR</div>
          <div class="twpx-voting-screen__body-content">
            <img :src="params.qr" alt="" class="twpx-voting-screen__qr" />
          </div>
        </div>
      </div>

    </div>
	`,
  computed: {
      ...mapState(dataStore, [
        'command',
        'params',
        'extra',
      ]),
  },
};
