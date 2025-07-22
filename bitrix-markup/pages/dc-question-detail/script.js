window.addEventListener('load', () => {
  //docs
  let docRemoveId;
  $('.b-dc-case-detail__docs .b-docs-block__item .btn-remove').click((e) => {
    e.preventDefault();
    $('#removeDocConsent').modal('show');
    docRemoveId = e.target.data('id');
  });

  if (document.querySelector('#removeDocConsent .btn-danger')) {
    document.querySelector('#removeDocConsent .btn-danger')
      .addEventListener('click', (e) => {
        e.preventDefault();

        if (window.BX) {
          window.BX.ajax
            .runAction(`removeDoc`, {
              data: {
                id: docRemoveId,
              },
            })
            .then(
              () => {
                //res
              },
              (error) => {
                //rej
              }
            );
        }

        $('#removeDocConsent').modal('hide');
      });
  }
});
