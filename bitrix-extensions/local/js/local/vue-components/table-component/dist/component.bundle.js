/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var TableComponent = {
    template: "\n    <div v-if=\"loading\" class=\"vue-tf-table-ph\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <div v-else-if=\"columnsNames.length\" class=\"vue-ft-table\">\n      <table class=\"table table-responsive\" :class=\"{'table-sortable': sortable}\">\n        <colgroup>\n          <col v-for=\"(col, index) in columnsNames\" :key=\"col.id\" :style=\"'width:' +  (cols[index] || 'auto') + ';'\">\n        </colgroup>\n        <thead>\n          <tr>\n            <th v-for=\"column in columnsNames\" :key=\"column.id\" :class=\"className({td:column})\" @click=\"clickTh(column)\">{{column.name}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr v-for=\"item in items.items\" :key=\"item.id\" :class=\"className({tr: item})\" :data-id=\"item.id\" :title=\"item.value\" @click=\"clickTr(item)\">\n            <td v-for=\"cell in item.cell\" v-html=\"cell.value\" :class=\"className({td:cell})\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    ",
    props: ['cols', 'columnsNames', 'items', 'sort', 'loading', 'sortable'],
    emits: ['clickTh'],
    methods: {
      clickTh: function clickTh(column) {
        if (this.sortable) {
          this.$emit('clickTh', {
            column: column
          });
        }
      },
      clickTr: function clickTr(item) {
        var url = item.url;
        var target = item.target;
        if (!url) return;
        if (target === '_self') {
          window.location.href = url;
        } else if (target === '_blank') {
          window.open(url, 'new');
        }
      },
      className: function className(_ref) {
        var tr = _ref.tr,
          td = _ref.td;
        if (tr && tr.url) {
          return 'vue-tf-table--clickable';
        } else if (td) {
          if (!this.sortable) {
            return '';
          }
          return this.sort.columnSort === td.id ? this.sort.sortType === 1 ? 'asc' : 'desc' : '';
        }
      }
    }
  };

  exports.TableComponent = TableComponent;

}((this.BX.AAS = this.BX.AAS || {})));
//# sourceMappingURL=component.bundle.js.map
