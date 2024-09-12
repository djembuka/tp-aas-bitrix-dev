<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Filter table Bitrix Vue");

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

<div id="filterTable">
	<div id="filterTableFilterPh">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
	<div id="filterTableTablePh">
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