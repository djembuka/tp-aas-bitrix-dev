<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Приложение");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-delegates");
?>

<div id="VotingDelegates"></div>

<script>
new BX.VotingDelegates('#VotingDelegates').run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>