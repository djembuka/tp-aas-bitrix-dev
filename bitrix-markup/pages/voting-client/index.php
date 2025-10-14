<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Приложение");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-client");
?>

<div id="VotingClient"></div>

<script>
(() => {
	const votingclient = new BX.VotingClient('#VotingClient', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: "",
	});
	votingclient.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>