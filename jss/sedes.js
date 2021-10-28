let sedes = [

    sedeAlmagro = {
        nombre: 'Almagro', /* propiedades */
        idSede: '04',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'PLUS'
    },


    sedeParaguay = {
        nombre: 'Paraguay', /* propiedades */
        idSede: '05',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'PLUS'
    },

    sedeSaavedra = {
        nombre: 'Saavedra', /* propiedades */
        idSede: '116',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'PLUS'
    },
    sedeLibertador = {
        nombre: 'Libertador', /* propiedades */
        idSede: '08',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'TOTAL'
    },

    sedeTlkNuñez = {
        nombre: 'TLK NUÑEZ', /* propiedades */
        idSede: '62',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'TOTAL'
    },
    sedeTlkPilar = {
        nombre: 'TLK PILAR', /* propiedades */
        idSede: '64',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'TOTAL'
    }
];

//Se crea una función que contiene un ciclo que itera sobre un array de objetos, luego completa una tabla en sedes.html
function tablaSedes() {
    btnDesplegarSedes.disabled=true;
    for (const sede of sedes) {

        $("#tablaSedes").append(`
    <tbody >
    <tr>
     <td class="text-center">${sede.idSede} </td>
    
     <td class="text-center">${sede.nombre} </td>
    
     <td class="text-center">${sede.tipoSede}</td>

   </tr>
   </tbody>
    
    `);

    }

}

//Con este botón es que llamamos a la función tablaSedes y completamos la tabla.

$('#btnDesplegarSedes').click(function(){
    tablaSedes();
})