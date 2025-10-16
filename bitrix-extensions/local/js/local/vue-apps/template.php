<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Page\Asset,
	\Bitrix\Main\UI\Extension,
	\Bitrix\Main\Page\AssetLocation;


if (!empty($arResult['ERROR'])) {
	return;
	die();
}

Extension::load("local.vue-apps.voting-create");
$this->setFrameMode(true);
?>

<div id="VotingCreate"></div>
<script>
	(() => {
		const votingcreate = new BX.VotingCreate('#VotingCreate', {
			data: {
				userid: <?= $USER->getId() ?>,
				sessid: BX.bitrix_sessid(),
			},
			votingDetailURL: '/profile/poll/management/edit/?ID='
		});
		votingcreate.run();
	})();
</script>