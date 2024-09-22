<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Table Bitrix Vue");

\Bitrix\Main\UI\Extension::load("local.vue-apps.table");
?>

<style>
#TablePh {
  --aas-placeholder-color: #f2f2f2;
}

#TablePh {
  display: grid;
  grid-template-columns: calc(50% - 16px) calc(50% - 16px);
  grid-template-rows: 80px;
  grid-auto-rows: 32px;
  row-gap: 16px;
  column-gap: 32px;
}

#TablePh div {
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

#TablePh div:first-child {
  grid-column: span 2;
}

@keyframes table-gradient {
  100% {
    background-position: 200%;
  }
}


</style>

<div id="Table">
	<div id="TablePh">
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

<script src="/markup/vue/table/bx.ajax.runAction.js"></script>

<script>
(() => {
	const table = new BX.Table('#Table', {
		'SESSION_ID': '123',
		'SIGNED_PARAMETERS': 'signedParameters',
		
		'TABLE_COLS': ['auto','20%','20%','20%','100px'],
		
		'columnsNames': 'twinpx:columnsNames',
		'items': 'twinpx:items',
		'defaultSort': 'twinpx:defaultSort',
		'setDefaultSort': 'twinpx:setDefaultSort',
		'filters': 'twinpx:filters',
		
		'maxCountPerRequest': 3,
	});
	table.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>