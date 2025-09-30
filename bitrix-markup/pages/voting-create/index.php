<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Создать голосование");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-create");
?>

<div id="VotingCreate"></div>

<script>
(() => {
	const votingcreate = new BX.VotingCreate('#VotingCreate', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: "",
		votingListURL: '/markup/pages/voting-list/'
	});
	votingcreate.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>