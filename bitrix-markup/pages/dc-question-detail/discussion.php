<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Обсуждение - Вопрос дисциплинарного засеания 6");

\Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");
\Bitrix\Main\UI\Extension::load("local.vue-apps.disciplinary-question-discussion");
?>

<div class="ph-content">

  <div class="b-twpx-tabs-menu">
    <div class="b-twpx-tabs-menu__wrapper">
      <a href="/markup/pages/dc-question-detail/">Общие данные</a>
      <a href="/markup/pages/dc-question-detail/">Дисциплинарное дело</a>
      <a href="/markup/pages/dc-question-detail/">Жалоба</a>
      <a href="/markup/pages/dc-question-detail/discussion.php" class="b-twpx-tabs--active">Обсуждение</a>
    </div>
  </div>
  
  <hr>
  
  <div id="dcQuestionDetailDiscussion"></div>
  
  <script>
	const questionDiscussion = new BX.DisciplinaryQuestionDiscussion('#dcQuestionDetailDiscussion', {
	  data: {
		  sessid: BX.bitrix_sessid(),
		  signedParameters: '',
		  id: 19153,
		  type_id: 89
	  },
	  lang: {
		  heading: 'Обсуждение',
		  form: {
			  heading: 'Написать комментарий',
			  button: 'Отправить'
		  },
		  editForm: {
			  heading: 'Комментарий',
			  buttons: [
				  'Отменить',
				  'Сохранить'
			  ]
		  },
		  deleteModal: {
			  heading: 'Вы удаляете комменатрий',
			  text: 'Вы хотите удалить комментарий?',
			  no: 'Отменить',
			  yes: 'Удалить'
		  },
		  editModal: {
			  heading: 'Изменить комментарий'
		  },
	  },
	  actions: {
		  getComments: ['twinpx:disciplinar.discussion', 'getComments'],
		  getForm: ['twinpx:disciplinar.discussion', 'getForm'],
		  sendForm: ['twinpx:disciplinar.discussion', 'sendForm'],
		  deleteComment: ['twinpx:disciplinar.discussion', 'deleteComment'],
		  getEditForm: ['twinpx:disciplinar.discussion', 'getEditForm'],
		  sendEditForm: ['twinpx:disciplinar.discussion', 'sendEditForm'],
	  }
	});
	questionDiscussion.run();
  </script>
  
</div>
            
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>