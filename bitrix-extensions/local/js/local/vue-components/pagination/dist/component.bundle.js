/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var ThePagination = {
    // language=Vue
    template: "\n    <div class=\"vue-pagination\" v-if=\"pagesArr.length\">\n      <div v-for=\"item in pagesArr\">\n        <a class=\"vue-pagination-page\" href=\"\" v-if=\"item.count && item.type === 'page'\" @click.prevent=\"$emit('clickPage', {count: item.count})\">{{ item.count }}</a>\n        <span class=\"vue-pagination-active\" v-else-if=\"item.count && item.type === 'active'\">{{ item.count }}</span>\n        <a class=\"vue-pagination-page\" href=\"\" v-else-if=\"item.count && item.type === 'ellipsis'\" @click.prevent=\"$emit('clickPage', {count: item.count})\">...</a>\n        <a class=\"vue-pagination-arrow\" href=\"\" v-else-if=\"item.count && item.type === 'prev'\" @click.prevent=\"$emit('clickPage', {count: item.count})\">\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F</a>\n        <a class=\"vue-pagination-arrow\" href=\"\" v-else-if=\"item.count && item.type === 'next'\" @click.prevent=\"$emit('clickPage', {count: item.count})\">\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F</a>\n      </div>\n    </div>\n  ",
    props: ['pagesNum', 'pageActive'],
    emits: ['clickPage'],
    computed: {
      pagesArr: function pagesArr() {
        var pagesArr = [];

        //active
        pagesArr.push({
          type: 'active',
          count: this.pageActive
        });
        if (this.pageActive - 1 > 1) {
          pagesArr.unshift({
            type: 'page',
            count: this.pageActive - 1
          });
        }
        if (this.pageActive - 2 > 1) {
          pagesArr.unshift({
            type: 'page',
            count: this.pageActive - 2
          });
        }
        if (this.pageActive + 1 < this.pagesNum) {
          pagesArr.push({
            type: 'page',
            count: this.pageActive + 1
          });
        }
        if (this.pageActive + 2 < this.pagesNum) {
          pagesArr.push({
            type: 'page',
            count: this.pageActive + 2
          });
        }
        //additional
        if (this.pageActive + 2 > this.pagesNum && this.pageActive - 3 > 1) {
          pagesArr.unshift({
            type: 'page',
            count: this.pageActive - 3
          });
        }
        if (this.pageActive + 1 > this.pagesNum && this.pageActive - 4 > 1) {
          pagesArr.unshift({
            type: 'page',
            count: this.pageActive - 4
          });
        }
        if (this.pageActive - 2 < 1 && this.pageActive + 3 < this.pagesNum) {
          pagesArr.push({
            type: 'page',
            count: this.pageActive + 3
          });
        }
        if (this.pageActive - 1 < 1 && this.pageActive + 4 < this.pagesNum) {
          pagesArr.push({
            type: 'page',
            count: this.pageActive + 4
          });
        }
        //first last
        if (Number(this.pageActive) !== 1) {
          pagesArr.unshift({
            type: 'page',
            count: 1
          });
        }
        if (Number(this.pageActive) !== Number(this.pagesNum)) {
          pagesArr.push({
            type: 'page',
            count: this.pagesNum
          });
        }
        //ellipsis
        var a = [];
        pagesArr.forEach(function (item, index) {
          if (pagesArr[index + 1] && pagesArr[index + 1].count - item.count > 1) {
            a.push(index);
          }
        });
        if (a[0] !== undefined) {
          pagesArr.splice(a[0] + 1, 0, {
            type: 'ellipsis',
            count: Math.round(pagesArr[a[0]].count + pagesArr[a[0] + 1].count - pagesArr[a[0]].count / 2)
          });
        }
        if (a[1] !== undefined) {
          pagesArr.splice(a[1] + 2, 0, {
            type: 'ellipsis',
            count: Math.round(pagesArr[a[1]].count + pagesArr[a[1] + 1].count - pagesArr[a[1]].count / 2)
          });
        }
        //prev next
        if (this.pageActive - 1 >= 1) {
          pagesArr.push({
            type: 'prev',
            count: this.pageActive - 1
          });
        }
        if (this.pageActive + 1 <= this.pagesNum) {
          pagesArr.push({
            type: 'next',
            count: this.pageActive + 1
          });
        }
        return pagesArr;
      }
    }
  };

  exports.ThePagination = ThePagination;

}((this.BX.AAS = this.BX.AAS || {})));
//# sourceMappingURL=component.bundle.js.map
