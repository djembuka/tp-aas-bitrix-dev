<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Заседания дисциплинарной комиссии");

\Bitrix\Main\UI\Extension::load("local.vue-apps.appeal-new-change-form");
?>

<div class="b-appeal-new-change-form ph-block ph-block--animated">
	<div class="ph">
		<div class="ph__text">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
	<div class="ph-content">
		<h3>Изменение сведений об учредителях (Участниках, акционерах) аудиторской организации, а также сведения о держателях реестров акционеров аудиторской организации, созданной в форме акционерного общества</h3>
		<p>Подробное описание заполнения формы с <a href="">пояснением</a> о том, какие поля надо заполнять и как они должны выглядеть. Описанием может быть довольно большим.</p>
		<div id="appealNewChangeForm"></div>

	</div>
</div>

<hr>

<script src="/markup/vue/form-with-multi/bx.ajax.runAction.js"></script>

<script>
	const appealnewchangeform = new BX.AppealNewChangeForm('#appealNewChangeForm', {
		"SESSION_ID": "123",
		"SIGNED_PARAMETERS": "signedParameters",
		"data": {
			"hidden": [{
					"name": "APPEAL_ID",
					"value": 513571
				},
				{
					"name": "FORM_ID",
					"value": 501240
				}
			],
			"docsBlock": {
				"title": "Документы необходимые для заявления",
				"text": "",
				"items": [{
						"id": 316910,
						"title": "Согласие на избрание",
						"url": "/upload/iblock/fe2/1q2umi6oixrukd34oahgp401qz1yn1j4/Soglasie_kandidata.pdf",
						"icon": "/local/templates/aas/images/pdf.svg",
						"data": [
							"92.22 Кб .pdf"
						]
					},
					{
						"id": 319538,
						"title": "Согласие на обработку ПД",
						"url": "/upload/iblock/343/aywr3x5th2yjyr9cefdoq5l1fui4scyi/Soglasie_kandidata_v_sostav_KRK_na_obrabotku_persdannykh_format.docx",
						"icon": "/local/templates/aas/images/doc.svg",
						"data": [
							"16.26 Кб .docx"
						]
					}
				]
			},
			"controlsBlock": {
				"title": "Данные заявления",
				"text": "",
				"controls": [{
						"property": 'text',
						id: 'PROPERTY_355_0',
						name: 'PROPERTY[355][0]',
						"label": "ФИО кандидата *",
						"required": true,
						"value": "",
					},
					{
						"property": 'hint',
						id: 'PROPERTY_358_0',
						name: 'PROPERTY[358][0]',
						"label": "ОРНЗ кандидата",
						"value": "",
						"count": 3,
						"action": "/markup/pages/appeal-new-change-form/hints.json",
						"required": false,
						"disabled": false,
            "multi": 3,
						"completeBlock": {
							"title": "",
							"value": "",
							"comment": "ОРНЗ кандидата, если он является членом СРО ААС"
						}
					},
					{
						"property": 'text',
						id: 'PROPERTY_356_0',
						name: 'PROPERTY[356][0]',
						"label": "Основное место работы кандидата *",
						"required": true,
						"value": "",
						"completeBlock": {
							"title": "",
							"value": "",
							"comment": "Полное наименование организации, основного места работы, кандидата"
						}
					},
					{
						"property": 'hint',
						id: 'PROPERTY_375_0',
						name: 'PROPERTY[375][0]',
						"label": "ОРНЗ организации",
						"value": "",
						"count": 3,
						"action": "/markup/vue/design-system/hints.json",
						"required": false,
						"disabled": false,
						"hints": [],
						"completeBlock": {
							"title": "",
							"value": "",
							"comment": "ОРНЗ организации"
						}
					},
					{
						"property": 'hint',
						id: 'PROPERTY_445_0',
						name: 'PROPERTY[445][0]',
						"label": "ОГРН организации",
						"value": "",
						"count": 3,
						"action": "/markup/vue/design-system/hints.json",
						"required": false,
						"disabled": false,
						"hints": [],
						"completeBlock": {
							"title": "",
							"value": "",
							"comment": "ОГРН организации"
						}
					},
					{
						"property": 'text',
						id: 'PROPERTY_443_0',
						name: 'PROPERTY[443][0]',
						"label": "Должность на основном месте работы",
						"required": false,
						"value": "",
						"completeBlock": {
							"title": "",
							"value": "",
							"comment": "Должность на основном месте работы"
						}
					},
					{
						"property": 'tel',
						id: 'PROPERTY_360_0',
						name: 'PROPERTY[360][0]',
						"label": "Телефон кандидата *",
						"required": true,
						"value": "",
					},
					{
						"property": 'email',
						id: 'PROPERTY_361_0',
						name: 'PROPERTY[361][0]',
						"label": "Адрес электронной почты кандидата *",
						"required": true,
						"value": "",
					},
				]
			},
			"confirmDocsBlock": {
				"title": "Документы заявления",
				"text": "Для принятия решения",
				"items": [{
					"id": 0,
					"title": "Пакет документов 1",
					"text": "<ul><li>Согласие кандидата на обработку персональных данных</li><li>Если документ подписан отсоединённой электронной подписью, добавьте ее.</li><li>Согласие кандидата на избрание, выдвижение</li><li>Если документ подписан отсоединённой электронной подписью, добавьте ее.</li><li>Резюме кандидата, включая информацию об участии в деятельности СРО ААС, работе общественных, профессиональных и/или иных организаций (представляется в произвольной форме)</li></ul>",
					"controls": [{
							"property": 'file',
							"type": 'upload',
							"id": 'id_upload_logo',
							"name": 'FILE_LOGO',
							"label": 'Файл с подписью',
							"value": null,
							"upload": {},
							"action": "/local/components/twinpx/journal.new/templates/.default/fileupload.php?APPEAL_ID=519612&TYPE=sign",
							"required": true,
							"disabled": false,
							"accept": ['svg', 'png', 'jpg', 'jpeg'],
							"image": true,
							"maxsize": 10000000,
							"multi": 3,
							"sub": [{
								"property": 'file',
								"type": 'upload',
								"id": 'id01',
								"name": 'SIG',
								"label": 'Отсоединённая электронная подпись',
								"value": null,
								"multi": 3,
								"upload": {},
								"action": "/local/components/twinpx/journal.new/templates/.default/fileupload.php?APPEAL_ID=519612&TYPE=sign",
								"required": false,
								"disabled": false,
								"accept": ['svg', 'png', 'jpg', 'jpeg'],
								"maxsize": 10000000,
								"multi": 3,
							}, ],
						},
						{
							"property": 'file',
							"type": "upload",
							"name": "FILES[0]",
							"label": "Согласие кандидата на обработку ПД *",
							"multi": false,
							"maxsize": 10240000,
							"required": true,
							"value": null,
							"upload": {},
							"action": "/local/components/twinpx/journal.new/templates/.default/fileupload.php?APPEAL_ID=519612&TYPE=sign",
							"accept": [
								"pdf",
								"jpg",
								"jpeg",
								"png",
								"doc",
								"docx"
							],
						},
					]
				}]
			},
			"autosaveTimeoutId": 39,
			"autosave": 5000,
			"agreement": {
				"name": "FORM_AGREEMENT",
				"value": "Y",
				"checked": false,
				"text": "Я принимаю <a href=\"/privacy/\" target=\"_blank\">условия Пользовательского соглашения</a> и даю своё согласие СРО ААС на обработку моей персональной информации на условиях, определенных Политикой конфиденциальности.",
				"invalid": false
			},
			"url": {
				"autosave": "/local/components/twinpx/journal.new/templates/.default/autosave.php",
				"fileUpload": "/local/components/twinpx/journal.new/templates/.default/fileupload.php?APPEAL_ID=513571",
				"getUsers": "/local/components/twinpx/journal.new/templates/.default/find.php"
			},
			"APPEAL_ID": 513571
		}
	});
	appealnewchangeform.run();
</script>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>