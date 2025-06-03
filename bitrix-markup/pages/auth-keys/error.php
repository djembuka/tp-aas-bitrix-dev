<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("fullpage", "Y");
$APPLICATION->SetTitle("Аутентификация по SMS для неаудиторов");

\Bitrix\Main\UI\Extension::load("local.vue-apps.auth-keys");
?>

<div class="auth-keys">
<div class="auth-keys-info">
  <h2>Ошибка удаления</h2>
  <div class="vue-message vue-message--error vue-message--big">
      <div class="vue-message__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
					<path d="M12 12.0828V6.68616M12 16.0829V16.1304M18.9299 20.625H5.07009C3.1769 20.625 1.57924 19.3933 1.07658 17.7083C0.862001 16.989 1.12565 16.2397 1.52893 15.6018L8.45884 3.30123C10.0825 0.73292 13.9176 0.732924 15.5412 3.30124L22.4711 15.6018C22.8743 16.2397 23.138 16.989 22.9234 17.7083C22.4208 19.3933 20.8231 20.625 18.9299 20.625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
      </div>
      <div class="vue-message__message">Ссылка для подтверждения удаления номера недействительна. Повторите удаление ещё раз.</div>
      <div class="vue-message__button">
        <a href="" class="vue-button vue-button--secondary vue-button--small vue-button--wide-mobile">Понятно</a>
      </div>
    </div>
</div>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>