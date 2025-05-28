<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Marketplace Bitrix Vue");

\Bitrix\Main\UI\Extension::load("local.vue-apps.marketplace");
?>

<div id="Marketplace"></div>

<script>
(() => {
	const marketplace = new BX.Marketplace('#Marketplace', {
		'SESSION_ID': '123',
		'SIGNED_PARAMETERS': 'signedParameters',
	});
	marketplace.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>