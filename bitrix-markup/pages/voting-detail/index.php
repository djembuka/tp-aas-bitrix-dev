<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Детальная страница голосования");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-detail");
\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-create");
?>

<div id="VotingDetail"></div>

<script>
(() => {
	const votingdetail = new BX.VotingDetail('#VotingDetail', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: '',
	});	
	votingdetail.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>