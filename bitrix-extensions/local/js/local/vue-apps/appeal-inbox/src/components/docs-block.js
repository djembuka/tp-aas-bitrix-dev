export const DocsBlock = {
  data() {
    return {};
  },
  props: ['docsBlock'],
  template: `
    <div>
      <h2 v-if="docsBlock.title">{{docsBlock.title}}</h2>
      <p v-if="docsBlock.text" v-html="docsBlock.text"></p>
      <div class="b-docs-block" v-if="docsBlock && docsBlock.items.length">
        <div class="b-docs-block__item" href="/pages/news/" v-for="(item, index) in docsBlock.items" :key="item.id">
          <hr v-if="index !== 0">
          <div class="b-docs-block__body">
            <a class="b-docs-block__icon" :href="item.url" :style="'background-image: url( ' + item.icon + ' );'"></a>
            <span class="b-docs-block__text">
              <a :href="item.url">{{item.title}}</a>
              <span class="b-docs-block__data" v-if="item.data.length">
                <span class="text-muted" v-for="data in item.data" :key="data">{{data}}</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
};
