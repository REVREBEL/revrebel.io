
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
