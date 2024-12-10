<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Аутентификация по SMS");

\Bitrix\Main\UI\Extension::load("local.vue-apps.auth-sms");
?>

<div id="authSMS"></div>

<script src="/markup/pages/auth-sms/response.js"></script>

<script>
	const authsms = new BX.AuthSMS('#authSMS', {
		'sessid': '<?=bitrix_sessid()?>',
		'signedParameters': 'YTowOnt9.9142992288be2a04123a66bfa996e850e694e8c6886728187ec9b5d8dc821aad',
	});
	authsms.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>