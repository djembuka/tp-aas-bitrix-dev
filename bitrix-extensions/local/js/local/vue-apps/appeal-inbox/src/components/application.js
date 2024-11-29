import './application.css';

import { ProfileChoice } from 'local.vue-components.profile-choice';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';
import { profileStore } from '../stores/profile';

// import { HiddenFields } from './hidden-fields';

export const Application = {
  data() {
    return {};
  },
  components: {
    ProfileChoice,
  },
  // language=Vue

  template: `
    <ProfileChoice :profiles="profiles" />
	`,
  computed: {
    ...mapState(dataStore, ['userid', 'sessid', 'signedParameters']),
    ...mapState(profileStore, ['profiles']),
  },
  methods: {
    ...mapActions(profileStore, ['runProfiles']),
  },
  mounted() {
    this.runProfiles({
      mode: 'class',
      data: {
        userid: this.userid,
        sessid: this.sessid,
      },
      signedParameters: this.signedParameters,
    });
  },
};
