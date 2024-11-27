<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Участники дисциплинарного заседания");

\Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");
\Bitrix\Main\UI\Extension::load("local.vue-apps.table-with-pagination");
?>

<div class="b-twpx-tabs-menu">
  <div class="b-twpx-tabs-menu__wrapper">
    <a href="https://aas-markup.twpx.ru/pages/dc-meetings-detail/">Общие данные</a>
    <a href="/markup/pages/dc-meetings-detail/questions.php" class="b-twpx-tabs--active">Вопросы</a>
    <a href="/markup/pages/dc-meetings-detail/members.php">Участники</a>
    <a href="/markup/pages/dc-meetings-detail/notifications.php">Уведомления</a>
  </div>
</div>

<hr>

<h3 class="mt-0">Вопросы дисицплинарного заседания</h3>

<hr>

<div id="dcMeetingsQuestion"></div>

<script src="/markup/pages/dc-meetings-detail/questions-bx.ajax.runAction.js"></script>

<script>
	const tableWithPagination = new BX.TableWithPagination('#dcMeetingsQuestion', {
		'SESSION_ID': '123',
		'SIGNED_PARAMETERS': 'signedParameters',
		
		'TABLE_COLS': ['100px','100px','100px','150px','150px','auto','150px','120px'],
		
		'columnsNames': 'twinpx:columnsNames',
		'items': 'twinpx:items',
		'defaultSort': 'twinpx:defaultSort',
		'setDefaultSort': 'twinpx:setDefaultSort',
		
		'maxCountPerRequest': 30,
	});
	tableWithPagination.run();
</script>

<hr class="hr--sl">
<div class="b-block-with-buttons">
  <h3>Вы можете</h3>
  <div class="b-block-with-buttons__buttons">
    <button class="btn btn-secondary" data-toggle="modal" data-target="#getExcerptModal"><span class="icon" style="background-image: url( '/template/images/icon-edit-white.svg' );"></span><span>Отредактировать</span></button>
    <button class="btn btn-danger"><span class="icon" style="background-image: url( '/template/images/icon-remove-white.svg' );"></span><span>Удалить</span></button>
  </div>
</div>
<hr class="hr--sl">

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>