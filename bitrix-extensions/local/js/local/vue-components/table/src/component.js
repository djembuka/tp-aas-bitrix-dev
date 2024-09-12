import './component.css';
import './placeholder.css';

export const TableComponent = {
  template: `
    <div v-if="loading" class="vue-tf-table-ph">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-else-if="columnsNames.length" class="vue-ft-table">
      <table class="table table-responsive">
        <colgroup>
          <col v-for="(col, index) in columnsNames" :key="col.id" :style="'width:' +  (cols[index] || 'auto') + ';'">
        </colgroup>
        <thead>
          <tr>
            <th v-for="column in columnsNames" :key="column.id" :class="className(column)" @click="clickTh(column)">{{column.name}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items.items" :key="item.id" :data-id="item.id" :title="item.value" @click="clickTr(item)">
            <td v-for="cell in item.cell" v-html="cell.value" :class="className(cell)"></td>
          </tr>
        </tbody>
      </table>
    </div>
    `,
  props: ['cols', 'columnsNames', 'items', 'sort', 'loading'],
  emits: ['clickTh'],
  methods: {
    clickTh(column) {
      this.$emit('clickTh', { column });
    },
    clickTr(item) {
      let url = item.url;
      let target = item.target;
      if (!url) return;

      if (target === '_self') {
        window.location.href = url;
      } else if (target === '_blank') {
        window.open(url, 'new');
      }
    },
    className(tableItem) {
      return this.sort.columnSort === tableItem.id
        ? this.sort.sortType === 1
          ? 'asc'
          : 'desc'
        : '';
    },
  },
};
