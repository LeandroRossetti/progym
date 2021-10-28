class Personas {
    constructor(nombre, apellido, sede, cargo,dni){

    this.nombre=nombre;
    this.apellido=apellido;
    this.sede=sede;
    this.cargo=cargo;
    this.dni=dni;
}  


altaPersona(){
    return("Persona dada de alta");
}

checkSistema(){
    return("Persona activa en sistema");
}

toString(){
    return(`Nombre: ${this.nombre}\nApellido: ${this.apellido}\n Sede: ${this.sede}\n Cargo: ${this.cargo}\n Dni: ${this.dni}`);
}



}



/* persona1.altaPersona();
persona1.checkSistema();
persona1.toString(); */

/* console.log(persona1.toString()); */

/* const nombre=prompt("Ingrese su nombre ");
const apellido=prompt("Ingrese su apellido");
const sede=prompt("Ingrese a que sede pertenece");
const cargo=prompt("Ingrese su cargo en la empresa");
const dni=Number(prompt("Ingrese su DNI"));

const persona1= new Personas(nombre,apellido,sede,cargo,dni);

console.log(persona1.toString()) ;
 */