/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_buttonComponent) {
  'use strict';

  var DocComponent = {
    data: function data() {
      return {};
    },
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    props: {
      doc: {
        type: Object,
        "default": function _default() {
          return {
            id: 123,
            name: 'Протокол заседания дисицплинарной комиссии 234',
            href: '/pages/Протокол заседания дисицплинарной комиссии 234.pdf',
            size: 654000,
            date: '15 января 2020',
            author: 'Азарянц Ашот Александрович',
            icon: '/template/images/pdf.svg',
            remove: false
          };
        }
      },
      type: {
        type: String,
        "default": 'info',
        validator: function validator(value) {
          return ['info', 'error', 'table-result'].includes(value);
        }
      }
    },
    emits: ['clickDelete'],
    // language=Vue
    template: "\n\t\t<div class=\"twpx-doc twpx-doc--button twpx-doc--32x44\">\n      <div class=\"twpx-doc__body\">\n        <a class=\"twpx-doc__icon\" :href=\"doc.href\" :style=\"getStyle()\" target=\"_blank\"></a>\n        <span class=\"twpx-doc__text\">\n          <a v-if=\"doc.name\" class=\"twpx-doc__name\" :href=\"doc.href\" target=\"_blank\">{{ doc.name }}</a>\n          <span class=\"twpx-doc__data\">\n            <span v-if=\"doc.size && doc.href\">{{ formatFileSize(doc.size) }} {{ getFileNameAndExt(doc.href).ext }}</span>\n            <span v-if=\"doc.date\">\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438: {{ formatDateToRussian(doc.date) }}</span>\n            <span v-if=\"doc.author\">\u0410\u0432\u0442\u043E\u0440: {{ doc.author }}</span>\n          </span>\n        </span>\n        <ButtonComponent v-if=\"doc.remove\" :text=\"Delete\" :props=\"['icon', 'delete', 'small']\" @clickButton=\"$emit('clickDelete')\" />\n      </div>\n    </div>\n\t",
    computed: {},
    methods: {
      formatDateToRussian: function formatDateToRussian(dateString) {
        var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        var date = new Date(dateString);
        if (isNaN(date)) return dateString; // если невалидная дата, возвращаем как есть
        var day = date.getDate();
        var month = months[date.getMonth()];
        var year = date.getFullYear();
        return "".concat(day, " ").concat(month, " ").concat(year);
      },
      getStyle: function getStyle() {
        return "background-image: url(".concat(this.doc.icon, ")");
      },
      getFileNameAndExt: function getFileNameAndExt(path) {
        // Получаем только имя файла с расширением
        var fileNameWithExt = path.split('/').pop();
        // Находим позицию последней точки
        var lastDotIndex = fileNameWithExt.lastIndexOf('.');
        if (lastDotIndex === -1) {
          // Если точки нет, возвращаем всё как имя, расширение — пустая строка
          return {
            name: fileNameWithExt,
            ext: ''
          };
        }
        // Имя файла без расширения
        var name = fileNameWithExt.substring(0, lastDotIndex);
        // Расширение с точкой
        var ext = fileNameWithExt.substring(lastDotIndex);
        return {
          name: name,
          ext: ext
        };
      },
      formatFileSize: function formatFileSize(bytes) {
        if (bytes === 0) return '0 б';
        var units = ['Б', 'Кб', 'Мб', 'Гб', 'Тб'];
        var k = 1024;
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        var size = bytes / Math.pow(k, i);
        // Для Мб и выше округляем до одного знака после запятой, для Кб и ниже — до целых
        if (i >= 2) {
          return "".concat(size.toFixed(1), " ").concat(units[i]);
        } else {
          return "".concat(Math.round(size), " ").concat(units[i]);
        }
      }
    }
  };

  exports.DocComponent = DocComponent;

}((this.BX.AAS = this.BX.AAS || {}),BX.AAS));
//# sourceMappingURL=component.bundle.js.map
