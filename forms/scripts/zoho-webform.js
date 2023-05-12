<script type="text/javascript">
    var Webflow = Webflow || [];
    Webflow.push(function() {
        $('input[name=xnQsjsdp]').val('a4fc072ab2b4a4a1010504add1e0f7091d1bd9f6f255e2bb1dfecbb74ae9ed5b');
        $('input[name=zc_gad]').val('');
        $('input[name=xmIwtLD]').val('b090f17eda6c640da9cd6310269e5ffba641c76e917ae8f33eb2127a50566547');
        $('input[name=actionType]').val('TGVhZHM=');
        //The return URL after the form is submitted
        $('input[name=returnURL]').val('http://mastermindesigns.com');

        //Add things to the form tag for zoho
        $('#zoho-form').attr('accept-charset', 'UTF-8');
        $('#zoho-form').submit(function() {
            javascript: document.charset = "UTF-8";
            return checkMandatory()
        });

        //Check Mandatory Function and vars
        var mndFileds = new Array('First Name', 'Last Name', 'Email');
        var fldLangVal = new Array('First Name', 'Last Name', 'Email');
        var name = '';
        var email = '';

        function checkMandatory() {
            for (i = 0; i < mndFileds.length; i++) {
                var fieldObj = document.forms['WebToLeads1901694000000097035'][mndFileds[i]];
                if (fieldObj) {
                    if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                        if (fieldObj.type == 'file') {
                            alert('Please select a file to upload');
                            fieldObj.focus();
                            return false;
                        }
                        alert(fldLangVal[i] + ' cannot be empty');
                        fieldObj.focus();
                        return false;
                    } else if (fieldObj.nodeName == 'SELECT') {
                        if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                            alert(fldLangVal[i] + ' cannot be none');
                            fieldObj.focus();
                            return false;
                        }
                    } else if (fieldObj.type == 'checkbox') {
                        if (fieldObj.checked == false) {
                            alert('Please accept  ' + fldLangVal[i]);
                            fieldObj.focus();
                            return false;
                        }
                    }
                    try {
                        if (fieldObj.name == 'Last Name') {
                            name = fieldObj.value;
                        }
                    } catch (e) {}
                }
            }
        }
    });
</script>
