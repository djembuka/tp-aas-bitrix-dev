export const HiddenFields = {
  data() {
    return {};
  },
  props: ['hidden'],
  template: `
    <div>
      <input v-for="field in hidden" :key="generateKey()" type="hidden" :name="field.name" :value="field.value">
    </div>
  `,
  methods: {
    generateKey() {
      return Date.now() * Math.random();
    },
  },
};
