/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_messageComponent,local_vueComponents_buttonComponent) {
  'use strict';

  var TableComponent = {
    components: {
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    template: "\n    <div v-if=\"loading\" class=\"vue-tf-table-ph\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n    <MessageComponent v-else-if=\"!items.items || !items.items.length\" type=\"table-result\" size=\"small\" message=\"\u041F\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.\" :button=\"false\" />\n\n    <div v-else-if=\"columnsNames.length\" class=\"vue-ft-table\">\n      <table class=\"table table-responsive\" :class=\"{'table-sortable': sortable}\">\n        <colgroup>\n          <col v-for=\"(col, index) in columnsNames\" :key=\"col.id\" :style=\"'width:' +  (cols[index] || 'auto') + ';'\">\n        </colgroup>\n        <thead>\n          <tr>\n            <th v-for=\"column in columnsNames\" :key=\"column.id\" :class=\"className({td:column})\" @click=\"clickTh(column)\">{{column.name}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr v-for=\"item in items.items\" :key=\"item.id\" :class=\"className({tr: item})\" :data-id=\"item.id\" :title=\"item.value\" @click=\"clickTr(item)\">\n            <td v-for=\"cell in item.cell\" v-html=\"cell.value\" :class=\"className({td:cell})\"></td>\n            <td v-if=\"item.buttons\" class=\"vue-table-td--buttons\">\n              <ButtonComponent v-for=\"button in item.buttons\" :text=\"button.text\" :props=\"button.props\" @clickButton=\"clickButton({itemId: item.id, code: button.code})\" />\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    ",
    props: ['cols', 'columnsNames', 'items', 'sort', 'loading', 'sortable'],
    emits: ['clickTh', 'clickButton'],
    methods: {
      clickButton: function clickButton(args) {
        this.$emit('clickButton', args);
      },
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
        if (target === '_blank') {
          window.open(url, 'new');
        } else {
          window.location.href = url;
        }
      },
      className: function className(_ref) {
        var tr = _ref.tr,
          td = _ref.td;
        if (tr) {
          var result = '';
          if (tr.url) {
            result += 'vue-tf-table--clickable ';
          }
          if (tr["new"]) {
            result += 'vue-tf-table--new ';
          }
          return result;
        } else if (td) {
          if (!this.sortable) {
            return '';
          }
          return this.sort.columnSort === td.id ? this.sort.sortType.toLowerCase() : '';
        }
      }
    }
  };

  exports.TableComponent = TableComponent;

}((this.BX.AAS = this.BX.AAS || {}),BX.AAS,BX.AAS));
//# sourceMappingURL=component.bundle.js.map
