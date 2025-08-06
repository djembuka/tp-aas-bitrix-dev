<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Вопрос дисциплинарного засеания 6");

\Bitrix\Main\UI\Extension::load("local.vue-apps.form-status-change");
\Bitrix\Main\UI\Extension::load("local.vue-apps.buttons-block");
\Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");
?>

<div class="ph-content">

  <div class="b-twpx-tabs-menu">
    <div class="b-twpx-tabs-menu__wrapper">
      <a href="/markup/pages/dc-question-detail/" class="b-twpx-tabs--active">Общие данные</a>
      <a href="/markup/pages/dc-question-detail/">Дисциплинарное дело</a>
      <a href="/markup/pages/dc-question-detail/">Жалоба</a>
      <a href="/markup/pages/dc-question-detail/discussion.php">Обсуждение</a>
    </div>
  </div>
  
  <hr>
  
  <div id="dcQuestionDetailDelete"></div>
  
  <script>
	const questionStatusDelete = new BX.ButtonsBlock('#dcQuestionDetailDelete', {
	  data: {
		  sessid: BX.bitrix_sessid(),
		  signedParameters: '',
		  id: 19153,
		  type_id: 89
	  },
	  lang: {
		  heading: 'Удаление дисциплинарного заседания',
		  text: 'Обратите внимание: не рекомендуется удалять заседание, если его статус отличается от Запланировано.',
	  },
	  buttons: [
		{
			type: 'delete',
			text: 'Удалить',
		    modal: {
			  heading: 'Подтвердите удаление',
			  text: 'Вы хотите удалить нарушение, подтвердите пожалуйста действие.',
			  yes: 'Удалить',
			  no: 'Отменить'
		    },
			actions: {
			  'delete': ['twinpx:disciplinar.comments', 'delete'],
			},
		}
	  ]
	});
	questionStatusDelete.run();
  </script>
  
  <hr>
  
  <div id="dcQuestionDetailStatus"></div>
  
  <script>
	const questionStatusChange = new BX.FormStatusChange('#dcQuestionDetailStatus', {
	  data: {
		  sessid: BX.bitrix_sessid(),
		  signedParameters: '',
		  id: 19153,
		  type_id: 89
	  },
	  actions: {
		getForm: ['twinpx:disciplinar.comments', 'getForm'],
		saveForm: ['twinpx:disciplinar.comments', 'saveForm'],
		getHistory: ['twinpx:disciplinar.comments', 'getHistory'],
	  },
	  lang: {
		  form: {
			  heading: 'Изменить статус',
			  button: 'Отправить'
		  },
		  history: {
			  heading: 'История изменения статусов вопроса 6'
		  },
		  modal: {
			  heading: 'Вы хотите отредактировать отчет?',
			  text: '<p>Вы переходите в режим редактирования отчета. После внесения изменений в отчет вам необходимо сдать его, нажав на кнопку «Сдать отчет».<p></p>До тех пор, пока вы повторно не отправите отчет, он будет находиться в статусе «Необходимо сдать».</p>',
			  yes: 'Сохранить',
			  no: 'Отменить'
		  }
	  }
	});
	questionStatusChange.run();
  </script>
  
</div>
            
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>