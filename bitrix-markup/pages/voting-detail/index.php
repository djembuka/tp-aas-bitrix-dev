<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Детальная страница голосования");

\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-detail");
\Bitrix\Main\UI\Extension::load("local.vue-apps.voting-create");
?>

<div id="VotingDetail"></div>

<script>
window.votingDetailLang = {
      // stores/add-edit.js
      TWPX_VOTING_DETAIL_GROUP_ADD_HEADING: 'Создать группу вопросов',
      TWPX_VOTING_DETAIL_GROUP_ADD_CANCEL_BUTTON: 'Отменить',
      TWPX_VOTING_DETAIL_GROUP_ADD_SEND_BUTTON: 'Создать',
      
      TWPX_VOTING_DETAIL_GROUP_EDIT_HEADING: 'Изменить группу вопросов',
      TWPX_VOTING_DETAIL_GROUP_EDIT_CANCEL_BUTTON: 'Отменить',
      TWPX_VOTING_DETAIL_GROUP_EDIT_SEND_BUTTON: 'Изменить',
      
      TWPX_VOTING_DETAIL_QUESTION_ADD_HEADING: 'Добавить вопрос',
      TWPX_VOTING_DETAIL_QUESTION_ADD_CANCEL_BUTTON: 'Отменить',
      TWPX_VOTING_DETAIL_QUESTION_ADD_SEND_BUTTON: 'Добавить',
      
      TWPX_VOTING_DETAIL_QUESTION_EDIT_HEADING: 'Изменить вопрос',
      TWPX_VOTING_DETAIL_QUESTION_EDIT_CANCEL_BUTTON: 'Отменить',
      TWPX_VOTING_DETAIL_QUESTION_EDIT_SEND_BUTTON: 'Изменить',
      
      TWPX_VOTING_DETAIL_ANSWER_ADD_HEADING: 'Добавить ответ',
      TWPX_VOTING_DETAIL_ANSWER_ADD_CANCEL_BUTTON: 'Отменить',
      TWPX_VOTING_DETAIL_ANSWER_ADD_SEND_BUTTON: 'Добавить',
      
      TWPX_VOTING_DETAIL_ANSWER_EDIT_HEADING: 'Изменить ответ',
      TWPX_VOTING_DETAIL_ANSWER_EDIT_CANCEL_BUTTON: 'Отменить',
      TWPX_VOTING_DETAIL_ANSWER_EDIT_SEND_BUTTON: 'Изменить',

      // stores/controls.js
      TWPX_VOTING_DETAIL_FORM_GROUP_HEADING1: 'Общие данные',
      TWPX_VOTING_DETAIL_FORM_GROUP_UUID_LABEL: '',
      TWPX_VOTING_DETAIL_FORM_GROUP_NAME_LABEL: 'Название группы вопросов',
      TWPX_VOTING_DETAIL_FORM_GROUP_NAME_HINT: 'Название группы вопросов',
      TWPX_VOTING_DETAIL_FORM_GROUP_DESCRIPTION_LABEL: 'Текст подробного описания',
      TWPX_VOTING_DETAIL_FORM_GROUP_PIC_LABEL: 'Иллюстрация',

      TWPX_VOTING_DETAIL_FORM_GROUP_HEADING2: 'Технические',
      TWPX_VOTING_DETAIL_FORM_GROUP_SORT_LABEL: 'Порядок размещения группы',
      TWPX_VOTING_DETAIL_FORM_GROUP_SORT_HINT: 'Используйте цифры от 1 до N,  порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.',
      
      TWPX_VOTING_DETAIL_FORM_QUESTION_HEADING1: 'Общие данные',
      TWPX_VOTING_DETAIL_FORM_QUESTION_UUID_LABEL: '',
      TWPX_VOTING_DETAIL_FORM_QUESTION_NAME_LABEL: 'Название вопроса',
      TWPX_VOTING_DETAIL_FORM_QUESTION_DESCRIPTION_LABEL: 'Текст подробного описания',
      TWPX_VOTING_DETAIL_FORM_QUESTION_PIC_LABEL: 'Иллюстрация вопроса',
      
      TWPX_VOTING_DETAIL_FORM_QUESTION_HEADING3: 'Файлы вопроса',
      TWPX_VOTING_DETAIL_FORM_QUESTION_FILE_LABEL: 'Файл',
      
      TWPX_VOTING_DETAIL_FORM_QUESTION_HEADING2: 'Технические',
      TWPX_VOTING_DETAIL_FORM_QUESTION_TYPE_LABEL: 'Тип выбора',
      TWPX_VOTING_DETAIL_FORM_QUESTION_TYPE_OPTION1: 'Радио кнопка',
      TWPX_VOTING_DETAIL_FORM_QUESTION_TYPE_OPTION2: 'Чекбокс',
      TWPX_VOTING_DETAIL_FORM_QUESTION_NUM_LABEL: 'Количество ответов',
      TWPX_VOTING_DETAIL_FORM_QUESTION_NUM_HINT: 'Максимальное количество ответов на вопрос.',
      TWPX_VOTING_DETAIL_FORM_QUESTION_SORT_LABEL: 'Порядок размещения на странице',
      TWPX_VOTING_DETAIL_FORM_QUESTION_SORT_HINT: 'Используйте цифры от 1 до N,  порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.',
      
      TWPX_VOTING_DETAIL_FORM_ANSWER_HEADING1: 'Общие данные',
      TWPX_VOTING_DETAIL_FORM_ANSWER_UUID_LABEL: '',
      TWPX_VOTING_DETAIL_FORM_ANSWER_NAME_LABEL: 'Название ответа',
      TWPX_VOTING_DETAIL_FORM_ANSWER_DESCRIPTION_LABEL: 'Название ответа',
      TWPX_VOTING_DETAIL_FORM_ANSWER_PIC_LABEL: 'Название ответа',
      
      TWPX_VOTING_DETAIL_FORM_ANSWER_HEADING2: 'Технические',
      TWPX_VOTING_DETAIL_FORM_ANSWER_SORT_LABEL: 'Порядок размещения на странице',
      TWPX_VOTING_DETAIL_FORM_ANSWER_SORT_HINT: 'Используйте цифры от 1 до N,  порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.',

      // stores/data.js
      TWPX_VOTING_DETAIL_CHANGE_BUTTON: 'Изменить',
      
      TWPX_VOTING_DETAIL_DELETE_GROUP_HEADING: 'Подтвердите удаление группы вопросов',
      TWPX_VOTING_DETAIL_DELETE_GROUP_TEXT: 'Подтвердите удаление группы вопросов. Обратите внимание: после удаления восстановить её будет невозможно.',
      TWPX_VOTING_DETAIL_DELETE_GROUP_NO: 'Отменить',
      TWPX_VOTING_DETAIL_DELETE_GROUP_YES: 'Удалить',
      
      TWPX_VOTING_DETAIL_DELETE_QUESTION_HEADING: 'Подтвердите удаление вопроса',
      TWPX_VOTING_DETAIL_DELETE_QUESTION_TEXT: 'Подтвердите удаление вопроса. Обратите внимание: после удаления восстановить его будет невозможно.',
      TWPX_VOTING_DETAIL_DELETE_QUESTION_NO: 'Отменить',
      TWPX_VOTING_DETAIL_DELETE_QUESTION_YES: 'Удалить',
      
      TWPX_VOTING_DETAIL_DELETE_ANSWER_HEADING: 'Подтвердите удаление ответа',
      TWPX_VOTING_DETAIL_DELETE_ANSWER_TEXT: 'Подтвердите удаление ответа. Обратите внимание: после удаления восстановить его будет невозможно.',
      TWPX_VOTING_DETAIL_DELETE_ANSWER_NO: 'Отменить',
      TWPX_VOTING_DETAIL_DELETE_ANSWER_YES: 'Удалить',
      
      TWPX_VOTING_DETAIL_GROUP_BLOCK_HEADING: 'Создать группу вопросов',
      TWPX_VOTING_DETAIL_GROUP_BLOCK_TEXT: 'Создайте группу вопросов, чтобы объединить несколько вопросов под единым заголовком и описанием. Если ваши вопросы не разделены на группы, создайте одну общую группу и добавьте все вопросы в неё. Учтите: группа является обязательным элементом голосования.',
      TWPX_VOTING_DETAIL_GROUP_BLOCK_BUTTON: 'Добавить группу вопросов',
      
      TWPX_VOTING_DETAIL_GROUP_ITEM_HEADING: 'Добавить вопрос',
      TWPX_VOTING_DETAIL_GROUP_ITEM_TEXT: 'Используйте эту функцию, чтобы создать новый вопрос для голосования. Укажите формулировку вопроса, при необходимости добавьте варианты ответов и сохраните его в выбранной группе.',
      TWPX_VOTING_DETAIL_GROUP_ITEM_BUTTON: 'Добавить вопрос',
      
      // components/question-item.js
      TWPX_VOTING_DETAIL_QUESTION_ITEM_ADD_BUTTON: 'Добавить ответ',

      // components/link-blocks.js
      TWPX_VOTING_DETAIL_POLL_LINK_TITLE: 'Ссылка на публичную страницу результатов',
      TWPX_VOTING_DETAIL_POLL_RESULT_TITLE: 'Ссылка на публичное голосование',

      // components/detail-info.js
      TWPX_VOTING_DETAIL_INFO_HEADING1: 'Общие данные',
      TWPX_VOTING_DETAIL_INFO_NAME: 'Название голосования',
      TWPX_VOTING_DETAIL_INFO_ANNOUNCEMENT: 'Текст анонса',
      TWPX_VOTING_DETAIL_INFO_DESCRIPTION: 'Текст подробного описания',
      
      TWPX_VOTING_DETAIL_INFO_HEADING2: 'Сроки',
      TWPX_VOTING_DETAIL_INFO_ACTIVITY_START_DATE: 'Дата начала активности',
      TWPX_VOTING_DETAIL_INFO_ACTIVITY_END_DATE: 'Дата окончания активности',
      TWPX_VOTING_DETAIL_INFO_VOTE_END_DATE: 'Дата окончания голосования',
      
      TWPX_VOTING_DETAIL_INFO_HEADING3: 'Технические',
      TWPX_VOTING_DETAIL_INFO_NUMBER_VOTES_LIMIT: 'Количество попыток',
      TWPX_VOTING_DETAIL_INFO_NUMBER_VOTERS: 'Количество голосующих',
      TWPX_VOTING_DETAIL_INFO_BUTTON_MESSAGE: 'Сообщение у кнопки',
      TWPX_VOTING_DETAIL_INFO_MESSAGE_AFTER_VOTING: 'Сообщение после голосования',
      TWPX_VOTING_DETAIL_INFO_SORT_INDEX: 'Порядок размещения',
      
      TWPX_VOTING_DETAIL_INFO_HEADING4: 'Доступы',
      TWPX_VOTING_DETAIL_INFO_GROUPS_VOTING: 'ID групп голосующих',
      TWPX_VOTING_DETAIL_INFO_GROUPS_VOTING_EIO: 'ID групп голосующих ЕИО',
      TWPX_VOTING_DETAIL_INFO_GROUPS_VOTING_UMC: 'ID групп голосующих УМЦ',
      TWPX_VOTING_DETAIL_INFO_GROUPS_COMISSION: 'ID групп Избирательных комиссий',
      
      TWPX_VOTING_DETAIL_INFO_HEADING5: 'Оформление документов',
      TWPX_VOTING_DETAIL_INFO_PDF_TITLE: 'Заголовок документа',
      TWPX_VOTING_DETAIL_INFO_PDF_SUB_TITLE: 'Подзаголовок документа',

    };

