import Counter from '../components/Counter';

export default {
  name: 'About',
  components: {
    Counter,
  },
  template: /*html*/ `
    <div>
        <h2>Счетчик на странице About</h2>
        <Counter/>
    </div>
  `,
};
