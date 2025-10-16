import '../css/result-component.css'
import { AnswerComponent } from './answer-component';

export const ResultComponent = {
    props: ['result'],
    components: {
        AnswerComponent
    },
    template: `
        <div class="twpx-voting-result">
            <div class="twpx-voting-result-question" v-for="question in result" :key="question.question">
                <h3 v-if="question.question">{{ question.question }}</h3>
                <div class="twpx-voting-result-answers">
                    <AnswerComponent v-for="answer in question.answers" :answer="answer" :key="answer.answer" />
                </div>
            </div>
        </div>
    `,
    methods: {
        countPercentage() {
            this.result.forEach(q => {
                const biggest = q.answers.reduce((b, a) => b > Number(a.votesNumber) ? b : Number(a.votesNumber), 0);
                q.answers.forEach(a => {
                    a.percentage = `${Number(a.votesNumber) / biggest * 100}%`;
                });
            });
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