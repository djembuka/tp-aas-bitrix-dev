import './icon-file.css';

export const IconFile = {
  props: {
    scheme: {
      type: String,
      default: 'default'
    }
  },
  template: `
    <svg :class="classList" xmlns="http://www.w3.org/2000/svg" width="17.383" height="24" viewBox="0 0 17.383 24" >
      <g transform="translate(-4.461)">
        <g transform="translate(4.461)">
          <g>
            <path class="a" d="M21.844,6.573v15.88A1.547,1.547,0,0,1,20.3,24H6.008a1.546,1.546,0,0,1-1.547-1.547V1.547A1.546,1.546,0,0,1,6.008,0H15.27Z" transform="translate(-4.461)" />
          </g>
          <path class="b" d="M20.036,8.289l5.677,2.339v-2.2l-3.218-.951Z" transform="translate(-8.33 -1.858)" />
          <path class="c" d="M25.416,6.573H20.389a1.546,1.546,0,0,1-1.547-1.547V0Z" transform="translate(-8.033)" />
        </g>
        <path class="d" d="M18.117,19.012l-2.85-2.85a.555.555,0,0,0-.785,0l-2.85,2.85a.555.555,0,0,0,.785.784l1.9-1.9v5.024a.555.555,0,1,0,1.109,0V17.894l1.9,1.9a.555.555,0,0,0,.785-.784Z" transform="translate(-1.741 -3.974)" />
      </g>
    </svg>
  `,
  computed: {
    classList() {
      return `twpx-form-control__file__icon twpx-form-control__file__icon--${this.scheme}`;
    }
  }
};
