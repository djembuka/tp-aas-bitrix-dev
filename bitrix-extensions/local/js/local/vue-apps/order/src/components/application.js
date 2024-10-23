import './application.css';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data';

export const Application = {
  data() {
    return {
      OPEN_SOURCE_ORDER_TEMPLATE_PROPERTIES_TITLE: 'Свойства заказа:',
      OPEN_SOURCE_ORDER_TEMPLATE_DELIVERIES_TITLE: 'Службы доставки:',
      OPEN_SOURCE_ORDER_TEMPLATE_PAY_SYSTEMS_TITLE: 'Платежные системы:',
      OPEN_SOURCE_ORDER_TEMPLATE_BASKET_TITLE: 'Состав заказа',
      OPEN_SOURCE_ORDER_TEMPLATE_BASKET_NAME_COLUMN: 'Название',
      OPEN_SOURCE_ORDER_TEMPLATE_BASKET_COUNT_COLUMN: 'Количество',
      OPEN_SOURCE_ORDER_TEMPLATE_BASKET_UNIT_PRICE_COLUMN: 'Цена за штуку',
      OPEN_SOURCE_ORDER_TEMPLATE_BASKET_DISCOUNT_COLUMN: 'Цена со скидкой',
      OPEN_SOURCE_ORDER_TEMPLATE_BASKET_TOTAL_COLUMN: 'Итого',
      OPEN_SOURCE_ORDER_TEMPLATE_ORDER_TOTAL_TITLE: 'Итоговые цифры',
      OPEN_SOURCE_ORDER_TEMPLATE_PRODUCTS_PRICES_TITLE: 'Цены товаров',
      OPEN_SOURCE_ORDER_TEMPLATE_PRODUCTS_BASE_PRICE:
        'Стоимость товаров без скидок',
      OPEN_SOURCE_ORDER_TEMPLATE_PRODUCTS_PRICE:
        'Стоимость товаров со скидками',
      OPEN_SOURCE_ORDER_TEMPLATE_PRODUCTS_DISCOUNT: 'Скидка на товары',
      OPEN_SOURCE_ORDER_TEMPLATE_DELIVERY_PRICES_TITLE: 'Стоимость доставки',
      OPEN_SOURCE_ORDER_TEMPLATE_DELIVERY_BASE_PRICE:
        'Стоимость доставки без учета скидок',
      OPEN_SOURCE_ORDER_TEMPLATE_DELIVERY_PRICE:
        'Стоимость доставки со скидками',
      OPEN_SOURCE_ORDER_TEMPLATE_DELIVERY_DISCOUNT: 'Скидка на доставку',
      OPEN_SOURCE_ORDER_TEMPLATE_SUM_TITLE: 'Заказ целиком',
      OPEN_SOURCE_ORDER_TEMPLATE_TOTAL_BASE_PRICE: 'Общая цена без скидок',
      OPEN_SOURCE_ORDER_TEMPLATE_TOTAL_DISCOUNT: 'Общая скидка',
      OPEN_SOURCE_ORDER_TEMPLATE_TOTAL_PRICE: 'К оплате',
      OPEN_SOURCE_ORDER_TEMPLATE_MAKE_ORDER_BUTTON: 'Оформить заказ',
    };
  },
  components: {},
  // language=Vue

  template: `
    <form action="" method="post" name="os-order-form" id="os-order-form">
      <input type="hidden" name="person_type_id" :value="PERSON_TYPE_ID">
      <h2>{{OPEN_SOURCE_ORDER_TEMPLATE_PROPERTIES_TITLE}}</h2>
      <table>

        <tr v-for="arProp in PROPERTIES" :key="arProp.ID">
          <td>
            <label :for="arProp.FORM_LABEL">
              {{arProp.NAME}}
              <span class="required" style="color: red;" title="%s" v-if="arProp.IS_REQUIRED">*</span>
            </label>
            <!--<div class="error" data-v-for="error in arProp.ERRORS" data-key="error.id">error.getMessage()</div>-->
          </td>
          <td>
            <div v-if="arProp.TYPE === 'LOCATION'" class="location">
              <select class="location-search" :name="arProp.FORM_NAME"
                :id="arProp.FORM_LABEL">
                <option :data-data='arProp.LOCATION_DATA' :value="arProp.VALUE">{{arProp.LOCATION_DATA.label}}</option>
              </select>
            </div>
            <div v-else-if="arProp.TYPE === 'ENUM'">
              <div v-for="(name, code) in arProp.OPTIONS">
                <label class="enum-option">
                  <input type="radio" :name="arProp.FORM_NAME" :value="code">
                  {{name}}
                </label>
              </div>
            </div>
            <div v-else-if="arProp.TYPE === 'DATE'">
              <calendar></calendar>
            </div>
            <div v-else-if="arProp.TYPE === 'Y/N'">
              <input :id="arProp.FORM_LABEL" type="checkbox" :name="arProp.FORM_NAME" value="Y">
            </div>
            <div v-else>
              <input :id="arProp.FORM_LABEL" type="text" :name="arProp.FORM_NAME" :value="arProp.VALUE">
            </div>
          </td>
        </tr>

      </table>

      <h2>{{OPEN_SOURCE_ORDER_TEMPLATE_DELIVERIES_TITLE}}</h2>
      <!--<div data-v-for="error in DELIVERY_ERRORS" class="error" data-key="error.id">error.getMessage()</div>-->
      <div v-for="arDelivery in DELIVERY_LIST" :key="arDelivery.ID">
        <label>
          <input type="radio" name="delivery_id" :value="arDelivery.ID" :checked="arDelivery.CHECKED">
          {{arDelivery.NAME}}
          {{arDelivery.PRICE_DISPLAY}}
        </label>
        <br>
      </div>

      <h2>{{OPEN_SOURCE_ORDER_TEMPLATE_PAY_SYSTEMS_TITLE}}</h2>
      <!--<div data-v-for="error in PAY_SYSTEM_ERRORS" class="error" data-key="error.id">error.getMessage()</div>-->
      <div v-for="arPaySystem in PAY_SYSTEM_LIST" :key="arPaySystem.ID">
        <label>
          <input type="radio" name="pay_system_id" :value="arPaySystem.ID" :checked="arPaySystem.CHECKED">
          {{arPaySystem.NAME}}
        </label>
        <br>
      </div>

      <h2>{{OPEN_SOURCE_ORDER_TEMPLATE_BASKET_TITLE}}</h2>
      <table>
        <tr>
          <th>{{OPEN_SOURCE_ORDER_TEMPLATE_BASKET_NAME_COLUMN}}</th>
          <th>{{OPEN_SOURCE_ORDER_TEMPLATE_BASKET_COUNT_COLUMN}}</th>
          <th>{{OPEN_SOURCE_ORDER_TEMPLATE_BASKET_UNIT_PRICE_COLUMN}}</th>
          <th>{{OPEN_SOURCE_ORDER_TEMPLATE_BASKET_DISCOUNT_COLUMN}}</th>
          <th>{{OPEN_SOURCE_ORDER_TEMPLATE_BASKET_TOTAL_COLUMN}}</th>
        </tr>
        <tr v-for="arBasketItem in BASKET" :key="arBasketItem.ID">
          <td>
            {{arBasketItem.NAME}}
            <div v-if="arBasketItem.PROPERTIES.length" class="basket-properties">
              <div v-for="arProp in arBasketItem.PROPERTIES" :key="arProp.ID">
                {{arProp.NAME}}
                {{arProp.VALUE}}
                <br>
              </div>
            </div>
          </td>
          <td>{{arBasketItem.QUANTITY_DISPLAY}}</td>
          <td v-html="arBasketItem.BASE_PRICE_DISPLAY"></td>
          <td v-html="arBasketItem.PRICE_DISPLAY"></td>
          <td v-html="arBasketItem.SUM_DISPLAY"></td>
        </tr>
      </table>

      <h2>{{OPEN_SOURCE_ORDER_TEMPLATE_ORDER_TOTAL_TITLE}}</h2>

      <h3>{{OPEN_SOURCE_ORDER_TEMPLATE_PRODUCTS_PRICES_TITLE}}:</h3>
      <table>
        <tr>
          <td>{{OPEN_SOURCE_ORDER_TEMPLATE_PRODUCTS_BASE_PRICE}}</td>
          <td v-html="PRODUCTS_BASE_PRICE_DISPLAY"></td>
        </tr>
        <tr>
          <td>{{OPEN_SOURCE_ORDER_TEMPLATE_PRODUCTS_PRICE}}</td>
          <td v-html="PRODUCTS_PRICE_DISPLAY"></td>
        </tr>
        <tr>
          <td>{{OPEN_SOURCE_ORDER_TEMPLATE_PRODUCTS_DISCOUNT}}</td>
          <td v-html="PRODUCTS_DISCOUNT_DISPLAY"></td>
        </tr>
      </table>

      <h3>{{OPEN_SOURCE_ORDER_TEMPLATE_DELIVERY_PRICES_TITLE}}:</h3>
      <table>
        <tr>
          <td>{{OPEN_SOURCE_ORDER_TEMPLATE_DELIVERY_BASE_PRICE}}</td>
          <td v-html="DELIVERY_BASE_PRICE_DISPLAY"></td>
        </tr>
        <tr>
          <td>{{OPEN_SOURCE_ORDER_TEMPLATE_DELIVERY_PRICE}}</td>
          <td v-html="DELIVERY_PRICE_DISPLAY"></td>
        </tr>
        <tr>
          <td>{{OPEN_SOURCE_ORDER_TEMPLATE_DELIVERY_DISCOUNT}}</td>
          <td v-html="DELIVERY_DISCOUNT_DISPLAY"></td>
        </tr>
      </table>

      <h3>{{OPEN_SOURCE_ORDER_TEMPLATE_SUM_TITLE}}:</h3>
      <table>
        <tr>
          <td>{{OPEN_SOURCE_ORDER_TEMPLATE_TOTAL_BASE_PRICE}}</td>
          <td v-html="SUM_BASE_DISPLAY"></td>
        </tr>
        <tr>
          <td>{{OPEN_SOURCE_ORDER_TEMPLATE_TOTAL_DISCOUNT}}</td>
          <td v-html="DISCOUNT_VALUE_DISPLAY"></td>
        </tr>
        <tr>
          <td>{{OPEN_SOURCE_ORDER_TEMPLATE_TOTAL_PRICE}}</td>
          <td v-html="SUM_DISPLAY"></td>
        </tr>
      </table>

      <input type="hidden" name="save" value="y">
      <br>
      <button type="submit">{{OPEN_SOURCE_ORDER_TEMPLATE_MAKE_ORDER_BUTTON}}</button>
      <br>
      <br>
    </form>
	`,
  computed: {
    ...mapState(dataStore, [
      'SESSION_ID',
      'SIGNED_PARAMETERS',
      'PERSON_TYPE_ID',
      'PROPERTIES',
      'DELIVERY_ERRORS',
      'DELIVERY_LIST',
      'PAY_SYSTEM_ERRORS',
      'PAY_SYSTEM_LIST',
      'BASKET',
      'PRODUCTS_BASE_PRICE_DISPLAY',
      'PRODUCTS_PRICE_DISPLAY',
      'PRODUCTS_DISCOUNT_DISPLAY',
      'DELIVERY_BASE_PRICE_DISPLAY',
      'DELIVERY_PRICE_DISPLAY',
      'DELIVERY_DISCOUNT_DISPLAY',
      'SUM_BASE_DISPLAY',
      'DISCOUNT_VALUE_DISPLAY',
      'SUM_DISPLAY',
    ]),
  },
  methods: {
    ...mapActions(dataStore, []),
  },
  mounted() {},
};
