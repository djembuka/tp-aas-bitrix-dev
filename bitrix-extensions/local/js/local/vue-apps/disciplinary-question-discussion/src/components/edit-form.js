import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';

export const CommentItem = {
    data() {
        return {
            controls: [
                {
                  "id": "id1-1",
                  "property": "textarea",
                  "name": "COMMENT",
                  "label": "Комментарий",
                  "value": "Опишите, пожалуйста, ваш вопрос, проблему или пожелание максимально подробно. Укажите, где и на каком этапе возникла сложность, что вы уже пробовали сделать, и какие сообщения (если были) вы получили. Чем больше информации вы предоставите, тем быстрее и точнее мы сможем вам помочь. При необходимости можно прикрепить скриншоты или ссылки. Мы внимательно прочтём каждое сообщение и постараемся дать вам исчерпывающий ответ.",
                  "required": true,
                  "disabled": false
                }
              ],
        }
    },
    components: {
        ControlChoice,
        ButtonComponent,
        LoaderCircle,
        MessageComponent
    },
    props: ['heading', 'controls'],
    emits: ['clickYes', 'clickNo'],
    template: `
        <div class="twpx-comment-edit-form">
            <div class="twpx-comment-edit-form__heading">{{  }}</div>
            <div class="twpx-comment-edit-form__controls">{{ }}</div>
            <div class="twpx-comment-edit-form__buttons">
                <ButtonComponent :text="no" :props="['gray-color', 'large']" @clickButton="$emit('clickNo')" />
                <ButtonComponent :text="yes" :props="['secondary', 'large']" @clickButton="$emit('clickYes')" />
            </div>
        </div>
    `,
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            const pad = (n) => n.toString().padStart(2, '0');
            return (
                pad(date.getDate()) +
                '.' +
                pad(date.getMonth() + 1) +
                '.' +
                date.getFullYear() +
                ' ' +
                pad(date.getHours()) +
                ':' +
                pad(date.getMinutes()) +
                ':' +
                pad(date.getSeconds())
            );
        }
    }
}