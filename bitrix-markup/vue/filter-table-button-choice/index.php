<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Filter table with pagination, more button, infinite scroll");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter-table-button-choice");
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

<div id="filterTableButtonChoice">
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
    </div>
</div>

<script src="/markup/vue/filter-table/bx.ajax.runAction.js"></script>

<script>
	const filtertablebuttonchoice = new BX.FilterTableButtonChoice('#filterTableButtonChoice', {
		'data': {
			"userid": 20039,
			"sessid": BX.bitrix_sessid(),
		},
		"signedParameters": "YTowOnt9.860a4a32d4c76b7934cc52fc6bcc78160259ec10ae20aed565bb86ce28eb357e",
		"columnsNames": {
			"component": "twinpx:disciplinar.case.list",
			"method": "columnsNames"
		},
		"items": {
			"component": "twinpx:disciplinar.case.list",
			"method": "items"
		},
		"filters": {
			"component": "twinpx:disciplinar.case.list",
			"method": "filters"
		},
		"defaultSort": {
			"component": "twinpx:disciplinar.case.list",
			"method": "defaultSort"
		},
		"setDefaultSort": {
			"component": "twinpx:disciplinar.case.list",
			"method": "setDefaultSort"
		},
		"maxCountPerRequest": 5,
		"contentLoadingMode": "loadMore"/*"loadMore", "pagination", "infiniteScroll"*/
	});
	filtertablebuttonchoice.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>