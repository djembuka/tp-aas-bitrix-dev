<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Кандидаты в правление Bitrix Vue");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-candidates");
?>

<div id="VotingCandidates"></div>

<script>
(() => {
	const votingcandidates = new BX.VotingCandidates('#VotingCandidates', {
		data: {
			userid: BX.message('USER_ID'),
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: "",
		actions: {
			getGroups: ['twinpx:candidates.list', 'getGroups'],
			getCandidates: ['twinpx:candidates.list', 'getCandidates'],
		},
		lang: {}
	});
	votingcandidates.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>