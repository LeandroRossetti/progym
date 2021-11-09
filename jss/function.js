function obtenerFecha(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //Enero es 0
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

resultado= dd + '/' + mm + '/' + yyyy;

return resultado;


}


