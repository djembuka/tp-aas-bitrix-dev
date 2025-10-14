import '../css/answer-component.css'

export const AnswerComponent = {
    props: ['answer'],
    template: `
      <div class="twpx-voting-answer" @showeffect="showEffect()">
        <div class="twpx-voting-answer__title">{{ answer.answer }}</div>
        <div class="twpx-voting-answer__graph twpx-graph">
          <div class="twpx-graph__wrapper">
            <div class="twpx-graph__img"></div>
            <div class="twpx-graph__num">{{Number(answer.votesNumber).toLocaleString()}}</div>
          </div>
        </div>
      </div>
    `,
    methods: {
      showEffect() {
        const wrapper = this.$el.querySelector('.twpx-graph__img');
        wrapper.style.width = 0;
        setTimeout(() => {
          wrapper.style.width = this.answer.percentage;
        }, 0);
      },
    },
};