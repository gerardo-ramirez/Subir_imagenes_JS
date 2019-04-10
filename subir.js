const imgPreview= document.getElementById('img-preview');
const imgUploader = document.getElementById('img-uploader');
 const imgBar = document.getElementById('bar');


//api donde subir:

const Cloud_url = 'https://api.cloudinary.com/v1_1/drulzi4ux/image/upload';

//contraseña para subir 

const id_upload ='xj82t0fz'

//Utilizamos el atributo change cuando seleccionamos una imagen .
imgUploader.addEventListener('change', async (e)=>{
    //obtenemos el dato en el objeto e.target.files[0];
    const file = e.target.files[0];
    //creamos un objeto formulario:
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset',id_upload);

  const res= await axios.post(Cloud_url, formData, {
       headers:{
           'Content-Type': 'multipart/form-data'
       },
       //metodos de axios
       onUploadProgress(e){
        //pasar la carga de imagen a porcentaje: 
       const progress2= Math.round((e.loaded * 100) / e.total);
        const progress = (e.loaded * 100) / e.total;
        imgBar.setAttribute('value', progress);
       }
   });
    //console.log(res);
    imgPreview.src = res.data.secure_url;
});