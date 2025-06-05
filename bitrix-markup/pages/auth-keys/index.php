<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("fullpage", "Y");
$APPLICATION->SetTitle("Аутентификация по SMS для неаудиторов");

\Bitrix\Main\UI\Extension::load("local.vue-apps.auth-keys");
?>

<style>
.auth-keys-placeholder {
  display: flex;
  padding: 32px 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  width: calc(50% - 32px);
}
.auth-keys-placeholder div {
  height: 48px;
  border-radius: 4px;
  background: #FAFBFC;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>

<div id="authKeys">
  <div class="auth-keys-placeholder">
    <div></div>
    <div></div>
  </div>
</div>

<script src="/markup/pages/auth-sms-simple/response.js"></script>

<script>
	const authkeys = new BX.AuthKeys('#authKeys', {
		'sessid': '<?=bitrix_sessid()?>',
		'signedParameters': 'YTowOnt9.9142992288be2a04123a66bfa996e850e694e8c6886728187ec9b5d8dc821aad',
		'tel': '+7 (999) 999-99-98',
		'lang': {
			"auth": {
			  "heading": "Введите ваш номер",
			  "html": "<p>Вы можете указать номер телефона и воспользоваться авторизацией по СМС-коду.</p>",
			  "label": "Номер телефона",
			  "checkbox": "Я даю согласие на обработку, хранение и использование персональных данных в целях осуществления функций саморегулируемой организации аудиторов.",
			  "submit": "Получить код",
			  "submit_timer": "Получите новый код через:"
			},
			"code": {
			  "heading": "Код",
			  "html": "<p>Вы можете указать номер телефона и воспользоваться авторизацией по СМС-коду.</p>",
			  "label": "Введите код",
			  "submit": "Сохранить",
			  "submit_timer": "Получить новый код"
			},
			"edit": {
			  "heading": "Ваш телефон",
			  "html": "<p>Номер телефона, который используется для авторизации в личном кабинете.</p>",
			  "label": "Номер телефона",
			  "button": "Изменить",
			  "modalHeading": "Подтверждение",
			  "modalHtmlEdit": "Вы действительно хотите изменить номер телефона?",
			  "modalHtmlDelete": "Вы действительно хотите удалить номер телефона?",
			  "modalButtonYes": "Да",
			  "modalButtonNo": "Нет"

			},
			"info": {
				"heading": "Подтвердите права",
				"html": "<p>На вашу почту отправлено письмо с подтверждением вашего действия, откройте письмо и действуйте по инструкции.</p>"
			}
		}
	});
	authkeys.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>