import './component.css';

export const ProfileChoice = {
  data() {},
  props: {
    profiles: {
      type: Object,
      default: [],
    },
  },
  // language=Vue
  template: `
    <div class="b-profile-choice" v-if="profiles.length">
      <a v-for="profile in profiles" :key="profile.id" class="b-profile-choice__item" :class="{active: profile.active}" :href="profile.link">
        <i>{{ profile.newAppealsCount }}</i>
        <span>{{ profile.name }}</span>
      </a>
    </div>
	`,
  emits: [],
  methods: {},
};
