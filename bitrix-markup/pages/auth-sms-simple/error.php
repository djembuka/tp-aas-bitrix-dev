<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("fullpage", "Y");
$APPLICATION->SetTitle("Аутентификация по SMS для неаудиторов");
?>

<style>
.auth-keys {
    display: grid;
    padding: 32px var(--twpx-table-padding-l, 32px);
    gap: 16px;
    border: 1px solid var(--twpx-border-neutral, #F2F2F2);
}
.auth-keys h2 {
    margin: 0;
}
.auth-keys .vue-button {
    width: 160px;
}
.auth-keys a.vue-button:hover {
    color: #fff;
}
.vue-message--error {
  --vue-message-component-background: #ff3939;
  --vue-message-component-box-shadow: none;
  --vue-message-component-color: #fff;
  --vue-message-component-error-button-background: #ffffff55;
  --vue-message-component-error-button-color: #ffffff;
}
.vue-message--big {
  --vue-message-component-icon-width: 24px;
  --vue-message-component-padding: 32px;
  --vue-message-component-column-gap: 32px;
  --vue-message-component-row-gap: 16px;
  --vue-message-component-font-size: 14px;
  --vue-message-component-text-margin-top: 4px;
}
.vue-message {
  display: grid;
  grid-template-columns: var(--vue-message-component-icon-width) auto;
  padding: var(--vue-message-component-padding);
  column-gap: var(--vue-message-component-column-gap);
  row-gap: var(--vue-message-component-row-gap);
  border-radius: 8px;
  background: var(--vue-message-component-background);
  box-shadow: var(--vue-message-component-box-shadow);
}
.vue-message__icon {
  display: flex;
  width: var(--vue-message-component-icon-width);
  height: var(--vue-message-component-icon-width);
  justify-content: center;
  align-items: center;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
.vue-message__message {
  color: var(--vue-message-component-color);
  font-family: Roboto;
  font-size: var(--vue-message-component-font-size);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: var(--vue-message-component-text-margin-top);

  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.vue-message__button {
  min-width: 0;
  width: auto;

  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
.vue-message.vue-message--error .vue-button {
  background-color: var(
    --vue-message-component-error-button-background
  ) !important;
  color: var(--vue-message-component-error-button-color) !important;
}

@media (max-width: 767px) {
  .vue-message {
    row-gap: 32px;
  }
  .vue-message__button {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}

.vue-button,
.vue-button--icon {
  --twpx-button-background-primary: #ff8318;
  --twpx-button-background-secondary: #074c86;
  --twpx-button-background-error: #f00;
  --twpx-button-size-large: 64px;
  --twpx-button-size-medium: 48px;
  --twpx-button-size-small: 32px;
  --twpx-button-border-radius-large: 8px;
  --twpx-button-border-radius-medium: 4px;
  --twpx-button-border-radius-small: 4px;
}

.vue-button:not(:disabled):not(.disabled) {
  cursor: pointer;
}
button.vue-button {
  border: none;
}
[type='button']:not(:disabled),
[type='reset']:not(:disabled),
[type='submit']:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
.vue-button {
  font-family: Roboto, sans-serif;
  font-weight: 200;
  font-size: 0.75rem;
  border-radius: 7px;
  padding-top: 0;
  padding-bottom: 0;
  min-width: 158px;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: #fff;
}
@media (max-width: 767px) {
  .vue-button {
    display: block;
    width: auto;
  }
}
button.vue-button {
  border: none;
}
.vue-button:hover {
  opacity: 0.7;
}
.vue-button--secondary,
.vue-button--secondary:hover,
.vue-button--secondary.focus,
.vue-button--secondary:focus,
.vue-button--secondary.vue-button--disabled,
.vue-button--secondary:disabled {
  background-color: var(--twpx-button-background-primary);
  border-color: var(--twpx-button-background-primary);
}
.vue-button--secondary.focus,
.vue-button--secondary:focus {
  box-shadow: none;
}
.vue-button--secondary:not(:disabled):not(.vue-button--disabled).active,
.vue-button--secondary:not(:disabled):not(.vue-button--disabled):active {
  background-color: var(--twpx-button-background-primary);
  border-color: var(--twpx-button-background-primary);
}
.vue-button--secondary:not(:disabled):not(.vue-button--disabled).active:focus,
.vue-button--secondary:not(:disabled):not(.vue-button--disabled):active:focus {
  box-shadow: none;
}
.vue-button--wide {
  width: 100%;
}
@media (max-width: 767px) {
  .vue-button--wide-mobile {
    width: 100%;
  }
}
.vue-button--small {
  height: var(--twpx-button-size-small);
  border-radius: var(--twpx-button-border-radius-small);
}
.vue-button.vue-button--small {
  min-width: 0;
  padding: 0.5rem 1rem;
  font-weight: 400;
  font-size: 12px;
}
</style>

<div class="auth-keys">
  <h2>Ошибка удаления</h2>
  <div class="vue-message vue-message--error vue-message--big">
      <div class="vue-message__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
          <path d="M12 12.0828V6.68616M12 16.0829V16.1304M18.9299 20.625H5.07009C3.1769 20.625 1.57924 19.3933 1.07658 17.7083C0.862001 16.989 1.12565 16.2397 1.52893 15.6018L8.45884 3.30123C10.0825 0.73292 13.9176 0.732924 15.5412 3.30124L22.4711 15.6018C22.8743 16.2397 23.138 16.989 22.9234 17.7083C22.4208 19.3933 20.8231 20.625 18.9299 20.625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="vue-message__message">Ссылка для подтверждения удаления номера недействительна. Повторите удаление ещё раз.</div>
      <div class="vue-message__button">
        <a href="" class="vue-button vue-button--secondary vue-button--small vue-button--wide-mobile">Понятно</a>
      </div>
    </div>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>