export const formControlCheckbox = {
    data() {
        return {
            checked: this.answer.checked,
        };
    },
    props: ['pollId', 'groups', 'question', 'answer', 'disabled'],
    emits: ['setActiveQuestion', 'form-control-change'],
    template: `
        <label class="b-poll__form-control" :class="[{'i-active': checked}, {'i-disabled': getDisabledClass()}]">
            <div class="b-poll__form-control__content">
                <div class="b-poll__form-control__img" :style="getStyle()" v-if="answer.image"></div>
                <div class="b-poll__form-control__text">
                    <b v-if="answer.name" v-html="answer.name"></b>
                    <span v-if="answer.description" v-html="answer.description"></span>
                </div>
            </div>
            <div class="b-poll__checkbox">
                <input type="checkbox" :name="answer.parentUuid" v-model="checked" :value="answer.uuid" class="filled-in" @change="change()">
                <span></span>
            </div>
        </label>
    `,
    methods: {
        change() {
            //emit control change
            this.$emit('form-control-change', {
                answer: this.answer,
                checked: this.checked
            });

            //set question as active
            this.$emit('setActiveQuestion');

            //change local storage
            let storageObj = {};
            if (window.localStorage.getItem(this.pollId)) {
                storageObj = JSON.parse(
                    window.localStorage.getItem(this.pollId)
                );
            }

            storageObj[this.answer.value] = this.checked;
            window.localStorage.setItem(
                this.pollId,
                JSON.stringify(storageObj)
            );
        },
        getDisabledClass() {
            return this.disabled || (
                !this.checked &&
                String(this.question.selectableAnswers) ===
                String(this.question.checkedNum)
            );
        },
        getStyle() {
            return "background-image: url('" + this.answer.image + "')";
        },
    },
}