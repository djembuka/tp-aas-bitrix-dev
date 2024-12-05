import './component.css';
import './placeholder.css';

export const ProfileChoice = {
  data() {},
  props: {
    profiles: {
      type: Object,
      default: [],
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  // language=Vue
  template: `
    <div v-if="loading" class="vue-profile-choice-ph">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="vue-profile-choice" v-else-if="profiles.length">
      <a v-for="profile in profiles" :key="profile.id" class="vue-profile-choice__item" :class="{active: profile.default}" :data-id="profile.id" @click.prevent="click(profile.id)">
        <i v-if="profile.newAppealsCount">{{ profile.newAppealsCount }}</i>
        <span>{{ profile.name }}</span>
      </a>
    </div>
	`,
  emits: ['clickProfile'],
  methods: {
    click(id) {
      this.$emit('clickProfile', { id });
    },
  },
};
