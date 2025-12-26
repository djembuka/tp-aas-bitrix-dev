import { defineStore } from 'ui.vue3.pinia';

export const copyBlockStore = defineStore('copy-block-store', {
  state: () => ({
    blocks: [
        {
            title: 'Ссылка на публичное голосование',
            code: 'https://sroaas.ru/api/widget/script.js?ornz=99999999998'
        },
        {
            title: 'Ссылка на публичную страницу результатов',
            code: 'https://sroaas.ru/api/widget/script.js?ornz=99999999998'
        },
        {
            title: 'Скопируйте код виджета',
            code: `
<script>
    (function(w,d,u){
        var s=d.createElement("script");s.async=true;s.src=u+"?"+(Date.now()/60000|0);
        var h=d.getElementsByTagName("script")[0];h.parentNode.insertBefore(s,h);
    })(window,document,"https://corp.2px.ru/upload/crm/site_button/loader_5_bngxvv.js");
</script>
            `
        },
    ]
  })
});