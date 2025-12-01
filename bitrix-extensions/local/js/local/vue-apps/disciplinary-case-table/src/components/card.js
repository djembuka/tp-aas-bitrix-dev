import '../css/action-cards.css';
import { ButtonComponent } from 'local.vue-components.button-component';

export const CardComponent = {
  components: {
    ButtonComponent,
  },
  props: ['card'],
  emits: ['clickButton'],
  template: `
      <div class="dc-action-card" :class="{'dc-action-card--wide': !this.card.buttons}" :data-id="card.id">
          <div class="dc-action-card__content">
              <div class="dc-action-card__props">
                  <div class="dc-action-card__prop" v-for="prop in card.cell" :key="card.id + prop.id">
                      <div class="dc-action-card__prop-title">{{ prop.name }}</div>
                      <div class="dc-action-card__prop-value" v-html="prop.value"></div>
                  </div>
              </div>
              <div class="dc-action-card__edit" v-if="editButton">
                  <ButtonComponent :text="editButton.text" :props="editButton.props" @clickButton="clickEdit()" /> 
              </div>
          </div>
          <div class="dc-action-card__button" v-if="deleteButton">
              <ButtonComponent :text="deleteButton.text" :props="deleteButton.props" @clickButton="clickDelete()" />
          </div>
      </div>
    `,
  computed: {
    editButton() {
      if (!this.card.buttons) return null;
      return this.card.buttons.find((b) => b.code === 'edit');
    },
    deleteButton() {
      if (!this.card.buttons) return null;
      return this.card.buttons.find((b) => b.code === 'delete');
    },
  },
  methods: {
    clickEdit() {
      this.$emit('clickButton', { itemId: this.card.id, code: 'edit' });
    },
    clickDelete() {
      this.$emit('clickButton', { itemId: this.card.id, code: 'delete' });
    },
  },
};
