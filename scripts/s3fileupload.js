
<!-- S3 FILE UPLOADS -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        document.querySelectorAll('input[ms-code-s3-uploader]').forEach(input => {
            input.addEventListener('change', function() {
                if (this.files.length > 0) {
                    const file = this.files[0];
                    const uuid = generateUUID();
                    const extension = file.name.split('.').pop();
                    const newFileName = `${uuid}.${extension}`;
                    const wrapper = this.closest('div[ms-code-s3-wrapper]');
                    const s3FileInput = wrapper.querySelector('input[ms-code-s3-file]');

                    s3FileInput.value = s3FileInput.getAttribute('ms-code-s3-file') + encodeURIComponent(newFileName);

                    const apiGatewayUrl = wrapper.getAttribute('ms-code-s3-wrapper').replace('${encodeURIComponent(fileName)}', encodeURIComponent(newFileName));

                    fetch(apiGatewayUrl, {
                        method: 'PUT',
                        body: file,
                        headers: { 'Content-Type': file.type }
                    })
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error(`Upload failed with status: ${response.status}`);
                        }
                        console.log('File uploaded successfully:', newFileName);
                    })
                    .catch(error => {
                        console.error('Upload error:', error);
                        alert('Upload failed.');
                    });
                }
            });
        });

        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(event) {
                const s3Inputs = Array.from(form.querySelectorAll('input[ms-code-s3-file]'));
                const allUrlsSet = s3Inputs.every(input => input.value);

                if (!allUrlsSet) {
                    event.preventDefault();
                    alert('Please wait for all files to finish uploading before submitting.');
                }
            });
        });
    });
</script>





<!--
Resources
On this page, you will find any code snippets or longer things from the video. They've been put here so that you can copy + paste them!

Bucket policy
Add this code to your S3 bucket policy.
-->
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Sid": "PublicReadGetObject",
           "Effect": "Allow",
           "Principal": "*",
           "Action": "s3:GetObject",
           "Resource": "arn:aws:s3:::v3-ms-bucket/*"
       }
   ]
}


    
<!--
API Mapping Template
Add this code to your mapping template for the "OPTION" method
-->
#set($origin = $input.params("Origin"))
#set($headers = $input.params("Access-Control-Request-Headers"))
{
 "statusCode": 200,
 "headers": {
   "Access-Control-Allow-Origin": "$origin",
   "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
   "Access-Control-Allow-Headers": "$headers",
   "Access-Control-Max-Age": "86400"
 },
 "body": ""
}




<!--
Access-Control-Allow-Headers Value
Use this value for your header to prevent CORS errors.
-->
'Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token'

    
<!--
Access-Control-Allow-Methods Value
Use this value for your header to prevent CORS errors.
-->
'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT'

    
    
<!--
ms-code-s3-wrapper Value
Use this template for your attribute value. It will not work as-is. You need your own invoke URL and bucket name.
-->
https://{YOURINVOKEURL}/{YOURSTAGE}/{YOURS3BUCKET}/${encodeURIComponent(fileName)}
