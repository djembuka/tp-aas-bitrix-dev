<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Заседание дисциплинарной комиссии");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table");
?>

<div id="dcCases"></div>

<script src="/markup/pages/dc-cases/bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcCases', {
		'SESSION_ID': '123',
		'USER_ID': '456',
		
		'COLS': ['auto','20%','20%','20%','100px'],
		
		'columnsNames': 'twinpx.dc-cases:columnsNames',
		'items': 'twinpx.dc-cases:items',
		'defaultSort': 'twinpx.dc-cases:defaultSort',
		'setDefaultSort': 'twinpx.dc-cases:setDefaultSort',
		'filters': 'twinpx.dc-cases:filters',
		
		'maxCountPerRequest': 3,
	});
	filtertable.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>