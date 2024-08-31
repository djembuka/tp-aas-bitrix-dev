<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Реестр вопросов заседания ДК");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table");
?>

<div id="dcQuestions"></div>

<script src="/markup/pages/dc-questions/bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcQuestions', {
		'SESSION_ID': '123',
		'USER_ID': '456',
		
		'COLS': ['200px','50px','50px','auto','100px'],
		
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