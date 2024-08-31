<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Реестр дисциплинарных дел");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table");
?>

<div id="dcRegistry"></div>

<script src="/markup/pages/dc-registry/bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcRegistry', {
		'SESSION_ID': '123',
		'USER_ID': '456',
		
		'COLS': ['20%','20%','20%','auto','100px'],
		
		'columnsNames': 'twinpx.dc-registry:columnsNames',
		'items': 'twinpx.dc-registry:items',
		'defaultSort': 'twinpx.dc-registry:defaultSort',
		'setDefaultSort': 'twinpx.dc-registry:setDefaultSort',
		'filters': 'twinpx.dc-registry:filters',
		
		'maxCountPerRequest': 3,
	});
	filtertable.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>