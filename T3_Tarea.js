function reyesMagos(Fecha){
    var diaspdtes = 0;
    
    if(Fecha != ""){ //Si el usuario mete una fecha evaluamos. Si es vacia: Avisamos!
        var fechaDate = new Date(Fecha); //La fecha introducida se hace tipo objeto Date.
        
        if(fechaDate.getMonth() == 0){ //Si la fecha es el mismo mes de enero, solo calculamos los días. Los meses empiezan en 0.
            diaspdtes= 6 - fechaDate.getDate();
            document.getElementById("salidaEjercicio1").innerHTML = "Faltan " + diaspdtes + " dias para los regalos!!";
        }else{
            var fechaReyes = new Date(fechaDate.getFullYear()+1, 0, 6); //El metodo fullyear muestra el año actual, por eso sumo 1.
        
            diaspdtes = Math.trunc((fechaReyes - fechaDate)/1000/60/60/24);
            /*Como objeto Date representa el tiempo exacto en milisegundos, debo de hacer la conversión a días.
            Con Math.trunc quito los decimales ya que Date tiene encuenta el cambio horario, etc. 
            Solo me interesan los días.*/
            document.getElementById("salidaEjercicio1").innerHTML = "Faltan " + diaspdtes + " dias para los regalos!!";
            /*Para modificar en el html*/
        }
        
    }else {
        document.getElementById("salidaEjercicio1").innerHTML = "Por favor, introduce una fecha.";
    }
    
    
}

function fechaHora(){ //Uso los diferentes métodos de Date.
var formaFecha = new Date();
var dia = formaFecha.getDate();
var diaSem = formaFecha.getDay();// getDay ofrece un número de 1 al 7.
switch (diaSem) {
    case 1: diaSem = "lunes";
    break;
    case 2: diaSem = "martes";
    break;
    case 3:  diaSem = "miercoles";
    break;
    case 4:  diaSem = "jueves";
    break;
    case 5:  diaSem = "viernes";
    break;
    case 6:  diaSem = "sabado";
    break;
    case 7:  diaSem = "domingo";
    break;
}
var mes = ((formaFecha.getMonth())+1); //Los meses comienzan desde 0
switch (mes) {
    case 1: mes = "enero";
    break;
    case 2: mes = "febrero";
    break;
    case 3:  mes = "marzo";
    break;
    case 4:  mes = "abril";
    break;
    case 5:  mes = "mayo";
    break;
    case 6:  mes = "junio";
    break;
    case 7:  mes = "julio";
    break;
    case 8:  mes = "agosto";
    break;
    case 9:  mes = "septiembre";
    break;
    case 10:  mes = "octubre";
    break;
    case 11:  mes = "noviembre";
    break;
    case 12:  mes = "diciembre";
    break;
}
var year = formaFecha.getFullYear();
var hora = formaFecha.getHours();

var minuto = formaFecha.getMinutes();
alert("Hoy es "+diaSem+", "+dia+" de "+mes+" de "+year+" y son las "+hora+":"+minuto+" horas.");

}

function calcularAreaCirculo(rad){
    if(isNaN(rad) || rad <= 0){ //Me aseguro que es un número, el valor introducido por el usuario.
        alert("Debe ser un número y mayor que cero, por favor.");
    }else{
        var areaC = Math.PI * Math.pow(rad,2);
    var circunf = 2 * Math.PI * rad;
    alert("El area del circulo es: "+areaC.toFixed(2)+", y su circunferencia es: "+circunf.toFixed(2));
    
    }
    
}

function calcularAleatorio(min,max){

    if(isNaN(min) && isNaN(max)){
        alert("Debe introducir un numero, por favor.")
    }else{
        var numA = Math.floor(Math.random() * (max - min) + min);
        document.getElementById("salidaEjercicio4").innerHTML = numA;
    }
     
}

function mitadCar(cadena){
var resul=(cadena.slice(0,cadena.length/2)); 
    document.getElementById("salidaEjercicio5").innerHTML = "La primera mitad es: "+ resul; 
}

function ultimoCaracter(cadena){
    var resul = cadena.charAt(cadena.length-1);
    document.getElementById("salidaEjercicio5").innerHTML = "El último caracter es: "+ resul; 
}

function cadenaInversa(cadena){
    //Realizo varias transformaciónes de la cadena antes de representarla al reves.
    var arrayCadena = cadena.split(""); //La paso a un array.
    //alert (arrayCadena);
    var arrayCadenaInv= arrayCadena.reverse(); //Le doy la vuelta.
    //alert (arrayCadenaInv);
    var resul = arrayCadenaInv.join(""); //Uno de nuevo la cadena que era un array.
    //alert (cadenaFinalInv);

    document.getElementById("salidaEjercicio5").innerHTML = "La cadena de forma inversa es: "+ resul; 
}

function cadenaGuiones(cadena){
    var arrayCadena = cadena.split(""); //convierto la cadena en un array.
    //alert(arrayCadena);
 var resul= arrayCadena.join("-");//Se une con guiones.

 document.getElementById("salidaEjercicio5").innerHTML = "La cadena separada por guiones es: "+resul; 

}

function contarVocales(cadena){
    var cadenaMinusc = cadena.toLowerCase(); //Unifico la cadena a minusculas.
    var quitarEspacios = cadenaMinusc.trim();//quito espacios para evitar errores.
   
    var count=0;
    for(let i=0; i<quitarEspacios.length; i++){
        //Recorro la cadena y si coincide con alguna vocal: count++
        if(quitarEspacios[i]== 'a' || quitarEspacios[i] == 'e' || quitarEspacios[i] == 'i' || quitarEspacios[i] == 'o' || quitarEspacios[i] == 'u' ){
                count ++;
        }
    }
    document.getElementById("salidaEjercicio5").innerHTML = "La cadena tiene un total de: "+count+" vocales."; 

    return count;
}
