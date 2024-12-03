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
    <ProfileChoice :profiles="profiles" @clickProfile="clickProfile" />
	`,
  computed: {
    ...mapState(dataStore, ['userid', 'sessid', 'signedParameters']),
    ...mapState(profileStore, ['profiles', 'profilesCounter']),
  },
  methods: {
    ...mapActions(profileStore, [
      'runProfiles',
      'runSetDefaultProfile',
      'setDefaultProfile',
      'increaseProfilesCounter',
    ]),
    clickProfile({ id }) {
      this.setDefaultProfile({ id });
      this.increaseProfilesCounter();

      this.runSetDefaultProfile(
        {
          mode: 'class',
          data: {
            userid: this.userid,
            sessid: this.sessid,
            profileid: id,
          },
          signedParameters: this.signedParameters,
        },
        null,
        this.profilesCounter
      );
    },
  },
  mounted() {
    this.runProfiles(
      {
        mode: 'class',
        data: {
          userid: this.userid,
          sessid: this.sessid,
        },
        signedParameters: this.signedParameters,
      },
      () => {
        //predefined
        //filter
        //cols
        //appeals
      }
    );
  },
};
