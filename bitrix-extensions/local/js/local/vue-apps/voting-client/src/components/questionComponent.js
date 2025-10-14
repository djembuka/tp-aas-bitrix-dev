import { formControlCheckbox } from '../components/formControlCheckbox.js';
import { formControlNumber } from '../components/formControlNumber.js';
import { formControlRadio } from '../components/formControlRadio.js';

export const questionComponent = {
    data() {
        return {
            timeoutId: undefined,
            animatePulse: false,
        };
    },
    components: {
      formControlCheckbox,
      formControlNumber,
      formControlRadio,
    },
    props: ['pollId', 'groups', 'groupIndex', 'questionIndex', 'question', 'votingStatusXml'],
    emits: ['changeChecked', 'changeCheckedNum', 'setActiveQuestion'],
    template: `

        <div class="b-poll__questions__item" :id="'item_' + groupIndex + '_' + questionIndex">
            <div class="b-poll__questions__info" :class="getInfoClass()" v-if="question.selectableAnswers">{{question.checkedNum}} из {{question.selectableAnswers}}</div>

            <h3 v-if="question.name">{{question.name}}</h3>
            <p v-if="question.description" v-html="question.description"></p>

            <div class="b-poll__questions__note" :class="getNoteClass()" v-if="question.type === '1' && question.selectableAnswers"><div>Выбрано {{question.checkedNum}} из допустимых {{question.selectableAnswers}}</div></div>

            <div class="b-poll__questions__set" v-if="votingStatusXml!=='voting_v5' && votingStatusXml!=='voting_v6'">
                <div v-for="(answer, answerIndex) in question.answers">

                    <formControlCheckbox v-if="question.type === '1'"
                        :pollId="pollId"
                        :groups="groups"
                        :answer="answer"
                        :groupIndex="groupIndex"
                        :questionIndex="questionIndex"
                        :answerIndex="answerIndex"
                        @form-control-change="formControlChange"
                        @setActiveQuestion="setActiveQ"
                    />

                    <formControlRadio v-else-if="question.type === '0'"
                        :pollId="pollId"
                        :groups="groups"
                        :answer="answer"
                        :answerIndex="answerIndex"
                        @removeActiveQuestion="removeActiveQ"
                        @form-control-change="radioControlChange"
                    />

                    <formControlNumber v-else-if="question.type === 'number'"
                        :pollId="pollId"
                        :groups="groups"
                        :answer="answer"
                        :answerIndex="answerIndex"
                        @removeActiveQuestion="removeActiveQ"
                    />
                </div>
            </div>

        </div>
    `,
    methods: {
        setActiveQ(args) {
            this.$emit('setActiveQuestion', args);
        },
        removeActiveQ(args) {
            this.$emit('removeActiveQuestion', args);
        },
        getInfoClass() {
            return {
                'i-show':
                    this.groups[this.groupIndex].questions[this.questionIndex].checkedNum > 0 &&
                    this.groups[this.groupIndex].questions[this.questionIndex].isActive,
                'bg-success':
                    String(this.groups[this.groupIndex].questions[this.questionIndex].selectableAnswers) ===
                    String(this.groups[this.groupIndex].questions[this.questionIndex].checkedNum),
                animate__animated: true,
                animate__pulse: this.animatePulse,
            };
        },
        getNoteClass() {
            return {
                'text-success':
                    this.groups[this.groupIndex].questions[this.questionIndex].allowed ===
                    this.groups[this.groupIndex].questions[this.questionIndex].checkedNum,
                'text-danger':
                    this.groups[this.groupIndex].questions[this.questionIndex].checkedNum === 0,
            };
        },
        formControlChange(args) {
            //commit checked
            this.$emit('changeChecked', args);

            //change checked num
            this.changeCheckedNum();

            //animate the block
            this.animatePulse = false;
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => (this.animatePulse = true), 0);
        },
        radioControlChange(args) {
            this.$emit('changeChecked', args);
        },
        changeCheckedNum() {
            let num = 0;
            this.groups[this.groupIndex].questions[ this.questionIndex ].answers.forEach((answer) => {
                if (answer.checked === true) {
                    num++;
                }
            });

            this.$emit('changeCheckedNum', {
                groupIndex: this.groupIndex,
                questionIndex: this.questionIndex,
                checkedNum: num,
            });
        },
    },
    mounted() {
        this.changeCheckedNum();

        /*let observer = new IntersectionObserver((entries, observer) => {
            //console.log('item_' + this.questionIndex, observer);
            let entry = entries[0];

            if (entry.intersectionRatio > 0) {
            entry.target.classList.add('b-poll__questions__item--fixed');
            } else {
            entry.target.classList.remove('b-poll__questions__item--fixed');
            }
        });

        observer.observe(
            document.querySelector(`#item_${this.groupIndex}_${this.questionIndex}`)
        );*/
    },
}