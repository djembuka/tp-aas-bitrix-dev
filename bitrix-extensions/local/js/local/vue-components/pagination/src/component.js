import './component.css';

export const TablePagination = {
  // language=Vue
  template: `
    <div class="vue-pagination" v-if="pagesArr.length">
      <div v-for="item in pagesArr">
        <a class="vue-pagination-page" href="" v-if="item.type === 'page'" @click.prevent="$emit('clickPage', {count: item.count})">{{ item.count }}</a>
        <span class="vue-pagination-active" v-else-if="item.type === 'active'">{{ item.count }}</span>
        <a class="vue-pagination-page" href="" v-else-if="item.type === 'ellipsis'" @click.prevent="$emit('clickPage', {count: item.count})">...</a>
        <a class="vue-pagination-arrow" href="" v-else-if="item.type === 'prev'" @click.prevent="$emit('clickPage', {count: item.count})">Предыдущая</a>
        <a class="vue-pagination-arrow" href="" v-else-if="item.type === 'next'" @click.prevent="$emit('clickPage', {count: item.count})">Следующая</a>
      </div>
    </div>
  `,
  props: ['pagesNum', 'pageActive'],
  emits: ['clickPage'],
  computed: {
    pagesArr() {
      const pagesArr = [];

      //active
      pagesArr.push({
        type: 'active',
        count: this.pageActive,
      });
      if (this.pageActive - 1 > 1) {
        pagesArr.unshift({
          type: 'page',
          count: this.pageActive - 1,
        });
      }
      if (this.pageActive - 2 > 1) {
        pagesArr.unshift({
          type: 'page',
          count: this.pageActive - 2,
        });
      }
      if (this.pageActive + 1 < this.pagesNum) {
        pagesArr.push({
          type: 'page',
          count: this.pageActive + 1,
        });
      }
      if (this.pageActive + 2 < this.pagesNum) {
        pagesArr.push({
          type: 'page',
          count: this.pageActive + 2,
        });
      }
      //additional
      if (this.pageActive + 2 > this.pagesNum && this.pageActive - 3 > 1) {
        pagesArr.unshift({
          type: 'page',
          count: this.pageActive - 3,
        });
      }
      if (this.pageActive + 1 > this.pagesNum && this.pageActive - 4 > 1) {
        pagesArr.unshift({
          type: 'page',
          count: this.pageActive - 4,
        });
      }
      if (this.pageActive - 2 < 1 && this.pageActive + 3 < this.pagesNum) {
        pagesArr.push({
          type: 'page',
          count: this.pageActive + 3,
        });
      }
      if (this.pageActive - 1 < 1 && this.pageActive + 4 < this.pagesNum) {
        pagesArr.push({
          type: 'page',
          count: this.pageActive + 4,
        });
      }
      //first last
      if (Number(this.pageActive) !== 1) {
        pagesArr.unshift({
          type: 'page',
          count: 1,
        });
      }
      if (Number(this.pageActive) !== Number(this.pagesNum)) {
        pagesArr.push({
          type: 'page',
          count: this.pagesNum,
        });
      }
      //ellipsis
      let a = [];
      pagesArr.forEach((item, index) => {
        if (pagesArr[index + 1] && pagesArr[index + 1].count - item.count > 1) {
          a.push(index);
        }
      });
      if (a[0] !== undefined) {
        pagesArr.splice(a[0] + 1, 0, {
          type: 'ellipsis',
          count: Math.round(
            pagesArr[a[0]].count +
              pagesArr[a[0] + 1].count -
              pagesArr[a[0]].count / 2
          ),
        });
      }
      if (a[1] !== undefined) {
        pagesArr.splice(a[1] + 2, 0, {
          type: 'ellipsis',
          count: Math.round(
            pagesArr[a[1]].count +
              pagesArr[a[1] + 1].count -
              pagesArr[a[1]].count / 2
          ),
        });
      }
      //prev next
      if (this.pageActive - 1 >= 1) {
        pagesArr.push({
          type: 'prev',
          count: this.pageActive - 1,
        });
      }
      if (this.pageActive + 1 <= this.pagesNum) {
        pagesArr.push({
          type: 'next',
          count: this.pageActive + 1,
        });
      }
      return pagesArr;
    },
  },
};
