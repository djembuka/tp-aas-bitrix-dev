<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Заседания дисциплинарной комиссии");

\Bitrix\Main\UI\Extension::load("local.vue-apps.appeal-inbox");
?>

<div class="b-appeal-inbox ph-block ph-block--animated">
  <div class="ph">
    <div class="ph__text">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="ph-content">    
    <div id="appealInbox"></div>
  </div>
</div>

<hr>

<script src="/markup/pages/appeal-inbox/bx.ajax.runAction.js"></script>

<script>
	const appealinbox = new BX.AppealInbox('#appealInbox', {
		'userid': '19891',
		'sessid': '<?=bitrix_sessid()?>',
		'signedParameters': 'YTowOnt9.9142992288be2a04123a66bfa996e850e694e8c6886728187ec9b5d8dc821aad',
		'profiles': {
		  component: 'twinpx:journal.vue',
		  method: 'profiles-test'
		},
		'setDefaultProfile': {
		  component: 'twinpx:journal.vue',
		  method: 'setDefaultProfile-test'
		},
		'predefinedFilters': {
		  component: 'twinpx:journal.vue',
		  method: 'predefinedFilters-test'
		},
		
		'columnsNames': {
		  component: 'twinpx:journal.vue',
		  method: 'columnsNames-test'
		},
		'appeals': {
		  component: 'twinpx:journal.vue',
		  method: 'appeals-test'
		},
		'defaultSort': {
		  component: 'twinpx:journal.vue',
		  method: 'defaultSort-test'
		},
		'setDefaultSort': {
		  component: 'twinpx:journal.vue',
		  method: 'setDefaultSort-test'
		},
		'filters': {
		  component: 'twinpx:journal.vue',
		  method: 'filters-test'
		},
		
		
		'FILTER_COLS': ['1','2','2','2'],
		'TABLE_COLS': ['auto','20%','20%','20%','100px'],
		'maxCountPerRequest': 3,
	});
	appealinbox.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>