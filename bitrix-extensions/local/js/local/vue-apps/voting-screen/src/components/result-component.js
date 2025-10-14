import '../css/result-component.css'
import { AnswerComponent } from './answer-component';

export const ResultComponent = {
    props: ['answers'],
    components: {
        AnswerComponent
    },
    template: `
        <div class="twpx-voting-result">
            <AnswerComponent v-for="answer in answers" :answer="answer" />
        </div>
    `,
    methods: {
        countPercentage() {
            const biggest = this.answers.reduce((b, a) => b > Number(a.votesNumber) ? b : Number(a.votesNumber), 0);
            this.answers.forEach(a => {
                a.percentage = `${Number(a.votesNumber) / biggest * 100}%`;
            })
        }
    },
    mounted() {
        this.countPercentage();

        setTimeout(() => {
            this.$el.querySelectorAll('.twpx-voting-answer')
                .forEach((answer) => {
                    answer.dispatchEvent(new Event('showeffect'));
                });
        }, 0);
        
    }
};