
var contacto= document.getElementById("contacto")

function mostrar(){
    if(contacto.style.display=="none"){
        contacto.style.display="block"
    } else{
        contacto.style.display="none"
    }
   

}

var form=document.getElementById("formu")

form.addEventListener("submit", function(event){
    alert("Su solicitud fue enviada con éxito, a la brevedad nos comunicaremos. Muchas gracias!")
   
})