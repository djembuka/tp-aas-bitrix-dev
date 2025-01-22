import './component.css';
import './placeholder.css';

import { MessageComponent } from 'local.vue-components.message-component';

export const TableComponent = {
  components: { MessageComponent },
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
    <MessageComponent v-else-if="!items.items || !items.items.length" type="table-result" size="small" message="По выбранным фильтрам ничего не найдено. Измените параметры фильтра и попробуйте снова." :button="false" />
    <div v-else-if="columnsNames.length" class="vue-ft-table">
      <table class="table table-responsive" :class="{'table-sortable': sortable}">
        <colgroup>
          <col v-for="(col, index) in columnsNames" :key="col.id" :style="'width:' +  (cols[index] || 'auto') + ';'">
        </colgroup>
        <thead>
          <tr>
            <th v-for="column in columnsNames" :key="column.id" :class="className({td:column})" @click="clickTh(column)">{{column.name}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items.items" :key="item.id" :class="className({tr: item})" :data-id="item.id" :title="item.value" @click="clickTr(item)">
            <td v-for="cell in item.cell" v-html="cell.value" :class="className({td:cell})"></td>
          </tr>
        </tbody>
      </table>
    </div>
    `,
  props: ['cols', 'columnsNames', 'items', 'sort', 'loading', 'sortable'],
  emits: ['clickTh'],
  methods: {
    clickTh(column) {
      if (this.sortable) {
        this.$emit('clickTh', { column });
      }
    },
    clickTr(item) {
      let url = item.url;
      let target = item.target;
      if (!url) return;

      if (target === '_blank') {
        window.open(url, 'new');
      } else {
        window.location.href = url;
      }
    },
    className({ tr, td }) {
      if (tr && tr.url) {
        return 'vue-tf-table--clickable';
      } else if (td) {
        if (!this.sortable) {
          return '';
        }

        return this.sort.columnSort === td.id
          ? this.sort.sortType.toLowerCase()
          : '';
      }
    },
  },
};
