
<!--FONT SIZE CALCULATES AND OTHER VARIOUS HELPERS-->

<!--
Base Value 18px (112.5%/1.125em)
1.333rem/23.99px  //Multiplyer Perfect Fourth


Our Guide for creating the REVREBEL look.

H1      .209rem/75.76px	   A Visual Type Scale
H2      3.157rem/56.83px	    A Visual Type Scale
H3      2.369rem/42.63px	  A Visual Type Scale
H4      1.777rem/31.98px  	A Visual Type Scale
H5      1.333rem/23.99px	  A Visual Type Scale
H6      1rem/18.00px	A Visual Type Scale
H7      0.75rem/13.50px	A Visual Type Scale
H8      0.563rem/10.13px	A Visual Type Scale
H9      0.422rem/7.60px	

JUMBO    7.478rem/134.61px
H1       5.61rem/100.98px
H2       4.209rem/75.76px
H3       3.157rem/56.83px
H4       2.369rem/42.63px
H5       1.777rem/31.98px
H6       1.333rem/23.99px
TINY     1rem/18.00px
-->

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
   
<code>   
   <style>
      
      // Change scale
      
      $mod_1: 1.125;
      $mod_2: 1.333;
      
      1rem
      18.00px
      
      // Calculate Modular Scale
      // You don't need to calculate this with Sass 
      // You can use values from http://type-scale.com/
      // Or random values :)
      
      $h1-min: $mod_1 * $mod_1 * $mod_1 * $mod_1 * 1rem;
      $h1-max: $mod_2 * $mod_2 * $mod_2 * $mod_2 * 1rem;
      
      $h2-min: $mod_1 * $mod_1 * $mod_1 * 1rem;
      $h2-max: $mod_2 * $mod_2 * $mod_2 * 1rem;
      
      $h3-min: $mod_1 * $mod_1 * 1rem;
      $h3-max: $mod_2 * $mod_2 * 1rem;
      
      $h4-min: $mod_1 * 1rem;
      $h4-max: $mod_2 * 1rem;
            
      $h4-min: 2.369rem
      $h4-max:37.90px
            
      $h5-min: 1rem;
      $h5-max: 1rem;
            
      $h6-min: (1rem / $mod_1);
      $h6-max: (1rem / $mod_2);
      
      // Apply fluid type mixin
      
      .mod_scale_fluid{
         h1{ 
            @include fluid-type(font-size,37.5rem, 80rem, $h1-min, $h1-max);
         }
         
         h2{ 
            @include fluid-type(font-size,37.5rem, 80rem, $h2-min, $h2-max);
         }
         
         h3{ 
            @include fluid-type(font-size,37.5rem, 80rem, $h3-min, $h3-max);
         }
         
         h4{ 
            @include fluid-type(font-size,37.5rem, 80rem, $h4-min, $h4-max);
         }
         
         h5{ 
            @include fluid-type(font-size,37.5rem, 80rem, $h5-min, $h5-max);
         }
         
         h6{ 
            @include fluid-type(font-size, 37.5rem, 80rem, $h6-min, $h6-max);
         }
         
      }
      
   </style>
   
</code>