<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Marketplace Bitrix Vue");

\Bitrix\Main\UI\Extension::load("local.vue-apps.marketplace");
?>

<div id="Marketplace"></div>

<script>
(() => {
	const marketplace = new BX.Marketplace('#Marketplace', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: "",
		maxCountPerRequest: 3,
		actions: {
			applicationTemplate: ['twinpx:marketplace.applications', 'applicationTemplate'],
			applicationData: ['twinpx:marketplace.applications', 'applicationData'],
			applicationGroups: ['twinpx:marketplace.applications', 'applicationGroups'],
			applicationSave: ['twinpx:marketplace.applications', 'applicationSave'],
			searchForms: ['twinpx:marketplace.applications', 'searchForms'],
			formData: ['twinpx:marketplace.questionnaires', 'formData'],
			formTemplate: ['twinpx:marketplace.questionnaires', 'formTemplate'],
		},
		lang: {
			application: {
				'heading': 'Подбор аудиторской организации по параметрам',
				'prevButton': 'Назад',
				'nextButton': 'Далее',
				'sendButton': 'Показать результат'
			},
			result: {
				'heading': 'Результаты подбора',
				'sendButton': 'Отправить заявку',
				'getButton': 'Получить выписку',
				'moreProps': 'Подробнее',
				'checkboxLable': 'Добавить для групповой заявки',
				'getButton': 'Получить выписку',
				'sendButton': 'Отправить заявку',
				'moreButton': 'Загрузить еще',
				'groupApplicationHeading': 'Отправьте заявку сразу в несколько компаний',
				'groupApplicationText': 'Выбрано',
				'groupApplicationCompany': ['организация', 'организации', 'организаций'],
			}
		}
	});
	marketplace.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>