<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("fullpage", "Y");
$APPLICATION->SetTitle("Аутентификация по SMS для неаудиторов");

\Bitrix\Main\UI\Extension::load("local.vue-apps.auth-sms-simple");
?>

<style>
.auth-sms-placeholder {
  display: flex;
  padding: 32px 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  width: calc(50% - 32px);
}
.auth-sms-placeholder div {
  height: 48px;
  border-radius: 4px;
  background: #FAFBFC;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>

<div id="authSMSSimple">
  <div class="auth-sms-placeholder">
    <div></div>
    <div></div>
  </div>
</div>

<script src="/markup/pages/auth-sms-simple/response.js"></script>

<script>
	const authsmssimple = new BX.AuthSMSSimple('#authSMSSimple', {
		'sessid': '<?=bitrix_sessid()?>',
		'signedParameters': 'YTowOnt9.9142992288be2a04123a66bfa996e850e694e8c6886728187ec9b5d8dc821aad',
    'tel': '+7 (999) 999-99-98',
    'heading': 'Авторизация',
    'text': '<p>Вы можете указать номер телефона и воспользоваться авторизацией по СМС-коду.</p>',
		'checkboxLabel': 'Я даю согласие на обработку, хранение и использование персональных данных в целях осуществления функций саморегулируемой организации аудиторов.'
	});
	authsmssimple.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>