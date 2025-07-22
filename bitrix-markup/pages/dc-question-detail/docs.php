<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Дисциплинарное дело 150");

\Bitrix\Main\UI\Extension::load("local.vue-apps.table");
\Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");
\Bitrix\Main\UI\Extension::load("local.extensions.copy-to-clipboard");
?>

<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>

<script>
const formadddeletedocs = new BX.FormAddDeleteDocs('#formAddDeleteDocs', {
    "sessid": "fb961889a116870610e26550b61eaaca",
    "signedParameters": "",
    "id": 19139,
    "type": 89,
    "actions": {
        "getFiles": [
            "twinpx:disciplinar",
            "getFiles"
        ],
        "uploadFile": [
            "twinpx:disciplinar",
            "uploadFile"
        ],
        "removeFile": [
            "twinpx:disciplinar",
            "removeFile"
        ]
    },
    "lang": {
        "docsHeading": "Файлы заседания",
        "formHeading": "Добавление файла",
        "formText": "Каждый файл или архив загружается отдельно, вы сможете удалить файл после загрузки.",
        "formNote": "Выберите файл, добавьте его и сохраните.",
        "formButton": "Сохранить",
        "modalHeading": "Вы удаляете файл",
        "modalText": "Вы удаляете файл",
        "modalYes": "Удалить",
        "modalNo": "Отменить",
        "noDocsHeading": "Нет загруженных файлов"
    },
    "uploadForm": true
});
formadddeletedocs.run();
</script>

