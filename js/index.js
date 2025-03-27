const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendEmail);

const serviceId = 'service_ltx52u7';
const templateId = 'template_x2ukv09';
const apikey = 'sLHm1TzvrGbIhmLhi';


function sendEmail(event){
event.preventDefault()
emailjs.init(serviceId)
emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
.then( result =>Swal.fire({
    title: "Su mensaje ha sido enviado!",
    icon: "success",
    draggable: true
  }))
  .catch( error=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
       
      });

  })

}