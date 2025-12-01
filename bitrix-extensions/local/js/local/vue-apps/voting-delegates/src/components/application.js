import './application.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';

export const Application = {
    template: `
      <div class="twpx-voting-client__header">
          <img width="62" height="54" alt="Саморегулируемая организация аудиторов Ассоциация «Содружество»" src="/local/templates/aas/images/logo-aas-small.svg">
      </div>

      <div class="twpx-voting-members twpx-voting-client-block">

        <div class="twpx-voting-members-content">

          <h1>Съезд СРО ААС 2025</h1>

          <div class="twpx-voting-members-grid">
            <div class="twpx-voting-members-column">
              <div class="twpx-voting-members-column-header">
                <h2>Зарегистрировались</h2>
                <div class="twpx-voting-members-counter">
                  <div class="twpx-voting-members-num">{{ registeredNum }}</div>
                  <div class="twpx-voting-members-percent">{{ registeredPercent }}%</div>
                </div>
              </div>
              <div class="twpx-voting-members-list">
                <div v-for="delegate in params.registered" :key="delegate">{{ delegate }}</div>
              </div>
            </div>
            <div class="twpx-voting-members-column">
              <div class="twpx-voting-members-column-header">
                <h2>Не зарегистрировались</h2>
                <div class="twpx-voting-members-counter">
                  <div class="twpx-voting-members-num">{{ notRegisteredNum }}</div>
                  <div class="twpx-voting-members-percent">{{ notRegisteredPercent }}%</div>
                </div>
              </div>
              <div class="twpx-voting-members-list">
                <div v-for="delegate in params.notRegistered" :key="delegate">{{ delegate }}</div>
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
        registeredNum() {
          return this.params?.registered?.length || 0;
        },
        notRegisteredNum() {
          return this.params?.notRegistered?.length || 0;
        },
        registeredPercent() {
          const total = this.registeredNum + this.notRegisteredNum;
          return total ? Math.round(this.registeredNum * 100 / total) : 0;
        },
        notRegisteredPercent() {
          const total = this.registeredNum + this.notRegisteredNum;
          return total ? Math.round(this.notRegisteredNum * 100 / total) : 0;
        },
    },
    methods: {
        ...mapActions(dataStore, [
          'changeProp',
        ]),
        subscribe() {
            const _this = this;

            if (window.BX && BX.ready) {
              BX.ready(function() {
                BX.PULL.subscribe({
                  moduleId: 'voting',
                  callback: function(data) {

                    if (data.command.startsWith('delegates')) {
                      _this.changeProp('command', data.command);
                      _this.changeProp('params', data.params);
                      _this.changeProp('extra', data.extra);
                    }
      
                    console.log('Command:', data.command)
                    console.log('Params:', data.params)
                    console.log('Extra:', data.extra)
                  }.bind(this)
                });
                BX.PULL.extendWatch('VOTING-DELEGATES'); /* код голосование для уникальность */
              });
            }
          }
    },
    mounted() {
        this.subscribe();
    }
};