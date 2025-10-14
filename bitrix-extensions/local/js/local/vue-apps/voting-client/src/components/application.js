import '../css/basic.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';

import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';

export const Application = {
    components: {
        LoaderCircle,
        MessageComponent
    },
    template: `
        <div class="twpx-voting-client__header">
            <img width="62" height="54" alt="Саморегулируемая организация аудиторов Ассоциация «Содружество»" src="/local/templates/aas/images/logo-aas-small.svg">
            <span>{{ params.name }}</span>
        </div>

        <div class="twpx-voting-client">

            <div class="twpx-voting-client__loader" v-if="loading">
                <LoaderCircle :show="loading" />
            </div>

            <MessageComponent v-else-if="error" type="error" size="big" :message="error" />

            <router-view v-else />
        </div>
    `,
    computed: {
        ...mapState(dataStore, [
          'loading',
          'error',
          'params'
        ]),
    },
    methods: {
        ...mapActions(dataStore, [
            'changeProp',
            'runBitrixMethod'
        ]),
    },
    async mounted() {
        const _this = this;

        if (window.BX && BX.ready) {
            BX.ready(function() {
              BX.PULL.subscribe({
                moduleId: 'voting-app',
                callback: function(data) {
                  console.log('Command:', data.command)
                  console.log('Params:', data.params)
                  // console.log('Extra:', data.extra)

                  _this.changeProp('loading', false)
                  _this.changeProp('params', data.params);

                  _this.$router.push(`/${data.command}`);
                }.bind(this)
              });
              BX.PULL.extendWatch('VOTING-APP');
            });
        }

        this.changeProp('loading', true);
        
        try {
            await this.runBitrixMethod('getState');
        } catch(error) {
            this.changeProp('loading', false)
            this.changeProp('error', error?.errors ? error?.errors[0].message : error)
        }
    }
};