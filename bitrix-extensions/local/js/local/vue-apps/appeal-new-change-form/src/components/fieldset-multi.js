import '../css/fieldset-multi.css'

import { ControlChoice } from 'local.vue-components.control-choice';

export const FieldsetMulti = {
  data() {
    return {
      emptyFieldset: {},
      multi: null,
      fieldset: {
        id: '123f',
        title: 'Место работы',
        type: 'fieldset',
        multi: 3,
        controls: [
          {
						"property": 'text',
						id: 'PROPERTY_355_0',
						name: 'PROPERTY[355][0]',
						"label": "ФИО кандидата *",
						"required": true,
						"value": "",
					},
					{
						"property": 'hint',
						id: 'PROPERTY_358_0',
						name: 'PROPERTY[358][0]',
						"label": "ОРНЗ кандидата",
						"value": "",
						"count": 3,
						"action": "/markup/pages/appeal-new-change-form/hints.json",
						"required": false,
						"disabled": false,
						"multi": 3,
            "hint_external": "ОРНЗ кандидата, если он является членом СРО ААС"
					},
          {
						"property": 'tel',
						id: 'PROPERTY_360_0',
						name: 'PROPERTY[360][0]',
						"label": "Телефон кандидата *",
						"required": true,
						"value": "",
					},
					{
						"property": 'email',
						id: 'PROPERTY_361_0',
						name: 'PROPERTY[361][0]',
						"label": "Адрес электронной почты кандидата *",
						"required": true,
						"value": "",
					},
          {
            "property": "date",
            "type": "range",
            "id": "id7",
            "label": "Calendar",
            "name": "DATE_FROM_TO",
            "required": true,
            "value": [
              "20.02.2024",
              "28.02.2024"
            ],
            "hint_external": "Обсуждаем проекты международных стандартов и документов"
          },
          {
            "property": "select",
            "type": "dropdown",
            "id": "id13",
            "name": "STATUS",
            "label": "Status",
            "options": [
              {
                "label": "molestias",
                "code": "23423423423"
              },
              {
                "label": "Farming",
                "code": "324234324"
              },
              {
                "label": "Very",
                "code": "324234325"
              }
            ],
            "value": "",
            "disabled": false,
            "hint_external": "Обсуждаем проекты международных стандартов и документов"
          }
        ]
      },
    };
  },
  props: ['fieldset1'],
  components: { ControlChoice },
  template: `
    <div class="twpx-fieldset-multi">
      <div class="twpx-fieldset-multi__item" v-for="(fieldsetItem, fieldsetIndex) in fieldset.multi" :key="fieldsetItem.id">
        <div v-if="fieldset.multi.length > 1" @click="remove(fieldsetIndex)" class="btn-delete"></div>
        <h4 class="twpx-fieldset-multi__title">{{ fieldset.title }} {{ fieldsetIndex + 1 }}</h4>

        <div class="twpx-fieldset-multi__controls">

          <ControlChoice
            v-for="(formControl, controlIndex) in fieldsetItem.controls"
            :key="formControl.id"
            :control="formControl"
            @create="$emit('create', $event)"
            @add="$emit('add', $event)"
            @remove="$emit('remove', $event)"
            @input="$emit('input', $event)"
            @focus="$emit('focus', $event)"
            @blur="$emit('blur', $event)"
            @enter="$emit('enter', $event)"
            @hints="$emit('hints', $event)"
          />

        </div>
      </div>
      <hr class="hr--line" style="margin-bottom: 2.5rem;">
      <button class="btn btn-success btn-md" :disabled="isBtnDisabled" @click.prevent="add">Добавить еще</button>
      <hr class="hr--lg">
      <hr class="hr--lg">
    </div>
  `,
  emits: [
    'autosave',
    'timeoutAutosave',
    'create',
    'add',
    'remove',
    'input',
    'focus',
    'blur',
    'enter',
  ],
  computed: {
    isBtnDisabled() {
      return this.fieldset.multi.length === this.multi;
    }
  },
  methods: {
    //transition
    enter: function (el, done) {
      Velocity(el, 'slideDown', {
        easing: 'ease',
        duration: 500,
      });
    },
    leave: function (el, done) {
      Velocity(el, 'slideUp', {
        easing: 'ease',
        duration: 500,
      });
    },
    add() {
      const a = JSON.parse(JSON.stringify(this.emptyFieldset));
      a.id = Math.floor(Math.random * 1000);

      this.$emit('add', {
        parent: this.fieldset,
        add: a
      });

      this.autosave();
    },
    remove(index) {
      this.$emit('remove', {
        parent: this.fieldset,
        index
      });
      this.autosave();
    },
    autosave() {
      this.$emit('autosave');
    },
    timeoutAutosave() {
      this.$emit('timeoutAutosave');
    },
    clearEmptyFieldset() {
      this.emptyFieldset?.controls.forEach(c => {
        switch (c.property) {
          case 'checkbox':
            c.checked = false;
            break;
          default:
            c.value = '';
            break;
        }
      });
    }
  },
  beforeMount() {
    this.emptyFieldset = JSON.parse(JSON.stringify(this.fieldset));
    this.clearEmptyFieldset();
    this.multi = this.fieldset.multi;
    this.$emit('create', {parent: this.fieldset});
    this.add();
    console.log(this.emptyFieldset.controls[1].multi)
  }
};