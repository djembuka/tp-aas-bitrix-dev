<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Extensions");

Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");
Bitrix\Main\UI\Extension::load("local.extensions.copy-to-clipboard");
?>

<h3>Tabs menu</h3>

<div class="b-tabs-menu">
  <div class="b-tabs-menu__wrapper">
	<a href="/pages/dc-meetings-detail/" class="active">Общие данные</a>
	<a href="/pages/dc-meetings-detail/questions.html">Вопросы</a>
	<a href="/pages/dc-meetings-detail/members.html" class="in">Участники</a>
	<a href="/pages/dc-meetings-detail/notifications.html">Уведомления</a>
  </div>
</div>

<hr>

<code>Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");</code>

<hr>

<pre>
&lt;div class="b-tabs-menu"&gt;
  &lt;div class="b-tabs-menu__wrapper"&gt;
	&lt;a href="/pages/dc-meetings-detail/" class="active"&gt;Общие данные&lt;/a&gt;
	&lt;a href="/pages/dc-meetings-detail/questions.html"&gt;Вопросы&lt;/a&gt;
	&lt;a href="/pages/dc-meetings-detail/members.html" class="in"&gt;Участники&lt;/a&gt;
	&lt;a href="/pages/dc-meetings-detail/notifications.html"&gt;Уведомления&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3>Copy to clipboard</h3>

<div class="b-copy">Нажми, чтобы скопировать</div>

<hr>

<code>Bitrix\Main\UI\Extension::load("local.extensions.copy-to-clipboard");</code>

<hr>

<pre>
&lt;div class="b-copy"&gt;Нажми, чтобы скопировать&lt;/div&gt;
</pre>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>