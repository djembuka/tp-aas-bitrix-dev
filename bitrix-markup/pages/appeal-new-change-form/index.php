<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
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
		'SESSION_ID': '123',
		'SIGNED_PARAMETERS': 'signedParameters',
		'data': 
		{
			"hidden": [
				{
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
				"items": [
					{
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
				"controls": [	  
					{
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
						"required": false,
						"value": "",
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
						"required": false,
						"value": "",
						"pattern": "^\\d{11}$",
						"completeBlock": {
							"title": "",
							"value": "",
							"comment": "ОРНЗ организации"
						}
					},  
					{
						"property": 'text',
						id: 'PROPERTY_445_0',
						name: 'PROPERTY[445][0]',
						"label": "ОГРН организации",
						"required": false,
						"value": "",
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
				"text": "",
				"items": [
					{
						"id": 0,
						"checked": true,
						"title": "Пакет документов 1",
						"text": "<ul><li>Согласие кандидата на обработку персональных данных</li><li>Если документ подписан отсоединённой электронной подписью, добавьте ее.</li><li>Согласие кандидата на избрание, выдвижение</li><li>Если документ подписан отсоединённой электронной подписью, добавьте ее.</li><li>Резюме кандидата, включая информацию об участии в деятельности СРО ААС, работе общественных, профессиональных и/или иных организаций (представляется в произвольной форме)</li></ul>",
						"name": "FIELDS_ATTACHE",
						"value": 0,
						"controls": [
							{
								"property": 109,
								"word": "FILES[0]",
								"label": "Согласие кандидата на обработку ПД *",
								"type": "file",
								"multy": false,
								"maxSize": 10240000,
								"required": true,
								"filename": "",
								"value": "",
								"default": "<a href>Выберите файл</a> (pdf, jpg, jpeg, png, doc, docx, до 10МБ)",
								"ext": [
									"pdf",
									"jpg",
									"jpeg",
									"png",
									"doc",
									"docx"
								],
								"completeBlock": {
									"comment": "Согласие кандидата на обработку персональных данных"
								}
							},
							{
								"property": 87,
								"word": "FILES[0]",
								"label": "Отсоединённая электронная подпись",
								"type": "file",
								"multy": false,
								"maxSize": 10240000,
								"required": false,
								"filename": "",
								"value": "",
								"default": "<a href>Выберите файл</a> (sig, sgn, p7s, до 10МБ)",
								"ext": [
									"sig",
									"sgn",
									"p7s"
								],
								"completeBlock": {
									"comment": "Если документ подписан отсоединённой электронной подписью, добавьте ее."
								}
							},
							{
								"property": 108,
								"word": "FILES[0]",
								"label": "Согласие кандидата на избрание, выдвижение *",
								"type": "file",
								"multy": false,
								"maxSize": 10240000,
								"required": true,
								"filename": "",
								"value": "",
								"default": "<a href>Выберите файл</a> (pdf, jpg, jpeg, png, doc, docx, до 10МБ)",
								"ext": [
									"pdf",
									"jpg",
									"jpeg",
									"png",
									"doc",
									"docx"
								],
								"completeBlock": {
									"comment": "Согласие кандидата на избрание, выдвижение"
								}
							},
							{
								"property": 90,
								"word": "FILES[0]",
								"label": "Отсоединённая электронная подпись",
								"type": "file",
								"multy": false,
								"maxSize": 10240000,
								"required": false,
								"filename": "",
								"value": "",
								"default": "<a href>Выберите файл</a> (sig, sgn, p7s, до 10МБ)",
								"ext": [
									"sig",
									"sgn",
									"p7s"
								],
								"completeBlock": {
									"comment": "Если документ подписан отсоединённой электронной подписью, добавьте ее."
								}
							},
							{
								"property": 110,
								"word": "FILES[0]",
								"label": "Резюме кандидата *",
								"type": "file",
								"multy": false,
								"maxSize": 10240000,
								"required": true,
								"filename": "",
								"value": "",
								"default": "<a href>Выберите файл</a> (pdf, jpg, jpeg, png, doc, docx, до 10МБ)",
								"ext": [
									"pdf",
									"jpg",
									"jpeg",
									"png",
									"doc",
									"docx"
								],
								"completeBlock": {
									"comment": "Резюме кандидата, включая информацию об участии в деятельности СРО ААС, работе общественных, профессиональных и/или иных организаций (представляется в произвольной форме)"
								}
							}
						]
					}
				]
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

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>