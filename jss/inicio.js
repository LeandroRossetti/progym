var titulo;

titulo=document.getElementById("textUsuario");
titulo.innerHTML="Bienvenido  "+sessionStorage.getItem("user");

var intro = document.getElementById('textUsuario');

if (sessionStorage.getItem("user")==null){
    intro.style.backgroundColor = '#FF00FF';
}




