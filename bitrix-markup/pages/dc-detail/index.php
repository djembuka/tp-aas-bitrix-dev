<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Дисциплинарная комиссия");

\Bitrix\Main\UI\Extension::load("local.vue-apps.table");
?>

<div class="b-num-blocks"><a class="b-num-block b-num-block--counter" href=""><span class="b-num-block__data"><i>Заседаний</i><b>185</b></span></a><a class="b-num-block b-num-block--counter" href=""><span class="b-num-block__data"><i>Вопросов рассмотрено</i><b>4&nbsp;871</b></span></a><a class="b-num-block b-num-block--counter" href=""><span class="b-num-block__data"><i>Дел</i><b>1&nbsp;789</b></span></a></div>

<hr class="hr--sl">
<div class="d-lg-flex d-md-flex justify-content-between align-items-center">
  <h2 class="mb-0">Ближайшее заседание</h2>
  <hr class="hr--xs d-md-none d-lg-none d-xl-none"><a class="btn btn-secondary btn-md" href="">Создать заседание</a>
</div>
<hr>
<div class="b-meeting-item"> 
  <div class="b-meeting-item__date"><b>26 августа 2024</b><span>18:00 (мск)</span></div>
  <div class="b-meeting-item__title"><a href="">Заседание Дисциплинарной комиссии 151</a></div>
  <div class="b-meeting-item__tags"><span class="label-blue"><span>Назначено</span></span><span>Очное</span><span>Вопросов: 86</span></div>
</div>

<script src="/markup/pages/dc-detail/bx.ajax.runAction.js"></script>

<h2>Последние заседания</h2>

<hr>

<div id="dcDetailCases"></div>

<script>
(() => {
  const table = new BX.Table('#dcDetailCases', {
    'SESSION_ID': '123',
    'SIGNED_PARAMETERS': 'signedParameters',
    
    'TABLE_COLS': ['20%','20%','auto','20%','130px'],
    
    'columnsNames': 'twinpx:columnsNames',
    'items': 'twinpx:items',
  });
  table.run();
})();
</script>

<hr>
<a class="btn btn-serve btn-md" href="/pages/dc-cases/">Все заседания</a>

<hr class="hr--xl">

<h2>Ваши возможности</h2>

<hr class="hr--sl">
<div class="b-appeal-wrapper">
  <div class="b-appeal-item">
    <div class="b-appeal-title">Создать дело</div>
    <div class="b-appeal-text">Вы можете создать новое дисциплинарное дело.</div><a class="btn btn-secondary btn-md" href="">Создать дело</a>
  </div>
  <div class="b-appeal-item">
    <div class="b-appeal-title">Создать заседание</div>
    <div class="b-appeal-text">Вы можете создать новое заседание дисциплинарной комиссии.</div><a class="btn btn-secondary btn-md" href="">Создать заседание</a>
  </div>
  <div class="b-appeal-item">
    <div class="b-appeal-title">Техническая поддержа</div>
    <div class="b-appeal-text">Если у вас возникла проблема, напишите в техническую поддержку о вашей проблеме</div><a class="btn btn-secondary btn-md" href="">Написать в поддержку</a>
  </div>
</div>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>