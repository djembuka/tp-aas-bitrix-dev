<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Заседание дисциплинарной комиссии 234");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table");
?>

<div id="dcMeetingsNotifications"></div>

<script src="/markup/pages/dc-meetings-detail/notifications-bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcMeetingsNotifications', {
		'SESSION_ID': '123',
		'USER_ID': '456',
		
		'COLS': ['auto','200px','50px','50px','120px','80px'],
		
		'columnsNames': 'twinpx.dc-meetings-notifications:columnsNames',
		'items': 'twinpx.dc-meetings-notifications:items',
		'defaultSort': 'twinpx.dc-meetings-notifications:defaultSort',
		'setDefaultSort': 'twinpx.dc-meetings-notifications:setDefaultSort',
		'filters': 'twinpx.dc-meetings-notifications:filters',
		
		'maxCountPerRequest': 3,
	});
	filtertable.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>