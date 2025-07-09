<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Форма создания/редактирования дисциплинарного дела");

\Bitrix\Main\UI\Extension::load("local.vue-apps.disciplinary-case-form");
?>
<hr>

<button class="btn btn-secondary" onclick="window.disciplinarycaseformedit.run({id:19142, type:1})">Редактировать</button><br><br>
<button class="btn btn-secondary" onclick="window.disciplinarycaseformedit.run({id:19142, type:1})">Редактировать</button><br><br>
<button class="btn btn-secondary" onclick="window.disciplinarycaseformedit.run({id:19142, type:1})">Редактировать</button>


<div id="dcCaseFormEdit"></div>
<div id="dcCaseForm"></div>

<script src="/markup/pages/dc-case-form/bx.ajax.runAction.js"></script>

<script>
window.addEventListener('DOMContentLoaded', () => {
	window.disciplinarycaseform = new BX.DisciplinaryCaseForm('#dcCaseForm', {
		sessid: BX.bitrix_sessid(),
		signedParameters: '',
		lang: {
			heading: 'Новое дисциплинарное дело',
			nodata: 'Нет данных',
			cancelButton: 'Отменить',
			createButton: 'Создать',
			modal: {
				heading: 'Подтвердите создание',
				text: 'Вы создаете новое дисциплинарное дело, после добавления вы сможете изменить его статус и добавить детальную информацию.',
				yes: 'Создать',
				no: 'Проверить'
			}
		},
		cancelUrl: 'https://aas.2px.ru/profile/disciplinary/case/',
		actions: {
			getForm: ['twinpx:disciplinar.case.add', 'getForm'],
			saveForm: ['twinpx:disciplinar.case.add', 'saveForm']
		},
	});
	disciplinarycaseform.run({});
	
	window.disciplinarycaseformedit = new BX.DisciplinaryCaseForm('#dcCaseFormEdit', {
		sessid: BX.bitrix_sessid(),
		signedParameters: '',
		modal: true,
		lang: {
			heading: 'Изменить общие данные',
			nodata: 'Нет данных',
			cancelButton: 'Отменить',
			createButton: 'Сохранить',
			modal: {
				heading: 'Подтвердите изменение',
				text: 'Подтвердите, что вы хотите внести изменения и сохранить их в данном блоке.',
				yes: 'Сохранить',
				no: 'Проверить'
			}
		},
		actions: {
			getForm: ['twinpx:disciplinar.case.add', 'getForm'],
			saveForm: ['twinpx:disciplinar.case.add', 'saveForm']
		},
		// blocks - это для маркапа, в интеграции не нужен
		blocks: [
			{
				id: 2,
				heading: 'Объект / Ответчик',
				controls: [
					{
						id: 'id5',
						property: 'hint',
						name: 'ORNZ2',
						label: 'ОРНЗ объекта / ответчика',
						value: '',
						count: 3,
						action: "/markup/pages/dc-case-form/hints.json",
						required: false,
						disabled: false,
						hint_external: 'Укажите номер обращения или жалобы и данные  будут внесены автоматически.'
					}
				]
			},
			{
				id: 3,
				heading: 'Основание для возбуждения дела',
				controls: [
					{
						id: 'id6',
						property: 'text',
						name: 'NUM',
						label: 'Основание (жалоба или обращение)',
						value: '',
						required: false,
						disabled: false,
						hint_external: 'Укажите номер обращения или жалобы и данные  будут внесены автоматически.'
					},
					{
						id: 'id7',
						property: 'text',
						name: 'NUM2',
						label: 'Входящий номер ОРЧ',
						value: '',
						required: false,
						disabled: false,
						hint_external: 'Если необходимо укажите регистрационный номер ОРЧ.'
					}
				]
			},
			{
				id: 4,
				heading: 'Основные данные',
				controls: [
					{
						id: 'id8',
						property: 'text',
						name: 'NUM3',
						label: 'Номер дисциплинарного дела',
						value: '',
						required: false,
						disabled: false,
						hint_external: 'Номер создан автоматически. Если необходимо, вы можете отредактировать его вручную.'
					}
				]
			}
		]
	});
});	
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>