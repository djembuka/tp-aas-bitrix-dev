<?
define("NO_KEEP_STATISTIC", "Y");
define("NO_AGENT_STATISTIC", "Y");
$start = microtime(true);
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

// D7
use \Bitrix\Main\Loader;

Loader::includeModule("highloadblock");

const APPEAL_HLFILES = 37;
const APPEAL_HLRESULT = 36;

const APPEAL_IBRESULT = 37;

$dir = __DIR__;

$filePath = '';
$status = "error";
$arError = NULL;

$postFiles = (!empty($_FILES['FILES'])) ? $_FILES['FILES'] : []; //массив с файлами
$postFiels = (!empty($_REQUEST)) ? $_REQUEST : []; //

//проверка статуса формы
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($postFiles)) {

	//для замены
	if ($postFiels['FILE'] != '') {
		unlink($postFiels['FILE']);
	}

	//загрузка
	if ($postFiles['error'] == UPLOAD_ERR_OK) {
		$path = pathinfo($postFiles["name"]); //информацию о пути к файлу
		$ext = $path['extension']; //расширение

		$name = trim($path['filename']) . '.' . $ext; //имя файла
		$translitName = Cutil::translit($name, "ru", ["max_len" => 67, "replace_space" => "_", "replace_other" => "_"]);

		$filePath = $_SERVER["DOCUMENT_ROOT"] . "/markup/upload/tmp/" . $translitName . '_' . mt_rand(10, 99) . '.' . $ext;
		$tmp_name = $postFiles["tmp_name"];
		$is_move = move_uploaded_file($tmp_name, $filePath);

		if ($is_move) {
			//приготовим массив для сохранение файлов
			$status = "success";
		}
	} else {
		$arError = "Ошибка файла";
	}
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST' && $postFiels['DELETE']) {
	unlink($postFiels['FILE']);
	$status = "success";
} else {
	$arError = "Нет обязятельные данные";
}

$arResult['STATUS'] = $status;
$arResult['FILE'] = $filePath;
$arResult['ERROR'] = $arError;

$json = $arResult;

echo \Bitrix\Main\Web\Json::encode($json)
?>

<? //require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?>