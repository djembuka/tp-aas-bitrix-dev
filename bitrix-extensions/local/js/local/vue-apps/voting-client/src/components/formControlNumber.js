export const formControlNumber = {
    data() {
        return {};
    },
    props: ['pollId', 'answerIndex', 'answer'],
    emits: ['removeActiveQuestion'],
    template: `
    <div class="b-poll__form-control">
        <div class="b-poll__form-control__content">
            <div class="b-poll__form-control__img" :style="getStyle()" v-if="answer.img"></div>
            <div class="b-poll__form-control__text"><b v-html="answer.title"></b><span v-html="answer.note"></span></div>
        </div>
        <div class="b-poll__input b-float-label">
            <label class="b-poll__input-label active">{{answer.label}}</label>
            <input type="number" :name="answer.name" v-model="answer.value" @change="change">
        </div>
    </div>
    `,
    methods: {
        change(e) {
            e.target.parentNode.classList.add('i-active');

            //set question as active
            this.$emit('removeActiveQuestion');

            //change local storage
            let storageObj = {};
            if (window.localStorage.getItem(this.pollId)) {
                storageObj = JSON.parse(
                    window.localStorage.getItem(this.pollId)
                );
            }

            storageObj[this.answer.name] = this.answer.value;

            window.localStorage.removeItem(this.pollId);
            window.localStorage.setItem(
                this.pollId,
                JSON.stringify(storageObj)
            );
        },
        getStyle() {
            return "background-image: url('" + this.answer.img + "')";
        },
    },
}