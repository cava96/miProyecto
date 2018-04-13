function mensaje(){
    alert("HOLA");
}

function muestraTexto(){
    var elem=document.getElementById("parrafo1");
    elem.innerHTML = "Texto cambiado <strong>con negrita</strong>";
}

function concatenaNombre(){
    var nombre = document.getElementById("nombre").innerHTML;
    var apellido = document.getElementById("apellido").innerHTML;
    
    document.getElementById("nombrecompleto").innerHTML = nombre + " " + apellido;
}

function sumar(){
    var operando1 = document.getElementById("operando1").value;
    var operando2 = document.getElementById("operando2").value;
    
    document.getElementById("resultado").innerHTML = parseFloat(operando1) + parseFloat(operando2);
}

function restar(){
    var operando1 = document.getElementById("operando1").value;
    var operando2 = document.getElementById("operando2").value;
    
    document.getElementById("resultado").innerHTML = parseFloat(operando1) - parseFloat(operando2);
}

function potencia(){
    var operando1 = document.getElementById("operando1").value;
    var operando2 = document.getElementById("operando2").value;
    
    document.getElementById("resultado").innerHTML = Math.pow(operando1,operando2);
}

function comprobarParidad(){
    var operando1 = document.getElementById("operando1").value;
    var operando2 = document.getElementById("operando2").value;
    
    if((operando1%2===0)&&(operando2%2===0)){
        document.getElementById("resultado").innerHTML = "Son pares";
    }    
    else {
        document.getElementById("resultado").innerHTML = "Son impares";
    }
}

function muestraCoches(){
    var coches = ["Renault", "Peugeot","Citroen","Ford"];
    
    var texto = "<ul>";
    for(i=0;i<coches.length;i++){
        texto += "<il>" + coches[i] +"</li>";
    }
    texto += "</ul>";
    document.getElementById("listadocoches").innerHTML = texto;
}

function contarPeso(){
    var peso = [80,100,73,67,93,89,81];
    var cont=0;
    for(i=0;i<peso.length;i++){
        if(peso[i]>80){
            cont++;
        }
    }
    document.getElementById("cont").innerHTML = cont;
}

function saberNotas(){
    var notas = [3,8,7,5,4.5,9,8,7,3.5,6,10,7,7.5];
    var susp=0,aptos=0,bien=0,not=0,sob=0,math=0;
    for(i=0;i<notas.length;i++){
        if(notas[i]>=0&&notas[i]<5){
            susp++;
        }else if(notas[i]>=5&&notas[i]<6){
            aptos++;
        }else if(notas[i]>=6&&notas[i]<7){
            bien++;
        }else if(notas[i]>=7&&notas[i]<8.5){
            not++;
        }else if(notas[i]>=8.5&&notas[i]<10){
            sob++;
        }else if(notas[i]==10){
            math++;
        }
    }
    document.getElementById("susp").innerHTML = susp;
    document.getElementById("aptos").innerHTML = aptos;
    document.getElementById("bien").innerHTML = bien;
    document.getElementById("not").innerHTML = not;
    document.getElementById("sob").innerHTML = sob;
    document.getElementById("math").innerHTML = math;
}
var empleados = [
    {name:"Marta", sueldo:1000, horas:50},
    {name:"Javier", sueldo:3500, horas:100},
    {name:"Pepe", sueldo:800, horas:100},
    {name:"Sandra", sueldo:950, horas:95},
    {name:"Teresa", sueldo:2700, horas:90}
    ];

function menosCobra(){
    var trb;
    var sueldomin=empleados[0].sueldo;
    for(i=0;i<empleados[i].sueldo.length;i++){
        if(sueldomin>empleados[i].sueldo){
           sueldomin=empleados[i].sueldo;
           trb=empleados[i].name;
        }
    }
    document.getElementById("trb").innerHTML = trb;
}

function masTrabaja(){
    var trabajador;
    var masWork=empleados[0].horas;
    for(i=0;i<empleados[i].horas.length;i++){
        if(masWork<empleados[i].horas){
            masWork=empleados[i].horas;
            trabajador=empleados[i].name;
        }
    }
    document.getElementById("trabajador").innerHTML = trabajador;
}

function sueldoMedio(){
    var sldMedio;
    for(i=0;i<empleados[i].sueldo.length;i++){
        sldMedio+=empleados[i].sueldo;
    }
    sldMedio=sldMedio/empleados.length;
    document.getElementById("sldMedio").innerHTML = sldMedio;
}
/*******PARA COGER DATOS*****/
var dataSet = [
    ["Javier",3500,100],
    ["Fran",2000,200],
    ["Ana",2750,100]
];

$(document).ready(function() {
    $('#ejemplo').DataTable( {
        data: dataSet,
        columns: [
            { title: "Nombre" },
            { title: "Sueldo" },
            { title: "Horas" }
        ]
    } );
} );


