import { defineStore } from 'ui.vue3.pinia';

export const buttonsStore = defineStore('buttons-store', {
  state: () => ({
    buttons: [
      {
        id: '1',
        text: 'Primary',
        props: ['primary', 'medium'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '2',
        text: 'Secondary',
        props: ['secondary', 'medium'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '3',
        text: 'Small',
        props: ['primary', 'small'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '4',
        text: 'Medium',
        props: ['primary', 'medium'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '4',
        text: 'Large',
        props: ['primary', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '5',
        text: 'More',
        props: ['more', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '6',
        text: 'Dark',
        props: ['dark', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '7',
        text: 'Success',
        props: ['success', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '8',
        text: 'Danger',
        props: ['danger', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '9',
        text: 'Serve',
        props: ['serve', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '10',
        text: 'Disabled',
        props: ['disabled', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '11',
        text: 'Link-color',
        props: ['link-color', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '11',
        text: 'Blue-color',
        props: ['blue-color', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '12',
        text: 'Gray-color',
        props: ['gray-color', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '13',
        text: 'Red-color',
        props: ['red-color', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '14',
        text: 'Wide',
        props: ['wide', 'secondary', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '15',
        text: 'Tag',
        props: ['tag'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '16',
        text: 'Load-circle',
        props: ['load-circle', 'secondary', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '17',
        text: 'Delete',
        props: ['icon', 'delete', 'medium'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '18',
        text: 'Edit',
        props: ['icon', 'edit', 'medium'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '19',
        text: 'Delete',
        props: ['icon', 'delete', 'small'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '20',
        text: 'Delete',
        props: ['icon-delete', 'danger', 'large'],
        clickButton() {
          alert('click');
        },
      },
      {
        id: '21',
        text: 'Link to somewhere',
        props: ['icon-link', 'serve', 'small'],
        href: '#'
      },
    ],
  }),
  actions: {},
});