window.votingCreateLang = {
      TWPX_VOTING_CREATE_HEADING: 'Новое голосование',
      TWPX_VOTING_CREATE_EDIT_HEADING: 'Изменить голосование',
      TWPX_VOTING_CREATE_CANCEL_BUTTON: 'Отменить',
      TWPX_VOTING_CREATE_SEND_BUTTON: 'Создать',
      TWPX_VOTING_CREATE_EDIT_SEND_BUTTON: 'Изменить',

      TWPX_VOTING_CREATE_BLOCK1_HEADING: 'Общие данные',
      TWPX_VOTING_CREATE_NAME_LABEL: 'Название голосования',
      TWPX_VOTING_CREATE_ANNOUNCEMENT_LABEL: 'Текст анонса',
      TWPX_VOTING_CREATE_DESCRIPTION_LABEL: 'Текст подробного описания',

      TWPX_VOTING_CREATE_BLOCK2_HEADING: 'Сроки',
      TWPX_VOTING_CREATE_DATE_FROM_LABEL: 'Дата начала активности',
      TWPX_VOTING_CREATE_DATE_TO_LABEL: 'Дата окончания активности',
      TWPX_VOTING_CREATE_DATE_FINISH_LABEL: 'Дата окончания голосования',

      TWPX_VOTING_CREATE_BLOCK3_HEADING: 'Технические',
      TWPX_VOTING_CREATE_NUM_LABEL: 'Количество попыток',
      TWPX_VOTING_CREATE_VOTERS_NUM_LABEL: 'Количество голосующих',
      TWPX_VOTING_CREATE_BUTTON_LABEL: 'Сообщение у кнопки',
      TWPX_VOTING_CREATE_MESSAGE_LABEL: 'Сообщение после голосования',
      TWPX_VOTING_CREATE_SORT_LABEL: 'Порядок размещения',
      TWPX_VOTING_CREATE_SORT_HINT:
        'Используйте цифры от 1 до N, порядок определяет от 1, сверху вниз. 1 всегда будет первым. Для удобства рекомендуем использовать 10, 20, 30, это позволит оперативно изменить порядок.',

      TWPX_VOTING_CREATE_BLOCK4_HEADING: 'Доступы',
      TWPX_VOTING_CREATE_MEMBERS_ID_LABEL: 'ID групп голосующих',
      TWPX_VOTING_CREATE_MEMBERS_EIO_ID_LABEL: 'ID групп голосующих ЕИО',
      TWPX_VOTING_CREATE_MEMBERS_UMC_ID_LABEL: 'ID групп голосующих УМЦ',
      TWPX_VOTING_CREATE_COMMISSIONS_ID_LABEL:
        'ID групп Избирательных комиссий',

      TWPX_VOTING_CREATE_BLOCK5_HEADING: 'Оформление документов',
      TWPX_VOTING_CREATE_DOC_TITLE_LABEL: 'Заголовок документа',
      TWPX_VOTING_CREATE_DOC_SUBTITLE_LABEL: 'Подзаголовок документа',
    };

const message = window.BX.message;

window.BX.message = (name) => {
	if (name.startsWith('TWPX_VOTING')) {
		return window.votingDetailLang[name] || window.votingCreateLang[name]
	} else {
		return message(name);
	}
};
</script>

<script>
(() => {
	const votingdetail = new BX.VotingDetail('#VotingDetail', {
		data: {
			userid: 20039,
			sessid: BX.bitrix_sessid(),
		},
		signedParameters: '',
		uuid: '442f22d1-9669-4afb-80fe-ead7694a8362'
	});	
	votingdetail.run();
})();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>