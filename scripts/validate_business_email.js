What the code does:
When a user clicks the button with the `#btnSubmit` ID the verification function executes.
Takes the variable email from the value of the field with the `#email` ID and compares it with the string from the variable reg.
If no match - do nothing and continue with form submit.
Any other result pops an alert with the text: "Please Enter Business Email Address".
* Be careful - ID's are case sensitive!
‍
Add the next code before the </body> tag

<code>
<script>
 $(document).ready(function(e) {
   $('#btnSubmit').click(function() {
‍
     var email = $('#email').val();
     var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
     
     if (reg.test(email)) {
       return 0;
     } else {
       $('.error-div').fadeIn().delay(3000).fadeOut('slow');
       return false;
     }
   });
 });
</script>
</code>


Copy

Now add a DIV with a classname .error-div and the "Please Enter Business Email Address" text in it. Place the DIV wherever you want in the document.
Hide the div with display:none.
‍
I have shortened the free email list in this code snippet, so it will look better...
You can add or remove any email domain you desire. Keep it in this format:
`(?!any-domain.com)`
For example:
(?!gmail.com)
(?!yahoo.com)
(?!hotmail.com)
‍
Here is the full list I use:
<code>
   (?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!aol.com)(?!hotmail.co.uk)(?!hotmail.fr)(?!msn.com)(?!yahoo.fr)(?!wanadoo.fr)(?!orange.fr)(?!comcast.net)(?!yahoo.co.uk)(?!yahoo.com.br)(?!yahoo.co.in)(?!live.com)(?!rediffmail.com)(?!free.fr)(?!gmx.de)(?!web.de)(?!yandex.ru)(?!ymail.com)(?!libero.it)(?!outlook.com)(?!uol.com.br)(?!bol.com.br)(?!mail.ru)(?!cox.net)(?!hotmail.it)(?!sbcglobal.net)(?!sfr.fr)(?!live.fr)(?!verizon.net)(?!live.co.uk)(?!googlemail.com)(?!yahoo.es)(?!ig.com.br)(?!live.nl)(?!bigpond.com)(?!terra.com.br)(?!yahoo.it)(?!neuf.fr)(?!yahoo.de)(?!alice.it)(?!rocketmail.com)(?!att.net)(?!laposte.net)(?!facebook.com)(?!bellsouth.net)(?!yahoo.in)(?!hotmail.es)(?!charter.net)(?!yahoo.ca)(?!yahoo.com.au)(?!rambler.ru)(?!hotmail.de)(?!tiscali.it)(?!shaw.ca)(?!yahoo.co.jp)(?!sky.com)(?!earthlink.net)(?!optonline.net)(?!freenet.de)(?!t-online.de)(?!aliceadsl.fr)(?!virgilio.it)(?!home.nl)(?!qq.com)(?!telenet.be)(?!me.com)(?!yahoo.com.ar)(?!tiscali.co.uk)(?!yahoo.com.mx)(?!voila.fr)(?!gmx.net)(?!mail.com)(?!planet.nl)(?!tin.it)(?!live.it)(?!ntlworld.com)(?!arcor.de)(?!yahoo.co.id)(?!frontiernet.net)(?!hetnet.nl)(?!live.com.au)(?!yahoo.com.sg)(?!zonnet.nl)(?!club-internet.fr)(?!juno.com)(?!optusnet.com.au)(?!blueyonder.co.uk)(?!bluewin.ch)(?!skynet.be)(?!sympatico.ca)(?!windstream.net)(?!mac.com)(?!centurytel.net)(?!chello.nl)(?!live.ca)(?!aim.com)(?!bigpond.net.au)
</code>

All together:

<code>
   <style>
      
      body{ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
      
   </style>
   
   
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700;800;900&family=Khand:wght@300;400;500;600;700&family=Sarabun:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
   
   
   <!-- Disable Scroll Script --><script>var Webflow = Webflow || [];Webflow.push(function () { var $body = $(document.body); var scrollPosition = 0;
      $('[scroll="both"]').on('click', function () { if ($body.css('overflow') !== 'hidden') { var oldWidth = $body.innerWidth(); scrollPosition = window.pageYOffset; $body.css('overflow', 'hidden'); $body.css('position', 'fixed'); $body.css('top', `-${scrollPosition}px`); $body.width(oldWidth); } else { $body.css('overflow', ''); $body.css('position', ''); $body.css('top', ''); $body.width(''); $(window).scrollTop(scrollPosition); } });});</script>
   
   
   /* Style for the error text below input */label.error {color: red;font-size: 12px;font-weight: 400;margin-top: 0px;}/* Style for the error state of input */.w-input.error {border-color: red;}
   
   
   <script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js"></script>
   <script>var $form = $("#wf-form-Kickoff-Form");$.validator.addMethod("letters", function(value, element) { return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);});$form.validate({ rules: { contactname: { required: true, minlength: 3, letters: true }, email: { required: true, email: true }, }, messages: { contactname: "Please specify your name", youremail: "Please specify a valid email address", }});</script>
   
   <div id="ajaxContent"></div><script> var Webflow = Webflow || []; Webflow.push(function() { $.get('https://raw.githubusercontent.com/revrebel/revrebel.io/master/icons.html', function(data) { $('#ajaxContent').append(data); }); }); </script>
   
</code>
   



All Together with extra domains

<code>
   
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700;800;900&family=Khand:wght@300;400;500;600;700&family=Sarabun:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
   
   
   <!-- Disable Scroll Script --><script>var Webflow = Webflow || [];Webflow.push(function () { var $body = $(document.body); var scrollPosition = 0;
      $('[scroll="both"]').on('click', function () { if ($body.css('overflow') !== 'hidden') { var oldWidth = $body.innerWidth(); scrollPosition = window.pageYOffset; $body.css('overflow', 'hidden'); $body.css('position', 'fixed'); $body.css('top', `-${scrollPosition}px`); $body.width(oldWidth); } else { $body.css('overflow', ''); $body.css('position', ''); $body.css('top', ''); $body.width(''); $(window).scrollTop(scrollPosition); } });});</script>
   
   
   /* Style for the error text below input */label.error {color: red;font-size: 12px;font-weight: 400;margin-top: 0px;}/* Style for the error state of input */.w-input.error {border-color: red;}
   
   
   <script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js"></script>
   <script>var $form = $("#wf-form-Kickoff-Form");$.validator.addMethod("letters", function(value, element) { return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);});$form.validate({ rules: { contactname: { required: true, minlength: 3, letters: true }, email: { required: true, email: true }, }, messages: { contactname: "Please specify your name", youremail: "Please specify a valid email address", }});</script>
   
   <div id="ajaxContent"></div><script> var Webflow = Webflow || []; Webflow.push(function() { $.get('https://raw.githubusercontent.com/revrebel/revrebel.io/master/icons.html', function(data) { $('#ajaxContent').append(data); }); }); </script>
   
   
   
</code>