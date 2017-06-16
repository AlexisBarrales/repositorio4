

function alertasTotal(titulo, mensaje){
/*      width: 80%;
   height: 200px; 

        margin-left: 10%;
        margin-top:35%;
     */ 
    alerta=document.querySelector(".alerta").style
    setTimeout(function(){  alerta.height="200px"; }, 000);
   setTimeout(function(){  alerta.marginLeft="10%"; }, 100);
     setTimeout(function(){  alerta.marginTop="35%"; }, 200);
    setTimeout(function(){  alerta.width="80%"; }, 300);
    setTimeout(function(){  
document.getElementById('titulo').innerHTML=titulo
    document.getElementById('mensaje').innerHTML=mensaje
}, 400);
    
    

}

/*aqui va index.html*/
function HtmlIndex(nombre){
      var d = document
        correo = d.querySelector('.usuario').value,
        contra = d.querySelector('.pss').value,
        correoBD=localStorage.getItem('Correo'+correo)
        contrasenaBD=localStorage.getItem('Contraseña'+correo)
        nombreBD=localStorage.getItem('Nombre'+correo)  
        
    
        if(correo==correoBD && contra == contrasenaBD){
           
           localStorage.setItem('Sesion', correo);
           location.assign(nombre+'.html');
                
        }
        else{
            
            alert("Inicio","no estan bien")
        }
    
}
/*Aqui va registro.html*/

function cambioHtmlR(nombre){
    var d = document
    var name = d.querySelector('#nombre').value,
        correo = d.querySelector('#correo').value,
        contra = d.querySelector('#contra').value,
        comp = d.querySelector('#comp').value;
    
    if(name != "" &&  correo != "" && contra != "" && comp != ""){
        if(correo.includes("@") && correo.includes(".com")){
            if(!localStorage.getItem('Correo'+correo)) {
                if(contra == comp){
                
                    localStorage.setItem('Nombre'+correo, name);
                    localStorage.setItem('Correo'+correo, correo);
                    localStorage.setItem('Contraseña'+correo, contra);


                    alert("Inicio","Te haz registrado exitosamente");
                    location.assign(nombre+'.html');
                }else{
                    alert("Inicio","La contraseña no coincide");
                }
            }else{
                alert("Inicio","Este usuario ya está registrado")
            }
        }else{
            alert("Inicio","No está ingrsando un correo valido");
        }
    }else{
        alert("Inicio","Hacen falta datos");
    }
    
}

/*
Aqui va toda la funcionalidad de principal.html
 */

/*AIzaSyBqcLkPvQ2z07MtNMkRtIFP3UIHfleXE50*/
    var estado=1;

function cambioHtml(nombre){
    location.assign(nombre+'.html');
    
}
function menu(){
    if(estado==1){
        
    var menu=document.querySelector('.menu')
    menu.style.left=0;

    var linea1= document.getElementsByClassName('linea')[0]
    var linea2= document.getElementsByClassName('linea')[1]
    var linea3= document.getElementsByClassName('linea')[2]
    linea1.classList.add("uno")
    linea2.classList.add("dos")
    linea3.classList.add("tres")

    linea1.style.background="#FFFFFF";
    linea2.style.background="#FFFFFF";
    linea3.style.background="#FFFFFF";
    estado=0;

   /*setTimeout(alerta("hola","mensaje") , 300);*/
    
    }else{
var menu=document.querySelector('.menu')
    menu.style.left='-60%'

    var linea1= document.getElementsByClassName('linea')[0]
    var linea2= document.getElementsByClassName('linea')[1]
    var linea3= document.getElementsByClassName('linea')[2]
    linea1.classList.remove("uno")
    linea2.classList.remove("dos")
    linea3.classList.remove("tres")

    linea1.style.background="#a9a9a9";
    linea2.style.background="#a9a9a9";
    linea3.style.background="#a9a9a9";
        estado=1
    }

}
function GuardarRuta(nombre){
    

    var d = document
        distancia = d.querySelector('#txttotalDistancia').innerHTML;
        nombreR = d.querySelector('#nombreR').value;
        fechaR = d.querySelector('#fechaR').value;
    sesion = localStorage.getItem('Sesion');
    if(!localStorage.getItem("NoR"+sesion)){
    contador=0
    localStorage.setItem("NoR"+sesion, contador);
    }else{
       contador=localStorage.getItem("NoR"+sesion);
        contador++;
        localStorage.setItem("NoR"+sesion, contador);
    }
    if(nombreR != "" && fechaR != "" && distancia != ""){
    
        if(!localStorage.getItem(nombreR+sesion)){
            
            localStorage.setItem("NombreR"+contador+sesion, nombreR);
            localStorage.setItem("Fecha"+sesion+nombreR, fechaR);
            localStorage.setItem("Distancia"+sesion+nombreR, distancia);
            

            
            location.assign(nombre+'.html');
        }else{
            alert("Una ruta con ese nombre ya existe")
        }  
    }else{
        alert("Hacen falta datos")
    }
}



function mostrarR (){
    
    var campo;
    var sesion = localStorage.getItem('Sesion')
    var rutasT = document.getElementById('rutasTotal')
    for (var i = 0; i < localStorage.length; i++) {
        //alert(localStorage.key(i));
        campo = localStorage.key(i);
        if(campo.includes("NombreR") && campo.includes(sesion)){
            var rut = localStorage.getItem(campo);
        
            rutasT.innerHTML += '<option value="">'+rut+'</option>'
        }
    }
}

function fotosG(){
    var ruta = document.getElementById("rutasTotal");
    var rutaS = ruta.options[ruta.selectedIndex].text;
    var sesion = localStorage.getItem('Sesion');
    imagen = document.getElementById('photoGuardada');
    //imgData = getBase64Image(imagen);
    imagen1=localStorage.getItem('imagen1')
    localStorage.setItem("fotoR"+rutaS+sesion, imagen1);
}

function confi(nombre){
    var d = document
    var name = d.querySelector('#nombre').value,
        contra = d.querySelector('#contra').value,
        comp = d.querySelector('#comp').value,
        sesion = localStorage.getItem('Sesion');
    
    if(name != "" && contra != "" && comp != ""){
        if(contra == comp){
            
            localStorage.setItem('Nombre'+sesion, name);
            localStorage.setItem('Contraseña'+sesion, contra);


            alert("Se han guardado tus cambios");
            location.assign(nombre+'.html');
        }else{
            alert("La contraseña no coincide");
        }
    }else{
        alert("Hacen falta datos");
    } 
}
