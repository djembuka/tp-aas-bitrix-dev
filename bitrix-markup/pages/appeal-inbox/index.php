<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Заседания дисциплинарной комиссии");

\Bitrix\Main\UI\Extension::load("local.vue-apps.appeal-inbox");

global $USER;
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
		'userid': <?= $USER->getid() ?>, //BX.message('USER_ID'),
		'sessid': '<?= bitrix_sessid() ?>',
		'signedParameters': '',
		'maxCountPerRequest': 10,
	});
	appealinbox.run();
</script>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>