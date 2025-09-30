<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Экран голосования");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-screen");
?>

<div id="VotingScreen"></div>

<script>
(() => {
	const votingscreen = new BX.VotingScreen('#VotingScreen', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: "",
		uuid: '2100265b-3699-401b-a017-6358e7c29db8'
	});
	votingscreen.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>