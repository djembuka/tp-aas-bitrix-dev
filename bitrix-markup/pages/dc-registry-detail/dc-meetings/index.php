<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Заседания дисциплинарной комиссии");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table");
?>

<div class="bg-fa p-16 br-8 d-flex justify-content-between align-items-center">
  <h3 class="my-0">Создайте новое заседание</h3>
  <div class="btn btn-secondary btn-md">Создать заседание</div>
</div>

<hr>

<div id="dcMeetings"></div>

<script src="/markup/vue/filter-table/bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcMeetings', {
		'SESSION_ID': '123',
		'USER_ID': '456',
		'COLS': ['auto','20%','20%','20%','100px'],
		'columnsNames': 'twinpx:columnsNames',
		'items': 'twinpx:items',
		'defaultSort': 'twinpx:defaultSort',
		'setDefaultSort': 'twinpx:setDefaultSort',
		'filters': 'twinpx:filters'
	});
	filtertable.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>