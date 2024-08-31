<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Markup");
?>

<h2>Extensions</h2>
<ul>
  <li><a href="/markup/extensions/">Extensions</a></li>
  <li><a href="/markup/vue/bitrix-vue-demo/">Bitrix Vue demo</a></li>
  <li><a href="/markup/vue/filter-table/">Filter table</a></li>
</ul>

<h2>Страницы</h2>

<h3>Дисциплинарная комиссия</h3>
<ul>
  <li><a href="/markup/pages/dc-registry/">Реестр дисциплинарных дел</a>
	<ul>
	  <li><a href="https://aas-markup.twpx.ru/pages/dc-case-detail/">Дисциплинарное дело детально - Общие данные</a></li>
	  <li><a href="https://aas-markup.twpx.ru/pages/dc-case-detail/meetings.html">Дисциплинарное дело детально - Заседения</a></li>
	  <li><a href="https://aas-markup.twpx.ru/pages/dc-case-detail/docs.html">Дисциплинарное дело детально - Документы</a></li>
	</ul>
  </li>
  <li><a href="/markup/pages/dc-meetings/">Заседания</a>
	<ul>
	  <li><a href="https://aas-markup.twpx.ru/pages/dc-meetings-detail/">Заседание детально - Общие данные</a></li>
	  <li><a href="https://aas-markup.twpx.ru/pages/dc-meetings-detail/questions.html">Заседание детально - Вопросы</a></li>
	  <li><a href="https://aas-markup.twpx.ru/pages/dc-meetings-detail/members.html">Заседание детально - Участники</a></li>
	  <li><a href="/markup/pages/dc-meetings-detail/notifications.php">Заседание детально - Уведомления</a></li>
	</ul>
  </li>
  <li><a href="/markup/pages/dc-questions/">Реестр вопросов заседания ДК</a></li>
  <li><a href="/markup/pages/dc-detail/">Дисциплинарная комиссия детально</a></li>
  <li><a href="/markup/pages/dc-cases/">Заседание дисциплинарной комиссии</a></li>
</ul>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>