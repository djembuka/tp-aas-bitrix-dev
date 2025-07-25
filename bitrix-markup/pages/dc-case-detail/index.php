<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Дисциплинарное дело 150");

\Bitrix\Main\UI\Extension::load("local.vue-apps.table");
\Bitrix\Main\UI\Extension::load("local.vue-apps.disciplinary-case-form");
\Bitrix\Main\UI\Extension::load("local.vue-apps.disciplinary-case-table");
\Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");
\Bitrix\Main\UI\Extension::load("local.extensions.copy-to-clipboard");
\Bitrix\Main\UI\Extension::load("local.vue-components.button-component");
?>

<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>

<div class="ph-content">

  <div class="b-twpx-tabs-menu">
    <div class="b-twpx-tabs-menu__wrapper">
      <a href="/markup/pages/dc-case-detail/" class="b-twpx-tabs--active">Общие данные</a>
      <a href="/markup/pages/dc-case-detail/meetings.php">Заседания</a>
      <a href="/markup/pages/dc-case-detail/docs.php">Документы</a>
    </div>
  </div>
  <hr>
  <div class="b-dc-case-detail__block">
    <hr>
    <div class="b-dc-case-detail__data">
	
      <div class="d-flex align-items-center" style="gap: 24px;">
		<h3 class="mt-0 mb-0">Общие данные</h3>
		<div class="vue-button vue-button--serve vue-button--small" data-id="123" data-type="456" onclick="window.disciplinarycaseform.run({id:19142, type:1})">Изменить</div>
	  </div>
	  
	  <hr class="hr--sm">
	  
      <div class="row">
        <div class="col-lg-6"> 
          <table class="table">
            <colgroup>
              <col style="width: 50%">
              <col style="width: 50%">
            </colgroup>
            <tbody>
              <tr>
                <th>Номер дисциплинарного дела</th>
                <td class="b-twpx-copy">N3456</td>
              </tr>
              <tr>
                <th>Дата создания</th>
                <td class="b-twpx-copy">21.05.2024</td>
              </tr>
              <tr>
                <th>Автор</th>
                <td class="b-twpx-copy">Иванов Петр Матвеевич</td>
              </tr>
              <tr>
                <th>Заявитель</th>
                <td class="b-twpx-copy">МинФин</td>
              </tr>
              <tr>
                <th>Ответчик</th>
                <td class="b-twpx-copy"> 
                  <div><a href="">ООО "АудитНезависимость"</a>
                    <hr class="hr--xs">
                    <div class="small text-muted">ООО "12106028665"</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>ID дисц. дела</th>
                <td class="b-twpx-copy">78236498</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-6"> 
          <table class="table">
            <colgroup>
              <col style="width: 50%">
              <col style="width: 50%">
            </colgroup>
            <tbody>
              <tr>
                <th>Статус</th>
                <td class="b-twpx-copy"><span class="label-orange"><span>Идет</span></span></td>
              </tr>
              <tr>
                <th>Основание</th>
                <td class="b-twpx-copy">Жалоба</td>
              </tr>
              <tr>
                <th>Нарушение</th>
                <td class="b-twpx-copy">
                  <div>
                    <p>Несоблюдение требования об уплате взносов в компенсационный фонд (компенсационные фонды) саморегулируемой организации аудиторов</p>
                    <p>Неучастие аудитора в осуществлении аудиторской деятельности (неосуществление индивидуальным аудитором аудиторской деятельности) в течении двух последовательных календарных лет</p>
                    <p>Несоблюдение требований Федерального закона от 30 декабря 2008 г. № 307-ФЗ «Об аудиторской деятельности»</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="b-dc-case-detail__data">
      <h3>Заявитель и автор</h3>
      <div class="row">
        <div class="col-lg-6"> 
          <table class="table">
            <colgroup>
              <col style="width: 50%">
              <col style="width: 50%">
            </colgroup>
            <tbody>
              <tr>
                <th>Заявитель</th>
                <td>МинФин<span class="b-copy-icon" style="background-image: url('/template/images/copy-30.svg')"></span></td>
              </tr>
              <tr>
                <th>Email заявителя</th>
                <td>minfin@minfin.ru<span class="b-copy-icon" style="background-image: url('/template/images/copy-30.svg')"></span></td>
              </tr>
              <tr>
                <th>Телефон заявителя</th>
                <td>+7 919 919 19 19<span class="b-copy-icon" style="background-image: url('/template/images/copy-30.svg')"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-6"> 
          <table class="table">
            <colgroup>
              <col style="width: 50%">
              <col style="width: 50%">
            </colgroup>
            <tbody>
              <tr>
                <th>Автор</th>
                <td>Иванов Петр Матвеевич<span class="b-copy-icon" style="background-image: url('/template/images/copy-30.svg')"></span></td>
              </tr>
              <tr>
                <th>Email автора</th>
                <td>autor@mail.ru<span class="b-copy-icon" style="background-image: url('/template/images/copy-30.svg')"></span></td>
              </tr>
              <tr>
                <th>Телефон автора</th>
                <td>+7 919 919 19 19<span class="b-copy-icon" style="background-image: url('/template/images/copy-30.svg')"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="b-dc-case-detail__data">
      <h3>Ответчик</h3>
      <div class="row">
        <div class="col-lg-6"> 
          <table class="table">
            <colgroup>
              <col style="width: 50%">
              <col style="width: 50%">
            </colgroup>
            <tbody>
              <tr>
                <th>Ответчик</th>
                <td> 
                  <div><a href="">ООО "АудитНезависимость"</a>
                    <hr class="hr--xs">
                    <div class="small text-muted">ООО "12106028665"</div>
                  </div><span class="b-copy-icon" style="background-image: url('/template/images/copy-30.svg')"></span>
                </td>
              </tr>
              <tr>
                <th>Email ответчика</th>
                <td>autor@mail.ru<span class="b-copy-icon" style="background-image: url('/template/images/copy-30.svg')"></span></td>
              </tr>
              <tr>
                <th>Телефон ответчика</th>
                <td>+7 919 919 19 19<span class="b-copy-icon" style="background-image: url('/template/images/copy-30.svg')"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="b-dc-case-detail-violations">
      <h3>Нарушения</h3>
      <div id="dcCaseDetailViolations"></div>
      <script>
		window.disciplinaryCaseTableViolations = new BX.DisciplinaryCaseTable('#dcCaseDetailViolations', {
		  data: {
			  sessid: BX.bitrix_sessid(),
			  signedParameters: '',
			  id: 123,
			  type: 2
		  },
		  actions: {
			columnsNames: ['twinpx:disciplinar.case.table', 'columnsNames'],
			items: ['twinpx:disciplinar.case.table', 'items'],
			deleteItem: ['twinpx:disciplinar.case.table', 'deleteItem'],
		  },
		  lang: {
			  addButton: 'Добавить нарушение',
			  deleteModal: {
				  heading: 'Подтвердите удаление',
				  text: 'Вы хотите удалить нарушение, подтвердите пожалуйста действие.',
				  yes: 'Удалить',
				  no: 'Отменить'
			  }
		  },
		  outerMethods: {
			  addForm: ['disciplinaryCaseFormViolations', 'run'],
			  editForm: ['disciplinaryCaseFormViolations', 'run']
		  }
		});
		window.disciplinaryCaseTableViolations.run();
      </script>
	  
	  <div id="dcCaseFormViolations"></div>
	  <script>
		window.disciplinaryCaseFormViolations = new BX.DisciplinaryCaseForm('#dcCaseFormViolations', {
			sessid: BX.bitrix_sessid(),
			signedParameters: '',
			modal: true,
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
			actions: {
				getForm: ['twinpx:disciplinar.case.add', 'getForm'],
				saveForm: ['twinpx:disciplinar.case.add', 'saveForm']
			},
			outerMethods: {
				send: ['disciplinaryCaseTableViolations', 'loadTable']
			}
		});
	  </script>
    </div>
    <div class="b-dc-case-detail-cases">
      <h3>Заседания<span class="text-blue">&nbsp;&nbsp;7</span></h3>
      <div id="dcCaseDetailCases"></div>
      
      <hr class="hr--xl">
      <a class="btn btn-serve btn-md" href="/pages/dc-cases/">Все заседания</a>
    </div>
    <hr class="hr--xxl">
    <div class="b-dc-case-detail-actions">
      <h3>Меры</h3>
      <div id="dcCaseDetailActions"></div>
      <script>
		window.disciplinaryCaseTableActions = new BX.DisciplinaryCaseTable('#dcCaseDetailActions', {
		  data: {
			  sessid: BX.bitrix_sessid(),
			  signedParameters: '',
			  id: 123,
			  type: 2
		  },
		  actions: {
			columnsNames: ['twinpx:disciplinar.case.table', 'columnsNames'],
			items: ['twinpx:disciplinar.case.table', 'items'],
			deleteItem: ['twinpx:disciplinar.case.table', 'deleteItem'],
		  },
		  lang: {
			  addButton: 'Добавить нарушение',
			  deleteModal: {
				  heading: 'Подтвердите удаление',
				  text: 'Вы хотите удалить нарушение, подтвердите пожалуйста действие.',
				  yes: 'Удалить',
				  no: 'Отменить'
			  }
		  },
		  outerMethods: {
			  addForm: ['disciplinaryCaseFormViolations', 'run'],
			  editForm: ['disciplinaryCaseFormViolations', 'run']
		  }
		});
		window.disciplinaryCaseTableActions.run();
      </script>
	  
	  <div id="dcCaseFormActions"></div>
	  <script>
		window.disciplinaryCaseFormActions = new BX.DisciplinaryCaseForm('#dcCaseFormActions', {
			sessid: BX.bitrix_sessid(),
			signedParameters: '',
			modal: true,
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
			actions: {
				getForm: ['twinpx:disciplinar.case.add', 'getForm'],
				saveForm: ['twinpx:disciplinar.case.add', 'saveForm']
			},
			outerMethods: {
				send: ['disciplinaryCaseTableViolations', 'loadTable']
			}
		});
	  </script>
    </div>
    <hr class="hr--sl">
    <div class="b-block-with-buttons">
      <h3>Вы можете</h3>
      <div class="b-block-with-buttons__buttons">
        <button class="btn btn-secondary" data-toggle="modal" data-target="#getExcerptModal"><span class="icon" style="background-image: url( '/template/images/icon-edit-white.svg' );"></span><span>Отредактировать</span></button>
        <button class="btn btn-danger"><span class="icon" style="background-image: url( '/template/images/icon-remove-white.svg' );"></span><span>Удалить</span></button>
      </div>
    </div>
    <hr class="hr--sl">
    <div class="b-appeal-wrapper">
      <div class="b-appeal-item">
        <div class="b-appeal-title">Создать дело</div>
        <div class="b-appeal-text">Вы можете создать новое дисциплинарное дело.</div><a class="btn btn-secondary btn-md" href="">Создать дело</a>
      </div>
      <div class="b-appeal-item">
        <div class="b-appeal-title">Создать заседание</div>
        <div class="b-appeal-text">Вы можете создать новое заседание дисциплинарной комиссии.</div><a class="btn btn-secondary btn-md" href="">Создать заседание</a>
      </div>
      <div class="b-appeal-item">
        <div class="b-appeal-title">Техническая поддержа</div>
        <div class="b-appeal-text">Если у вас возникла проблема, напишите в техническую поддержку о вашей проблеме</div><a class="btn btn-secondary btn-md" href="">Написать в поддержку</a>
      </div>
    </div>
  </div>
</div>
            

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>