<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Дисциплинарное дело 150");

\Bitrix\Main\UI\Extension::load("local.vue-apps.table");
\Bitrix\Main\UI\Extension::load("local.extensions.tabs-menu");
\Bitrix\Main\UI\Extension::load("local.extensions.copy-to-clipboard");
?>

<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>

<div class="ph-content">

  <div class="b-twpx-tabs-menu">
    <div class="b-twpx-tabs-menu__wrapper">
      <a href="/markup/pages/dc-case-detail/">Общие данные</a>
      <a href="/markup/pages/dc-case-detail/meetings.php" class="b-twpx-tabs--active">Заседания</a>
      <a href="https://aas-markup.twpx.ru/pages/dc-case-detail/docs.html">Документы</a>
    </div>
  </div>
  <hr>
  <div class="b-dc-case-detail__block">
    <hr>
    <div class="b-dc-case-detail-meetings">
      <h3 class="mt-0">Заседания</h3>
      <style>
        #dcCaseDetailCasesPh {
          --aas-placeholder-color: #f2f2f2;
        }

        #dcCaseDetailCasesPh {
          display: grid;
          grid-template-columns: calc(50% - 16px) calc(50% - 16px);
          grid-template-rows: 80px;
          grid-auto-rows: 32px;
          row-gap: 16px;
          column-gap: 32px;
        }

        #dcCaseDetailCasesPh div {
          border-radius: 4px;
          background-color: var(--aas-placeholder-color);

          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 49%,
            #ffffff88 50%,
            #ffffff88 50%,
            transparent 51%,
            transparent 100%
          );
          background-size: 600% 600%;
          animation: table-gradient 4s linear infinite;

          background-attachment: fixed;
        }

        #dcCaseDetailCasesPh div:first-child {
          grid-column: span 2;
        }

        @keyframes table-gradient {
          100% {
            background-position: 200%;
          }
        }
      </style>
      <div id="dcCaseDetailCases">
        <div id="dcCaseDetailCasesPh">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <script src="/markup/pages/dc-case-detail/bx.ajax.runAction.js"></script>
      <script>
      (() => {
        const table = new BX.Table('#dcCaseDetailCases', {
          'SESSION_ID': '123',
          'SIGNED_PARAMETERS': 'signedParameters',
          
          'TABLE_COLS': ['150px','100px','150px','100px','auto','130px'],
          
          'columnsNames': 'twinpx:columnsNames:cases',
          'items': 'twinpx:items:cases',
          
          'maxCountPerRequest': 5,
        });
        table.run();
      })();
      </script>
    </div>
  </div>
</div>
            

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>