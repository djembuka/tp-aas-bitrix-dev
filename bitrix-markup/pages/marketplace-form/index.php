<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Marketplace Bitrix Vue");

\Bitrix\Main\UI\Extension::load("local.vue-apps.marketplace-form");
?>

<div id="MarketplaceForm"></div>

<script>
(() => {
	const marketplace = new BX.MarketplaceForm('#MarketplaceForm', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: "",
		ornz: "11506029300",
		code: "d4312f16-c2b4-45a4-b280-f85e62dd61a8",
		actions: {
			formTemplate: ['twinpx:marketplace.questionnaires', 'formTemplate'],
			formData: ['twinpx:marketplace.questionnaires', 'formData'],
			saveForm: ['twinpx:marketplace.questionnaires', 'saveForm'],
			stateForm: ['twinpx:marketplace.questionnaires', 'stateForm'],
			formGroups: ['twinpx:marketplace.questionnaires', 'formGroups'],
		},
		lang: {
			edit: {
				heading: 'Редактирование анкеты',
				cancel: 'Отменить',
				send: 'Отправить'
			},
			panel: {
				heading: 'Опубликовать в Маркетплейсе',
				text: 'Включение этой опции сделает анкету вашей компании видимой в маркетплейсе — вы сможете получать заявки от клиентов, которые ищут аудиторскую организацию.'
			}
		}
	});
	marketplace.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>