<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Кандидаты в правление Bitrix Vue");

\Bitrix\Main\UI\Extension::load("local.vue-apps.poll-candidates");
?>

<div id="PollCandidates"></div>

<script>
(() => {
	const pollcandidates = new BX.PollCandidates('#PollCandidates', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: "",
		actions: {
			getGroups: ['twinpx:poll.candidates', 'getGroups'],
			getCandidates: ['twinpx:poll.candidates', 'getCandidates'],
		},
		lang: {}
	});
	pollcandidates.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>