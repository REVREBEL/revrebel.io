
<!-- PHONE NUMBER INPUTS (WITHOUT IP LOOKUP) -->
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"> </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"> </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"> </script>
<script>
  $(document).ready(function() {
    $('input[ms-code-phone-number]').each(function() {
      var input = this;
      var preferredCountries = $(input).attr('ms-code-phone-number').split(',');

      var iti = window.intlTelInput(input, {
        preferredCountries: preferredCountries,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
      });

      input.addEventListener('change', formatPhoneNumber);
      input.addEventListener('keyup', formatPhoneNumber);

      function formatPhoneNumber() {
        var formattedNumber = iti.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);
        input.value = formattedNumber;
      }

      var form = $(input).closest('form');
      form.submit(function() {
        var formattedNumber = iti.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);
        input.value = formattedNumber;
      });
    });
  });
</script>
