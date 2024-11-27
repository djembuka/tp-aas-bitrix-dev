<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Заседание дисциплинарной комиссии 234");

\Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");
\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table");
?>

<style>
#filterTableFilterPh {
  --aas-placeholder-color: #f2f2f2;
}

#filterTableFilterPh {
  display: grid;
  column-gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 32px;
}

#filterTableFilterPh div:before {
  content: '';
  display: block;
  background-color: var(--aas-placeholder-color);
  height: 8px;
  margin-bottom: 5px;
  width: 45%;

  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 49%,
    #ffffff88 50%,
    #ffffff88 50%,
    transparent 51%,
    transparent 100%
  );
  background-size: 600% 600%;
  animation: filter-gradient 4s linear infinite;

  background-attachment: fixed;
}

#filterTableFilterPh div:after {
  content: '';
  display: block;
  background-color: var(--aas-placeholder-color);
  height: 39px;

  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 49%,
    #ffffff88 50%,
    #ffffff88 50%,
    transparent 51%,
    transparent 100%
  );
  background-size: 600% 600%;
  animation: filter-gradient 4s linear infinite;

  background-attachment: fixed;
}

@keyframes filter-gradient {
  100% {
    background-position: 200%;
  }
}

#filterTableTablePh {
  --aas-placeholder-color: #f2f2f2;
}

#filterTableTablePh {
  display: grid;
  grid-template-columns: calc(50% - 16px) calc(50% - 16px);
  grid-template-rows: 80px;
  grid-auto-rows: 32px;
  row-gap: 16px;
  column-gap: 32px;
}

#filterTableTablePh div {
  border-radius: 4px;
  background-color: var(--aas-placeholder-color);

  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 49%,
    #ffffff88 50%,
    #ffffff88 50%,
    transparent 51%,
    transparent 100%
  );
  background-size: 600% 600%;
  animation: table-gradient 4s linear infinite;

  background-attachment: fixed;
}

#filterTableTablePh div:first-child {
  grid-column: span 2;
}

@keyframes table-gradient {
  100% {
    background-position: 200%;
  }
}


</style>

<div class="b-twpx-tabs-menu">
  <div class="b-twpx-tabs-menu__wrapper">
    <a href="/markup/pages/dc-meetings-detail/">Общие данные</a>
    <a href="/markup/pages/dc-meetings-detail/questions.php">Вопросы</a>
    <a href="/markup/pages/dc-meetings-detail/members.php">Участники</a>
    <a href="/markup/pages/dc-meetings-detail/notifications.php" class="b-twpx-tabs--active">Уведомления</a>
  </div>
</div>

<hr>

<div id="dcMeetingsNotifications">
	<div id="dcMeetingsNotificationsFilterPh">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
	<div id="dcMeetingsNotificationsTablePh">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
</div>

<script src="/markup/pages/dc-meetings-detail/notifications-bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcMeetingsNotifications', {
		'SESSION_ID': '123',
		'SIGNED_PARAMETERS': 'signedParameters',
		
		'FILTER_COLS': ['1','2','2','2'],
		'TABLE_COLS': ['auto','20%','100px','100px','150px','150px'],
		
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