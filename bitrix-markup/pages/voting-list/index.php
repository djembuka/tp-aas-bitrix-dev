<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Администрирование голосований");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-list");
\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-create");
?>

<div id="VotingList"></div>

<script>
(() => {
	const votinglist = new BX.VotingList('#VotingList', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: "",
		votingCreateURL: '/markup/pages/voting-create/',
		votingDetailURL: '/markup/pages/voting-detail/'
	});
	votinglist.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>