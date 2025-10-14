export const formControlRadio = {
    data() {
        return {
            checked: this.answer.checked,
        };
    },
    props: ['pollId', 'answerIndex', 'answer'],
    emits: ['removeActiveQuestion', 'form-control-change'],
    template: `
        <label class="b-poll__form-control" :class="{'i-active': checked}">
            <div class="b-poll__form-control__content">
                <div class="b-poll__form-control__img" :style="getStyle()" v-if="answer.image"></div>
                <div class="b-poll__form-control__text"><b v-html="answer.name"></b><span v-html="answer.description"></span></div>
            </div>
            <div class="b-poll__radio"><input type="radio" :name="answer.parentUuid" :checked="checked" :value="answer.uuid" class="with-gap" @change="change"><span></span></div>
        </label>
    `,
    methods: {
        change(e) {
            if (e.target.checked) {
                e.target
                    .closest('.b-poll__questions__set')
                    .querySelectorAll('label')
                    .forEach(function (label) {
                    //set inactive
                    label.classList.remove('i-active');
                });
                e.target.closest('label').classList.add('i-active');
            }

            //set question as active
            this.$emit('removeActiveQuestion');

            //set checked
            this.checked = true;

            //emit control change
            this.$emit('form-control-change', {
                answer: this.answer,
                checked: this.checked
            });

            //change local storage
            let storageObj = {};
            if (window.localStorage.getItem(this.pollId)) {
                storageObj = JSON.parse(
                    window.localStorage.getItem(this.pollId)
                );
            }

            if (e.target.checked) {
                //sibling radios
                e.target
                    .closest('.b-poll__questions__set')
                    .querySelectorAll('input[type=radio]')
                    .forEach(function (radio) {
                        storageObj[radio.value] = radio.checked;
                    });
                //this radio
                storageObj[this.answer.uuid] = this.checked;
            }

            window.localStorage.removeItem(this.pollId);
            window.localStorage.setItem(
                this.pollId,
                JSON.stringify(storageObj)
            );
        },
        getStyle() {
            return "background-image: url('" + this.answer.image + "')";
        },
    },
}