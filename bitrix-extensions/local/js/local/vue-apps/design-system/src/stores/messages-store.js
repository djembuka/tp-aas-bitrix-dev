import { defineStore } from 'ui.vue3.pinia';

export const messagesStore = defineStore('messages-store', {
  state: () => ({
    messages: [
      {
        id: '1',
        type: 'info',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '2',
        type: 'info',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '1-1',
        type: 'info',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '2-1',
        type: 'info',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '3',
        type: 'error',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '4',
        type: 'error',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '3-1',
        type: 'error',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '4-1',
        type: 'error',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '5',
        type: 'table-result',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '6',
        type: 'table-result',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '5-1',
        type: 'table-result',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '6-1',
        type: 'table-result',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '7',
        type: 'success',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '8',
        type: 'success',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '7-1',
        type: 'success',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '8-1',
        type: 'success',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '9',
        type: 'lock-green',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '10',
        type: 'lock-green',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '9-1',
        type: 'lock-green',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '10-1',
        type: 'lock-green',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '11',
        type: 'lock',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '12',
        type: 'lock',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland'
      },
      {
        id: '11-1',
        type: 'lock',
        size: 'big',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
      {
        id: '12-1',
        type: 'lock',
        size: 'small',
        message: 'Our ointments harness unmatched soothing properties derived from high-quality fermented papaya freshly harvested in Far North Queensland',
        button: 'Done'
      },
    ],
  }),
  actions: {},
});
