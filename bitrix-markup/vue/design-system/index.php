<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("fullpage", "Y");
$APPLICATION->SetTitle("Design System");

\Bitrix\Main\UI\Extension::load("local.vue-apps.design-system");
?>

<div id="DesignSystem"></div>

<script>
(() => {
	const designsystem = new BX.DesignSystem('#DesignSystem');
	designsystem.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>