import '../css/result-component.css'
import { AnswerComponent } from './answer-component';

export const ResultComponent = {
    data() {
        return {
            result: [
                {
                    title: 'За',
                    votes: '100',
                    percentage: '100%'
                },
                {
                    title: 'Против',
                    votes: '50',
                    percentage: '100%'
                },
                {
                    title: 'Воздержался',
                    votes: '10',
                    percentage: '100%'
                }
            ]
        }
    },
    components: {
        AnswerComponent
    },
    template: `
        <div class="twpx-voting-result">
            <AnswerComponent v-for="answer in result" :answer="answer" />
        </div>
    `,
    methods: {
        countPercentage() {
            const biggest = this.result.reduce((b, a) => b > Number(a.votes) ? b : Number(a.votes), 0);
            this.result.forEach(a => {
                a.percentage = `${Number(a.votes) / biggest * 100}%`;
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