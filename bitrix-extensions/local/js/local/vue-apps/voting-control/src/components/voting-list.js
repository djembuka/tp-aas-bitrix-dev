import '../css/voting-list.css';


export const VotingList = {
  props: {
    lang: {
      type: Object,
      required: true
    },
    adminData: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="twpx-voting-control__voting-list">
      <h2>{{ lang.heading }} {{ adminData.totalVotes }}</h2>
      <div class="twpx-voting-control__voting-list__grid">
        <div class="twpx-voting-control__voting-list__grid__item">
            <h3>{{ lang.success }} {{ adminData.numberOfVoters }}</h3>
            <div class="twpx-voting-control__voting-list__items">
                <div class="twpx-voting-control__voting-list__item" v-for="voter in adminData.listVoters" :key="voter.name">
                    <div class="twpx-voting-control__voting-list__name" v-if="voter.name">{{ voter.name }}</div>
                    <div class="twpx-voting-control__voting-list__ornz" v-if="voter.ornz">{{ voter.ornz }}</div>
                </div>
            </div>
        </div>
        <div class="twpx-voting-control__voting-list__grid__item">
            <h3>{{ lang.warning }} {{ adminData.numberOfNonVoters }}</h3>
            <div class="twpx-voting-control__voting-list__items">
                <div class="twpx-voting-control__voting-list__item" v-for="voter in adminData.listNoneVoters" :key="voter.name">
                    <div class="twpx-voting-control__voting-list__name" v-if="voter.name">{{ voter.name }}</div>
                    <div class="twpx-voting-control__voting-list__ornz" v-if="voter.ornz">{{ voter.ornz }}</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  `
}