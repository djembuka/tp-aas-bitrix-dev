<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Приложение - авторизация");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-auth");
?>

<div id="VotingAuth"></div>

<script>
(() => {
	const votingAuth = new BX.VotingAuth('#VotingAuth', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: "",
	});
	votingAuth.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>