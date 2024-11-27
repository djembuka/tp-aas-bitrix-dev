<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Form with multi control Bitrix Vue");

\Bitrix\Main\UI\Extension::load("local.vue-apps.form-with-multi");
?>

<div id="formWithMulti"></div>

<script src="/markup/vue/form-with-multi/bx.ajax.runAction.js"></script>

<script>
	const formwithmulti = new BX.FormWithMulti('#formWithMulti', {
		'SESSION_ID': '123',
		'SIGNED_PARAMETERS': 'signedParameters',
		'controls': 'twinpx:controls',
	});
	formwithmulti.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>