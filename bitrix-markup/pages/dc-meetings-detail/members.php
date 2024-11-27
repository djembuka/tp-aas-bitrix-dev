<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Участники дисциплинарного заседания");

\Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");
\Bitrix\Main\UI\Extension::load("local.vue-apps.table-with-pagination");
?>

<div class="b-twpx-tabs-menu">
  <div class="b-twpx-tabs-menu__wrapper">
    <a href="https://aas-markup.twpx.ru/pages/dc-meetings-detail/">Общие данные</a>
    <a href="/markup/pages/dc-meetings-detail/questions.php">Вопросы</a>
    <a href="/markup/pages/dc-meetings-detail/members.php" class="b-twpx-tabs--active">Участники</a>
    <a href="/markup/pages/dc-meetings-detail/notifications.php">Уведомления</a>
  </div>
</div>

<hr>

<h3 class="mt-0">Участники дисциплинарного заседания</h3>

<hr>

<div id="dcMeetingsMembers"></div>

<script src="/markup/pages/dc-meetings-detail/members-bx.ajax.runAction.js"></script>

<script>
	const tableWithPagination = new BX.TableWithPagination('#dcMeetingsMembers', {
		'SESSION_ID': '123',
		'SIGNED_PARAMETERS': 'signedParameters',
		
		'TABLE_COLS': ['auto','20%','120px','120px','100px','200px'],
		
		'columnsNames': 'twinpx:columnsNames',
		'items': 'twinpx:items',
		'defaultSort': 'twinpx:defaultSort',
		'setDefaultSort': 'twinpx:setDefaultSort',
		
		'maxCountPerRequest': 3,
	});
	tableWithPagination.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>