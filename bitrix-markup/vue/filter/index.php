<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Filter Bitrix Vue");

\Bitrix\Main\UI\Extension::load("local.vue-apps.filter");
?>

<style>
#filterPh {
  --aas-placeholder-color: #f2f2f2;

  height: 40px;
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
  animation: filter-gradient 4s linear infinite;
  background-attachment: fixed;
  margin-bottom: 32px;
}

@keyframes filter-gradient {
  100% {
    background-position: 200%;
  }
}
</style>

<div id="filterBlock">
	<div id="filterPh"></div>
</div>

<script src="/markup/vue/filter/bx.ajax.runAction.js"></script>

<script>
	const twpxFilter = new BX.Filter('#filterBlock', {
		'sessid': BX.bitrix_sessid(),
		'signedParameters': 'YToyOntzOjExOiJEQVRFX0ZPUk1BVCI7czo0OiJGVUxMIjtzOjE3OiJHUk9VUF9QRVJNSVNTSU9OUyI7YToxOntpOjA7czoxOiIyIjt9fQ==.aec17ae5ddbbaf8fe398296532aab11783f590730a55218f6a7e490d90b8ee62',
    'userid': BX.message('USER_ID'),
		'filters': {
      component:'twinpx:journal.vue',
      method: 'filters'
    },
	});
	twpxFilter.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>