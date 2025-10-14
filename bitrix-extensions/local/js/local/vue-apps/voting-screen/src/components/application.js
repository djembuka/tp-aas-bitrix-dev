import '../css/application.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';

export const Application = {
    template: `
        <router-view />
    `,
    computed: {
        ...mapState(dataStore, [
          'command',
          'params',
          'extra',
        ]),
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
                    _this.changeProp('command', data.command);
                    _this.changeProp('params', data.params);
                    _this.changeProp('extra', data.extra);

                    if (_this.command.startsWith('voting')) {
                        _this.$router.push( `/${_this.command}`);
                    }
      
                    console.log('Command:', data.command)
                    console.log('Params:', data.params)
                    console.log('Extra:', data.extra)
                  }.bind(this)
                });
                BX.PULL.extendWatch('VOTING-RESULT'); /* код голосование для уникальность */
              });
            }
          }
    },
    mounted() {
        this.subscribe()
    }
};