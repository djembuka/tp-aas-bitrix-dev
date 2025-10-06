<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Управление голосованием");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-control");
?>

<div id="VotingControl"></div>

<script>
(() => {
	const votingcontrol = new BX.VotingControl('#VotingControl', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: ""
	});
	votingcontrol.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>