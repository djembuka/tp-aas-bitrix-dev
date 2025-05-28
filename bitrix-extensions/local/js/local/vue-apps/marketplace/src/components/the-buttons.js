import { ButtonComponent } from 'local.vue-components.button-component';

export const TheButtons = {
    components: {
        ButtonComponent
    },
    template: `
        <div>
            <ButtonComponent :text="$Bitrix.Loc.getMessage('TWPX_MARKETPLACE_BUTTON_NEXT')" :props="['secondary','medium']" @clickButton="" />
        </div>
    `
}