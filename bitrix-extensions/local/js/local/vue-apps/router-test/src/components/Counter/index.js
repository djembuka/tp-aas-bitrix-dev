import './style.css';

export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    reset() {
      this.count = 0;
    },
  },
  mounted() {
    setInterval(() => this.count++, 300);
  },
  template: /*html*/ `
    <div>
      <button class="button-counter" @click="reset">reset count</button>

      counter : {{ count }}
    </div>
  `,
};
