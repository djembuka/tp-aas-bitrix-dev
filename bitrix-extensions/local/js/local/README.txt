vue-components - ���������� Vue3
vue-apps - ���������� Vue3
extensions - ��������� ���������������� ����� ���� ��� ������, ������������ �� ���������

���������� ����� ���������� � ����������� � ������ �����������, ���������� ����� �������� �� ��������.

��� ����������� ����������
config.php -> 'rel' => [
		'main.polyfill.core',
		'local.vue-components.control-text',
		'local.vue-components.control-select-dropdown',
	       ],

component.js -> import { ControlText } from 'local.vue-components.control-text';

��� ������ ����������:

<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("������ �������������� ���");

\Bitrix\Main\UI\Extension::load("local.filter-table");
?>

<div id="dcRegistry"></div>

<!--������ ������� ��� ���������� markup-->
<script src="/markup/pages/dc-registry/bx.ajax.runAction.js"></script>

<script>
	const filtertable = new BX.FilterTable('#dcRegistry', {
		'SESSION_ID': '123',
		'USER_ID': '456',
		
		'COLS': ['20%','20%','20%','auto','100px'],
		
		//������ ��� �������� �������� �� API
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