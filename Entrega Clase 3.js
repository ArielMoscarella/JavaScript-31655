let montoTotal= 0
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