<script type="text/javascript">
  $('form[action^="https://forms.zohopublic.com"]').each(function (i, el) {
    form = $(el);
    form.submit(function (e) {
      e.preventDefault();
      form = $(e.target);
      action = form.attr('action') + '.json';
      $.ajax({
        url: action,
        method: "POST",
        name: "form",
				onSubmit:'javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();',
        data: form.serialize(),
        enctype: "multipart/form-data",
        contentType: "application/json",
        dataType: "json",
        "accept-charset": "UTF-8",
        "zf_referrer_name": "website/revenue-toolkit-form",
        crossorigin: "anonymous",
        id: "form",
       "zf_referrer_name": "website/revenue-toolkiy-form"
        success: function (data) {
          if (data.success) {
            parent = $(form.parent());
            parent.children('form').css('display', 'none');
            parent.children('.w-form-done').css('display', 'block');
          } else {
            console.log(data);
            parent.find('.w-form-fail').css('display', 'block');
          }
        },
        error: function () {
          parent.find('.w-form-fail').css('display', 'block');
        }
      });
    });
  });
</script>
