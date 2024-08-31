<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
?>
<?
\Bitrix\Main\UI\Extension::load("local.demo.application");
\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table.application");
?>
<div id="filterTable" data-sessionid="SESSION_ID" data-userid="45678" data-cols='["auto","20%","20%","20%","100px"]'></div>
<script type="text/javascript">
	const filtertable = new BX.FilterTable('#filterTable');
	filtertable.run();
</script>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>