//PEDIR NUEMRO POR PROMPT Y SALIDA DE MENSAJE HOLA LA CANTIDAD DE VECES INGRESADA

//ENTREGA CLASE 2
/*let numeroVeces = parseInt(prompt("Ingrese un numero:"));

for(let i=1; i <= numeroVeces; i++){
    console.log("Hola")
};
*/


//ENTREGA CLASE 3
/*let montoTotal= 0
let valorCuotas= 0
let monto= parseInt(prompt(message= "Ingrese el monto"))
let cuotas= parseInt(prompt(message= "Numero de cuotas"))
alert("Recuerda que tenes hasta 3 cuotas sin interes")


switch(cuotas){
    case 1:
        console.log("Total a pagar" + "" + "$" + monto + "en 1 cuota" )
    break;
    case 2:
        valorCuotas= monto/cuotas
        console.log("Total a pagar" + "" + "$" + monto + "en 2 cuotas sin interes." + "Pagara" + "" + "$" + valorCuotas + "" +  "por cada una")
    break;
    case 3:
        valorCuotas= monto/cuotas
        console.log("Total a pagar" + "" + "$" + monto + "en 3 cuotas sin interes." + "Pagara" + "" + "$" + valorCuotas + "" + "por cada una")
    break;
    case 4:
        valorCuotas= (monto/cuotas) * 1.055  
        montoTotal= valorCuotas * cuotas
        console.log("Total a pagar" + "" + "$" + monto + "en 4 cuotas." + "Pagara" + "" + "$" + valorCuotas + "" +   "por cada una." + "Dando un total de" + "" + "$" + montoTotal )
    break;
    case 6:
        valorCuotas= (monto/cuotas) * 1.055  
        montoTotal= valorCuotas * cuotas
        console.log("Total a pagar" + "" + "$" + monto + "en 6 cuotas." + "Pagara" + "" + "$" + valorCuotas + "" +   "por cada una." + "Dando un total de" + "" + "$" + montoTotal )
    break;
    case 8:
        valorCuotas= (monto/cuotas) * 1.055  
        montoTotal= valorCuotas * cuotas
        console.log("Total a pagar" + "" + "$" + monto + "en 8 cuotas." + "Pagara" + "" + "$" + valorCuotas + "" +   "por cada una." + "Dando un total de" + "" + "$" + montoTotal )
    break;
    case 10:
        valorCuotas= (monto/cuotas) * 1.055  
        montoTotal= valorCuotas * cuotas
        console.log("Total a pagar" + "" + "$" + monto + "en 10 cuotas." + "Pagara" + "" + "$" + valorCuotas + "" +   "por cada una." + "Dando un total de" + "" + "$" + montoTotal ) 
    break;
    case 12:
        valorCuotas= (monto/cuotas) * 1.055  
        montoTotal= valorCuotas * cuotas
        console.log("Total a pagar" + "" + "$" + monto + "en 12 cuotas." + "Pagara" + "" + "$" + valorCuotas + "" +   "por cada una." + "Dando un total de" + "" + "$" + montoTotal )
    break;
}
*/

//ENTREGA CLASE 4.1 y 4.2
let cuotas = {1:0 , 2:0 , 3:0 , 4:0 ,5:0 ,6:0 ,7:0 ,8:0 ,9:0 ,10:0 ,11:0 ,12:0 }
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

    imprimirCuotas() {
        
        for(let i = 0 ; i < numeroCuotas ; i++){
            return console.log(cuotas[i])
        };
    
    };
 

}

const persona= new Compra (nombreusuario, apellidousuario, precioparcial);

const precioFinal = persona.sumaIva()

const nombreCompleto = persona.usuario()

persona.valorCuotas();

persona.imprimirCuotas();

console.log(persona)


alert(nombreCompleto + ", su compra de " + precioFinal +".Fue realizada con exito." )


