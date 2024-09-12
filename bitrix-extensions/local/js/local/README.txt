vue-components - компоненты Vue3
vue-apps - приложения Vue3
extensions - небольшие переиспользуемые куски кода или стилей, подключаемые на страницах

Компоненты можно подключать в приложениях и других компонентах, приложения можно выводить на странице.

Для подключения компонента
config.php -> 'rel' => [
		'main.polyfill.core',
		'local.components.control-text',
		'local.components.control-select-dropdown',
	       ],

component.js -> import { ControlText } from 'local.components.control-text';

Для вывода приложения:

<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Реестр дисциплинарных дел");

\Bitrix\Main\UI\Extension::load("local.filter-table");
?>

<div id="dcRegistry"></div>

<!--ответы сервера при разработке markup-->
<script src="/markup/pages/dc-registry/bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcRegistry', {
		'SESSION_ID': '123',
		'USER_ID': '456',
		
		'COLS': ['20%','20%','20%','auto','100px'],
		
		//методы для отправки запросов по API
		'columnsNames': 'twinpx.dc-registry:columnsNames',
		'items': 'twinpx.dc-registry:items',
		'defaultSort': 'twinpx.dc-registry:defaultSort',
		'setDefaultSort': 'twinpx.dc-registry:setDefaultSort',
		'filters': 'twinpx.dc-registry:filters',
		
		'maxCountPerRequest': 3,
	});
	filtertable.run();
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>