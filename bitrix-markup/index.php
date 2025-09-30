<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Markup");
?>

<h2>Extensions</h2>
<ul>
  <li><a href="/markup/extensions/">Extensions</a></li>
  <li><a href="/markup/vue/bitrix-vue-demo/">Bitrix Vue demo</a></li>
</ul>

<h2>Приложения-заготовки для страниц</h2>

<h3>Forms</h3>
<ul>
  <li><a href="/markup/vue/form-with-multi/">Form with multi control</a></li>
</ul>

<h3>Table</h3>
<ul>
  <li><a href="/markup/vue/filter-table/">Filter table</a></li>
  <li><a href="/markup/vue/filter-table-button-choice/">Filter table с выбором - страничник, кнопка подгрузки, автоматическая подгрузка</a></li>
  <li><a href="/markup/vue/table/">Table</a></li>
  <li><a href="/markup/vue/table-sortable/">Table sortable</a></li>
  <li><a href="/markup/vue/table-with-pagination/">Table with pagination</a></li>
</ul>

<h2>Страницы</h2>

<h3>Голосование</h3>
<ul>
  <li>
	<a href="/markup/pages/voting-candidates/">Кандидаты в правление</a>
  </li>
  <li>
	<a href="/markup/pages/voting-list/">Список голосований</a>
  </li>
  <li>
	<a href="/markup/pages/voting-create/">Создать голосование</a>
  </li>
  <li>
	<a href="/markup/pages/voting-detail/">Детальная страница голосования</a>
  </li>
  <li>
	<a href="/markup/pages/voting-screen/">Экран голосования</a>
  </li>
</ul>

<h3>Marketplace</h3>
<ul>
  <li>
	<a href="/markup/pages/marketplace/">Marketplace</a>
  </li>
</ul>

<h3>Аутентификация по смс</h3>
<ul>
  <li>
	<a href="/markup/pages/auth-sms/">Аутентификация по смс</a>
  </li>
  <li>
	<a href="/markup/pages/auth-keys/">Аутентификация для неаудиторов</a>
  </li>
  <li>
	<a href="/markup/pages/auth-keys/info.php">Аутентификация - info</a>
  </li>
  <li>
	<a href="/markup/pages/auth-keys/error.php">Аутентификация - error</a>
  </li>
</ul>

<h3>Обращения</h3>
<ul>
  <li>
	<a href="/markup/pages/appeal-new-change-form/">Форма создания обращения</a>
  </li>
</ul>

<h3>Дисциплинарная комиссия</h3>
<ul>
  <li><a href="/markup/pages/dc-case-form/">Форма добавления/редактирования дисциплинарного дела</a>
  <li><a href="/markup/pages/dc-registry/">Реестр дисциплинарных дел</a>
	<ul>
	  <li><a href="/markup/pages/dc-case-detail/">Дисциплинарное дело детально - Общие данные</a></li>
	  <li><a href="/markup/pages/dc-case-detail/meetings.php">Дисциплинарное дело детально - Заседения</a></li>
	  <li><a href="/markup/pages/dc-case-detail/docs.php">Дисциплинарное дело детально - Документы</a></li>
	</ul>
  </li>
  <li><a href="/markup/pages/dc-meetings/">Заседания</a>
	<ul>
	  <li><a href="https://aas-markup.twpx.ru/pages/dc-meetings-detail/">Заседание детально - Общие данные</a></li>
	  <li><a href="/markup/pages/dc-meetings-detail/questions.php">Заседание детально - Вопросы</a></li>
	  <li><a href="/markup/pages/dc-meetings-detail/members.php">Заседание детально - Участники</a></li>
	  <li><a href="/markup/pages/dc-meetings-detail/notifications.php">Заседание детально - Уведомления</a></li>
	</ul>
  </li>
  
  <li><a href="/markup/pages/dc-questions/">Реестр вопросов заседания ДК</a>
	<ul>
	  <li><a href="/markup/pages/dc-question-detail/">Вопрос дисциплинарного засеания - Общие данные</a></li>
	</ul>
  </li>
  
  <li><a href="/markup/pages/dc-questions/">Реестр вопросов заседания ДК</a></li>
  <li><a href="https://aas-markup.twpx.ru/pages/dc-detail/">Дисциплинарная комиссия детально</a></li>
  <li><a href="/markup/pages/dc-cases/">Заседание дисциплинарной комиссии</a></li>
</ul>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>