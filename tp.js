//promedio
function numeros(lista){
    var i=0, suma=0, arraylen = lista.length;
    while (i<arraylen){
        suma=suma+lista[i++];
    }
return suma/arraylen;
}
var lista = [9,0,99,5,7,9,30,0,25,3,1,8];
var prom = numeros(lista);
console.log(prom)

/*hago una funcion para determinar el promedio,
partiendo desde una lista, luego, inicio los contadores
del while (i=0) y pongo una suma=0, luego estos van
aumentando (i++) hasta que alcanzan el numero de 
elementos y se cumple el fin del bucle (i<arraylen)
despues uso la formula del promedio y un bucle (while)
. Sumo todos los elementos
del array y luego los divido por la cantidad de
elementos del array, usando "length"*/

//Buscar el mayor

var arreglo  = [9,0,99,5,7,9,30,0,25,3,1,8];
    maximo = 0;

for(var i=0,len=arreglo .length;i<len;i++){
    if(maximo < arreglo [i])
        maximo = arreglo [i]
    }
console.log(maximo);
/*Declaro un arreglo que tenga los numeros, despues creo una
variable "maximo", luego inicio un bucle for para pasar por
todos los elementos del arreglo, de ahi uso un if para 
comprobar cual de todos esos numeros es el mayor */

//Buscar el menor
var array = [9,0,99,5,7,9,30,0,25,3,1,8];
    minimo = 0;

for (var i = 0, min = array.length;i<min;i++){
    if(minimo > arreglo [i])
    minimo = arreglo [i]
}
console.log(minimo);

//Buscar la cantidad de numeros positivos

function numero(lista){
    var posit=0;
        for (var i= 0; i < lista.length; i++) {
        if (lista[i]> 0 )
        {posit=posit+1;}
    }
return posit
}
var lista = [9,0,99,5,7,9,30,0,25,3,1,8];
var pepe=numero(lista)
console.log(pepe);

/* se define un valor a la lista (en esta caso como ya tenemos un
    valor de lista, esta se pone afuera, ya que redefinir su
    valor, seria redundante), luego definemos el valor de nuestras
    variables e iniciamos un bucle "for" (ya que debemos pasar
        por todos los elementos del array), luego invocamos un
        condicional "if", para mostrar que si el valor de la lista
        es mayor a 0, esta añadira un contador a nuestra variable
        "posit" que es la contara los numeros positivos.
        Luego definmos una nueva variable para todo lo que hizo 
        la funcion, para tener finalmente el resultado desaeado. */

//Buscar la cantidad de numeros negativos

function numeron(lista){
    var negat=0;
        for (var i= 0; i < lista.length; i++) {
        if (lista[i]<0 )
        {negat=negat+1;}
    }
return negat
}
var lista = [9,0,99,5,7,9,30,0,25,3,1,8];
var pipo=numeron(lista)
console.log(pipo);

function nume(lista){
    var nulos=0;
    for (var i = 0; i < lista.length; i++) {
    if (lista[i]==0)
    {nulos=nulos+1}
    }
return nulos
}
   
var lista = [9,0,99,5,7,9,30,0,25,3,1,8];
var pinpom=nume(lista)
console.log(pinpom);
   




