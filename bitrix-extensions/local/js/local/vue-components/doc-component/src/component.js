import './component.css';
import { ButtonComponent } from 'local.vue-components.button-component';

export const DocComponent = {
  data() {
    return {};
  },
  components: {
    ButtonComponent,
  },
  props: {
    doc: {
      type: Object,
      default: () => ({
        id: 123,
        name: 'Протокол заседания дисицплинарной комиссии 234',
        href: '/pages/Протокол заседания дисицплинарной комиссии 234.pdf',
        size: 654000,
        date: '15 января 2020',
        author: 'Азарянц Ашот Александрович',
        icon: '/template/images/pdf.svg',
        remove: false
      }),
    },
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return ['info', 'error', 'table-result'].includes(value);
      },
    },
  },
  emits: ['clickDelete'],
  // language=Vue
  template: `
		<div class="twpx-doc twpx-doc--button twpx-doc--32x44 p-16 bg-fa">
      <div class="twpx-doc__body">
        <a class="twpx-doc__icon" :href="doc.href" :style="getStyle()" target="_blank"></a>
        <span class="twpx-doc__text">
          <a :href="doc.href" target="_blank"><b>{{ doc.name }}</b></a>
          <span class="twpx-doc__data">
            <span>{{ formatFileSize(doc.size) }} {{ getFileNameAndExt(doc.href).ext }}</span>
            <span>Дата публикации: {{ formatDateToRussian(doc.date) }}</span>
            <span>Автор: {{ doc.author }}</span>
          </span>
        </span>
        <ButtonComponent v-if="doc.remove" :text="Delete" :props="['icon', 'delete', 'small']" @clickButton="$emit('clickDelete')" />
      </div>
    </div>
	`,
  computed: {},
  methods: {
    formatDateToRussian(dateString) {
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ];
      const date = new Date(dateString);
      if (isNaN(date)) return dateString; // если невалидная дата, возвращаем как есть
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    },
    getStyle() {
      return `background-image: url(${this.doc.icon})`;
    },
    getFileNameAndExt(path) {
      // Получаем только имя файла с расширением
      const fileNameWithExt = path.split('/').pop();
      // Находим позицию последней точки
      const lastDotIndex = fileNameWithExt.lastIndexOf('.');
      if (lastDotIndex === -1) {
        // Если точки нет, возвращаем всё как имя, расширение — пустая строка
        return { name: fileNameWithExt, ext: '' };
      }
      // Имя файла без расширения
      const name = fileNameWithExt.substring(0, lastDotIndex);
      // Расширение с точкой
      const ext = fileNameWithExt.substring(lastDotIndex);
      return { name, ext };
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 б';
      const units = ['Б', 'Кб', 'Мб', 'Гб', 'Тб'];
      const k = 1024;
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const size = bytes / Math.pow(k, i);
      // Для Мб и выше округляем до одного знака после запятой, для Кб и ниже — до целых
      if (i >= 2) {
        return `${size.toFixed(1)} ${units[i]}`;
      } else {
        return `${Math.round(size)} ${units[i]}`;
      }
    }
  },
};
