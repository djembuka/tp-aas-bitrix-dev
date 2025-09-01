import { defineStore } from 'ui.vue3.pinia';

export const selectDependencyStore = defineStore('select-dependency-store', {
  state: () => ({
    controls: [
      {
        property: 'select',
        type: 'dropdown',
        id: 'sd1',
        name: 'STATUS',
        label: 'Status',
        options: [
          {
            label: 'Будут выбраны 1, 2, 3',
            code: '23423423423',
            dependent_options: ['1', '2', '3']
          },
          {
            label: 'Будут выбраны 2, 3, 4',
            code: '324234324',
            dependent_options: ['2', '3', '4']
          },
          {
            label: 'Будут выбраны 3, 4, 5',
            code: '324234325',
            dependent_options: ['3', '4', '5']
          },
          {
            label: 'Будут выбраны 4, 5, 6',
            code: '123',
            dependent_options: ['4', '5', '6']
          },
        ],
        value: '',
        disabled: false,
        dependent_id: 'sd2' 
      },
      {
        property: 'select',
        type: 'dropdown',
        id: 'sd2',
        name: 'STATUS',
        label: 'Status',
        options: [
          {
            label: 'Пункт 1, будут выбраны 7, 9',
            code: '1',
            dependent_options: ['7', '9']
          },
          {
            label: 'Пункт 2, будут выбраны 8, 10',
            code: '2',
            dependent_options: ['8', '10']
          },
          {
            label: 'Пункт 3, будут выбраны 9, 11',
            code: '3',
            dependent_options: ['9', '11']
          },
          {
            label: 'Пункт 4, будут выбраны 10, 12',
            code: '4',
            dependent_options: ['10', '12']
          },
          {
            label: 'Пункт 5, будут выбраны 7, 10',
            code: '5',
            dependent_options: ['7', '10']
          },
          {
            label: 'Пункт 6, будут выбраны 8, 11',
            code: '6',
            dependent_options: ['8', '11']
          },
        ],
        value: '',
        disabled: false,
        dependent_id: 'sd3' 
      },
      {
        property: 'select',
        type: 'dropdown',
        id: 'sd3',
        name: 'STATUS',
        label: 'Status',
        options: [
          {
            label: 'Пункт 7, будут выбраны 13, 14',
            code: '7',
            dependent_options: ['13', '14']
          },
          {
            label: 'Пункт 8, будут выбраны 13, 15',
            code: '8',
            dependent_options: ['13', '15']
          },
          {
            label: 'Пункт 9, будут выбраны 14, 15',
            code: '9',
            dependent_options: ['14', '15']
          },
          {
            label: 'Пункт 10, будут выбраны 15, 16',
            code: '10',
            dependent_options: ['15', '16']
          },
          {
            label: 'Пункт 11, будут выбраны 16, 17',
            code: '11',
            dependent_options: ['16', '17']
          },
          {
            label: 'Пункт 12, будут выбраны 17, 18',
            code: '12',
            dependent_options: ['17', '18']
          },
        ],
        value: '',
        disabled: false,
        dependent_id: 'sd4' 
      },
      {
        property: 'select',
        type: 'dropdown',
        id: 'sd4',
        name: 'STATUS',
        label: 'Status',
        options: [
          {
            label: 'Пункт 13',
            code: '13',
          },
          {
            label: 'Пункт 14',
            code: '14',
          },
          {
            label: 'Пункт 15',
            code: '15',
          },
          {
            label: 'Пункт 16',
            code: '16',
          },
          {
            label: 'Пункт 17',
            code: '17',
          },
          {
            label: 'Пункт 18',
            code: '18',
          },
        ],
        value: '',
        disabled: false,
      },
    ],
  }),
  actions: {
    changeControlValue({ control, value, checked }) {
      switch (control.property) {
        case 'select':
          this[
            `changeSelect${control.type
              .substring(0, 1)
              .toUpperCase()}${control.type.substring(1).toLowerCase()}Value`
          ]({ control, value });
          break;
      }
    },
    changeSelectDropdownValue({ control, value }) {
      control.value = value;
    },
  },
});
