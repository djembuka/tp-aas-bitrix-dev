import './pagination.css';

export const Pagination = {
  template: `
    <div class="vue-ft-table-bottom" v-if="num">
      <div class="vue-ft-table-all" v-if="items.resultCount">Всего: {{ items.resultCount }}</div>
      <div class="vue-ft-table-pagination">
        <div v-for="page in num">
          <span class="vue-ft-table-pagination-active" v-if="getStartIndex(page) === items.startIndex">{{ active }}</span>
          <a class="vue-ft-table-pagination-page" href="" v-else @click.prevent="$emit('clickPage', {startIndex: getStartIndex(page)})">{{ page }}</a>
        </div>
        <a class="vue-ft-table-pagination-arrow" href="" v-if="prev >= 0" @click.prevent="$emit('clickPage', {startIndex: prev})">Предыдущая</a>
        <a class="vue-ft-table-pagination-arrow" href="" v-if="next <= items.resultCount - 1" @click.prevent="$emit('clickPage', {startIndex: next})">Следующая</a>
      </div>
    </div>
  `,
  props: ['items', 'maxCountPerRequest'],
  emits: ['clickPage'],
  computed: {
    num() {
      return Math.ceil(
        Number(this.items.resultCount) / Number(this.maxCountPerRequest)
      );
    },
    active() {
      return (
        Number(this.items.startIndex) / Number(this.maxCountPerRequest) + 1
      );
    },
    prev() {
      return Number(this.items.startIndex) - Number(this.maxCountPerRequest);
    },
    next() {
      return Number(this.items.startIndex) + Number(this.maxCountPerRequest);
    },
  },
  methods: {
    getStartIndex(page) {
      return (page - 1) * Number(this.maxCountPerRequest);
    },
  },
};
