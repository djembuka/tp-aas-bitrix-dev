<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Управление голосованием");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-control");
?>

<div id="VotingControl"></div>

<script>
(() => {
	const votingcontrol = new BX.VotingControl('#VotingControl', {
		uuid: '409960a4-429e-4ea8-8af8-db2399b880cd'
	});
	votingcontrol.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>