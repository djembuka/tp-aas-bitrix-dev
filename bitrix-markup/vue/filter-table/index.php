<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Filter table Bitrix Vue");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table");
?>

<div id="filterTable"></div>

<script src="/markup/vue/filter-table/bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#filterTable', {
		'SESSION_ID': '123',
		'USER_ID': '456',
		
		'COLS': ['auto','20%','20%','20%','100px'],
		
		'columnsNames': 'twinpx:columnsNames',
		'items': 'twinpx:items',
		'defaultSort': 'twinpx:defaultSort',
		'setDefaultSort': 'twinpx:setDefaultSort',
		'filters': 'twinpx:filters',
		
		'maxCountPerRequest': 3,
	});
	filtertable.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>