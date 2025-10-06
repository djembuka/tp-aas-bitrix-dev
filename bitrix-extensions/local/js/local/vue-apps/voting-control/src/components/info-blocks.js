import '../css/info-blocks.css';

export const InfoBlocks = {
  props: ['lang', 'adminData'],
  template: `
    <div class="twpx-voting-control__info-blocks">
        <div class="twpx-voting-control__info-block">
            <div class="twpx-voting-control__info-block__heading">{{ lang[0] }}</div>
            <div class="twpx-voting-control__info-block__nums">
                <span>{{ adminData.totalVotes }}</span>
            </div>
        </div>

        <div class="twpx-voting-control__info-block">
            <div class="twpx-voting-control__info-block__heading">{{ lang[1] }}</div>
            <div class="twpx-voting-control__info-block__nums">
                <span>{{ adminData.numberOfVoters }}</span>
                <span>{{ percentage(adminData.numberOfVoters) }}%</span>
            </div>
        </div>

        <div class="twpx-voting-control__info-block">
            <div class="twpx-voting-control__info-block__heading">{{ lang[2] }}</div>
            <div class="twpx-voting-control__info-block__nums">
                <span>{{ adminData.numberOfNonVoters }}</span>
                <span>{{ percentage(adminData.numberOfNonVoters) }}%</span>
            </div>
        </div>
    </div>
  `,
  methods: {
    percentage(value) {
      return Math.round((value / this.adminData.totalVotes) * 100);
    }
  }
};