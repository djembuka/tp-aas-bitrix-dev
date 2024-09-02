import './component.css';

export const LoaderSquare = {
  // language=Vue
  template: `
    <div class="vue-loader-square" v-if="show">
      <div class="vue-loader-square-item vue-loader-square-item--1"></div>
      <div class="vue-loader-square-item vue-loader-square-item--2"></div>
      <div class="vue-loader-square-item vue-loader-square-item--3"></div>
      <div class="vue-loader-square-item vue-loader-square-item--4"></div>
      <div class="vue-loader-square-item vue-loader-square-item--5"></div>
    </div>
  `,
  props: ['show'],
};