<div class="b-dc-case-detail__docs">
  <h3 class="mt-0">Документы</h3>
  <p>Документы дисциплинарного дела. Создаются сотрудником СРО ААС и доступны только членам дисциплинарной комиссии.
    <h3>Файлы заседания</h3>
    <div class="b-dc-case-detail__docs__files">
      <div class="b-docs-block__item b-docs-block__item--button b-docs-block__item--32x44 p-16 bg-fa" href="/pages/news/">
        <div class="b-docs-block__body"><a class="b-docs-block__icon" href="/pages/news/" style="background-image: url( '/template/images/pdf.svg' );"></a><span class="b-docs-block__text"><a href="/pages/news/"><b>Протокол заседания дисицплинарной комиссии 234</b></a><span class="b-docs-block__data"><span>654 Кб .doc</span><span>Дата публикации: 15 января 2020</span><span>Автор: Азарянц Ашот Александрович</span></span></span>
          <button class="btn-remove" data-id="123">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.251" height="20" viewBox="0 0 16.251 20">
              <path d="M24.7,11.1H21.264v-.626A1.875,1.875,0,0,0,19.39,8.6h-2.5a1.875,1.875,0,0,0-1.874,1.874V11.1H11.576a1.562,1.562,0,0,0-1.561,1.563v1.25a.624.624,0,0,0,.624.624h15a.625.625,0,0,0,.626-.624v-1.25A1.563,1.563,0,0,0,24.7,11.1Zm-8.438-.626a.625.625,0,0,1,.624-.624h2.5a.625.625,0,0,1,.624.624V11.1h-3.75Z" transform="translate(-10.015 -8.601)"></path>
              <path d="M10.941,13.909a.2.2,0,0,0-.2.2l.516,10.822a1.873,1.873,0,0,0,1.873,1.786h9.492A1.873,1.873,0,0,0,24.5,24.935l.516-10.822a.2.2,0,0,0-.2-.2Zm9.44,1.561a.625.625,0,0,1,1.25,0V23.6a.625.625,0,1,1-1.25,0Zm-3.126,0a.625.625,0,0,1,1.25,0V23.6a.625.625,0,1,1-1.25,0Zm-3.126,0a.625.625,0,0,1,1.25,0V23.6a.625.625,0,1,1-1.25,0Z" transform="translate(-9.823 -6.721)"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="b-docs-block__item b-docs-block__item--button b-docs-block__item--32x44 p-16 bg-fa" href="/pages/news/">
        <div class="b-docs-block__body"><a class="b-docs-block__icon" href="/pages/news/" style="background-image: url( '/template/images/pdf.svg' );"></a><span class="b-docs-block__text"><a href="/pages/news/"><b>Протокол заседания дисицплинарной комиссии 234</b></a><span class="b-docs-block__data"><span>654 Кб .doc</span><span>Дата публикации: 15 января 2020</span><span>Автор: Азарянц Ашот Александрович</span></span></span>
          <button class="btn-remove" data-id="123">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.251" height="20" viewBox="0 0 16.251 20">
              <path d="M24.7,11.1H21.264v-.626A1.875,1.875,0,0,0,19.39,8.6h-2.5a1.875,1.875,0,0,0-1.874,1.874V11.1H11.576a1.562,1.562,0,0,0-1.561,1.563v1.25a.624.624,0,0,0,.624.624h15a.625.625,0,0,0,.626-.624v-1.25A1.563,1.563,0,0,0,24.7,11.1Zm-8.438-.626a.625.625,0,0,1,.624-.624h2.5a.625.625,0,0,1,.624.624V11.1h-3.75Z" transform="translate(-10.015 -8.601)"></path>
              <path d="M10.941,13.909a.2.2,0,0,0-.2.2l.516,10.822a1.873,1.873,0,0,0,1.873,1.786h9.492A1.873,1.873,0,0,0,24.5,24.935l.516-10.822a.2.2,0,0,0-.2-.2Zm9.44,1.561a.625.625,0,0,1,1.25,0V23.6a.625.625,0,1,1-1.25,0Zm-3.126,0a.625.625,0,0,1,1.25,0V23.6a.625.625,0,1,1-1.25,0Zm-3.126,0a.625.625,0,0,1,1.25,0V23.6a.625.625,0,1,1-1.25,0Z" transform="translate(-9.823 -6.721)"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="b-docs-block__item b-docs-block__item--button b-docs-block__item--32x44 p-16 bg-fa" href="/pages/news/">
        <div class="b-docs-block__body"><a class="b-docs-block__icon" href="/pages/news/" style="background-image: url( '/template/images/pdf.svg' );"></a><span class="b-docs-block__text"><a href="/pages/news/"><b>Протокол заседания дисицплинарной комиссии 234</b></a><span class="b-docs-block__data"><span>654 Кб .doc</span><span>Дата публикации: 15 января 2020</span><span>Автор: Азарянц Ашот Александрович</span></span></span>
          <button class="btn-remove" data-id="123">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.251" height="20" viewBox="0 0 16.251 20">
              <path d="M24.7,11.1H21.264v-.626A1.875,1.875,0,0,0,19.39,8.6h-2.5a1.875,1.875,0,0,0-1.874,1.874V11.1H11.576a1.562,1.562,0,0,0-1.561,1.563v1.25a.624.624,0,0,0,.624.624h15a.625.625,0,0,0,.626-.624v-1.25A1.563,1.563,0,0,0,24.7,11.1Zm-8.438-.626a.625.625,0,0,1,.624-.624h2.5a.625.625,0,0,1,.624.624V11.1h-3.75Z" transform="translate(-10.015 -8.601)"></path>
              <path d="M10.941,13.909a.2.2,0,0,0-.2.2l.516,10.822a1.873,1.873,0,0,0,1.873,1.786h9.492A1.873,1.873,0,0,0,24.5,24.935l.516-10.822a.2.2,0,0,0-.2-.2Zm9.44,1.561a.625.625,0,0,1,1.25,0V23.6a.625.625,0,1,1-1.25,0Zm-3.126,0a.625.625,0,0,1,1.25,0V23.6a.625.625,0,1,1-1.25,0Zm-3.126,0a.625.625,0,0,1,1.25,0V23.6a.625.625,0,1,1-1.25,0Z" transform="translate(-9.823 -6.721)"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <hr class="hr--sl"/>
    <!-- start /components/dc.case.detail.docs/-->
    <script src="/components/dc.case.detail.docs/bx.ajax.runAction.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <script src="https://unpkg.com/vuex@3"></script>
    <div id="dcCaseDetailDocs"></div>
    <!-- end /components/dc.case.detail.docs/-->
  </p>
  <div class="modal--text modal fade" id="removeDocConsent" tabindex="-1" aria-labelledby="removeDocConsentLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <button class="close" type="button" data-dismiss="modal" aria-label="Close" style="background-image: url( '/template/images/cancel.svg' );"></button>
        <div class="modal-body">
          <h3>Вы удаляете файл</h3>
          <p>Вы удаляете файл <b>ОченьДлинноеНазваниеФайлаКоторыйУдаляют.pdf</b></p>
          <div class="text-center modal-buttons">
            <button class="btn btn-light btn-lg" data-dismiss="modal">Отменить</button>
            <button class="btn btn-danger btn-lg">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>