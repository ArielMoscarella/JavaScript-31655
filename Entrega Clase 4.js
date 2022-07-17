let numeroCuotas = [1,2,3,4,5,6,7,8,9,10,11,12];


nombreusuario= prompt("Ingrese nombre")     
apellidousuario= prompt("Ingrese apellido")
precioparcial= prompt("Importe parcial de la compra (Sin IVA)")
let cuotasUsuario = prompt("Ingrese en cuantas cuotas quiere abonar") 


class Compra {

   

    constructor(nombre,apellido,precio){
        this.nombre = nombre;               
        this.apellido = apellido;           
        this.precio = precio;
    }

    usuario(){

        return `${this.nombre} ${this.apellido}` 
    
    };

    sumaIva(){
       return this.precio = this.precio * 1.21;     
    };

    valorCuotas() {
        let valorXCuota= 0

        valorXCuota = this.precio / cuotasUsuario;
        return console.log(valorXCuota);

       
    };
 

}

const persona= new Compra (nombreusuario, apellidousuario, precioparcial);

const precioFinal = persona.sumaIva()

for(cuota in numeroCuotas){
    valoresCuotas= precioFinal / cuota;
    console.log(valoresCuotas)
};

const nombreCompleto = persona.usuario()


persona.valorCuotas();


console.log(persona)


alert(nombreCompleto + ", su compra de " + precioFinal +".Fue realizada con exito." )

