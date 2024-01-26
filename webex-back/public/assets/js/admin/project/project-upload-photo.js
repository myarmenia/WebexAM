document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const fileInput = document.querySelector('.account-file-input');
    const uploadedImagesContainer = document.getElementById('uploadedImagesContainer');
    const uploadedImages = []; 

    fileInput.onchange = () => {
      if (fileInput.files.length > 0) {
        if (fileInput.files.length > 4) {
          alert('Вы можете загрузить только 4 файла.');
          this.preventDefault();
        }
      
        uploadedImages.length = 0;

        // uploadedImagesContainer.innerHTML = '';

        for (let i = 0; i < Math.min(fileInput.files.length, 4); i++) {
          const imageData = {
            url: window.URL.createObjectURL(fileInput.files[i]),
            fileName: fileInput.files[i].name
          };
          console.log(fileInput.files, 5555555555555)
          uploadedImages.push(imageData);

          const imageContainer = document.createElement('div');
          imageContainer.className = 'uploaded-image-container-div mx-2';

          const image = document.createElement('img');
          image.src = imageData.url;
          image.alt = 'uploaded-image';
          image.className = 'd-block rounded uploaded-image uploaded-photo-project';
          imageContainer.appendChild(image);

          const removeButton = document.createElement('button');
          removeButton.type = 'button';
          removeButton.className = 'btn btn-outline-danger remove_file btn-sm mt-2';
          removeButton.id = fileInput.files[i].lastModified;
          removeButton.textContent = 'Remove';

          // removeButton.onclick = () => {

          //   const index = uploadedImages.indexOf(imageData);
          //   let fileInputtest = document.querySelector('.account-file-input');

          //   if (index !== -1) {
          //     uploadedImages.splice(index, 1);
          //   }

          //   // document.querySelector('.account-file-input').files.splice(index, 1);

          //   uploadedImagesContainer.removeChild(imageContainer);
          // };

          imageContainer.appendChild(removeButton);

          uploadedImagesContainer.appendChild(imageContainer);
        }
        document.querySelectorAll('.remove_file').forEach((btn) => btn.addEventListener('click', removeFile))

      }
    };
  })();


  const removeFile = (e) => {
              let dt = new DataTransfer();
              let key = e.target.id
              let delfile = document.querySelector('.account-file-input')
              console.log(delfile)
              for (let file of delfile.files) {
          
            dt.items.add(file);
           }
          
           delfile.files = dt.files;
          
              for(let i = 0; i < dt.files.length; i++){
             if(key == dt.files[i].lastModified){
              dt.items.remove(i);
              continue;
             }
           }
              delfile.files = dt.files
                  console.log(delfile.files)
          
              e.target.parentNode.remove()
          }
});
