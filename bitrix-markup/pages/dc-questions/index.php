<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Реестр вопросов заседания ДК");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table");
?>

<div class="bg-fa p-16 br-8 d-flex justify-content-between align-items-center">
  <h3 class="my-0">Создайте вопрос заседания</h3>
  <div class="btn btn-secondary btn-md">Создать вопрос</div>
</div>

<hr>

<div id="dcQuestions"></div>

<script src="/markup/pages/dc-questions/bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcQuestions', {
		'SESSION_ID': '123',
		'SIGNED_PARAMETERS': 'signedParameters',
		
		'FILTER_COLS': ['1','2','2','2'],
		'TABLE_COLS': ['180px','120px','120px','auto','100px'],
		
		'columnsNames': 'twinpx.dc-questions:columnsNames',
		'items': 'twinpx.dc-questions:items',
		'defaultSort': 'twinpx.dc-questions:defaultSort',
		'setDefaultSort': 'twinpx.dc-questions:setDefaultSort',
		'filters': 'twinpx.dc-questions:filters',
		
		'maxCountPerRequest': 3,
	});
	filtertable.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>