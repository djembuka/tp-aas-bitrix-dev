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
		uuid: '442f22d1-9669-4afb-80fe-ead7694a8362'
	});	
	votingdetail.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>