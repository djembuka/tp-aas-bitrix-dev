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
            <p v-if="question.description" v-html="question.description" class="twpx-voting-description"></p>

            <div class="b-poll__questions__note" :class="getNoteClass()" v-if="noteVisibility"><div>Выбрано {{question.checkedNum}} из допустимых {{question.selectableAnswers}}</div></div>

            <div class="b-poll__questions__set" v-if="votingStatusXml!=='voting_v5' && votingStatusXml!=='voting_v6'">
                <div v-for="answer in question.answers" :key="Math.floor(Math.random() * 100000)">

                    <formControlCheckbox v-if="question.type === '1'"
                        :pollId="pollId"
                        :groups="groups"
                        :answer="answer"
                        :question="question"
                        :disabled="votingStatusXml==='voting_v2' || votingStatusXml==='voting_v4'"
                        @form-control-change="formControlChange"
                        @setActiveQuestion="setActiveQ"
                    />

                    <formControlRadio v-else-if="question.type === '0'"
                        :pollId="pollId"
                        :groups="groups"
                        :answer="answer"
                        :disabled="votingStatusXml==='voting_v2' || votingStatusXml==='voting_v4'"
                        @removeActiveQuestion="removeActiveQ"
                        @form-control-change="radioControlChange"
                    />

                    <formControlNumber v-else-if="question.type === 'number'"
                        :pollId="pollId"
                        :groups="groups"
                        :answer="answer"
                        @removeActiveQuestion="removeActiveQ"
                    />
                </div>
            </div>

        </div>
    `,
    computed: {
        noteVisibility() {
            return this.votingStatusXml!=='voting_v2' &&
                   this.votingStatusXml!=='voting_v4' &&
                   this.votingStatusXml!=='voting_v5' &&
                   this.votingStatusXml!=='voting_v6' &&
                   this.question.type === '1' &&
                   this.question.selectableAnswers
        }
    },
    methods: {
        setActiveQ(args) {
            this.$emit('setActiveQuestion', {...args, question: this.question});
        },
        removeActiveQ(args) {
            this.$emit('removeActiveQuestion', args);
        },
        getInfoClass() {
            return {
                'i-show': this.question.checkedNum > 0 && this.question.isActive,
                'bg-success': String(this.question.selectableAnswers) === String(this.question.checkedNum),
                animate__animated: true,
                animate__pulse: this.animatePulse,
            };
        },
        getNoteClass() {
            return {
                'text-success': Number(this.question.selectableAnswers) === Number(this.question.checkedNum),
                'text-danger': this.question.checkedNum === 0,
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
            const num = this.question.answers.reduce((count, answer) => {
                return answer.checked === true ? count + 1 : count;
            }, 0);

            this.$emit('changeCheckedNum', {
                question: this.question,
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