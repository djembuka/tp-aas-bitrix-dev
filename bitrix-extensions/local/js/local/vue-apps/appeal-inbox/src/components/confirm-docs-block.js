export const ConfirmDocsBlock = {
  props: ['confirmDocsBlock'],
  template: `
    <div>

      <h2 v-if="confirmDocsBlock.title">{{ confirmDocsBlock.title }}</h2>

      <p v-if="confirmDocsBlock.items.length !== 1 && confirmDocsBlock.text" v-html="confirmDocsBlock.text"></p>

      <div v-for="(doc, index) in confirmDocsBlock.items">
        File
        <hr>
      </div>

    </div>`,
};
