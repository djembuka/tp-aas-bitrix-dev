<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Заседания дисциплинарной комиссии");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table");
?>
<hr>

<div class="bg-fa p-16 br-8 d-flex justify-content-between align-items-center">
  <h3 class="my-0">Создайте новое заседание</h3>
  <div class="btn btn-secondary btn-md">Создать заседание</div>
</div>

<hr class="hr--xl">

<div id="dcCases"></div>

<script src="/markup/pages/dc-cases/bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcCases', {
		'SESSION_ID': '123',
		'SIGNED_PARAMETERS': 'signedParameters',
		
		'FILTER_COLS': ['1','2','2','2'],
		'TABLE_COLS': ['20%','180px','auto','180px','150px'],
		
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