const botonesInicio = document.querySelectorAll(".btnInicio");
let btnDeportes = document.querySelector("#btn1");
let btnCultura = document.querySelector("#btn2");
let btnCine = document.querySelector("#btn3");
let btnCiencia = document.querySelector("#btn4");
let preguntaTexto = document.querySelector(".pregunta");
let btnRespuesta = document.querySelectorAll(".btnRespuesta");
let divRespuesta = document.querySelector(".respuesta");
let next = document.querySelector(".siguiente");
let contador = document.querySelector(".contador span");
let respuestaTexto = document.getElementsByClassName("respuestaTexto");
let finalScore = document.querySelector(".finalScore");
let btnCategorias = document.querySelector(".btnCategorias");
let cambiarCategorias = document.querySelector(".cambiarCategorias");
let nuevoDeportes = document.querySelector("#boton1");
let nuevoCultura = document.querySelector("#boton2");
let nuevoCine = document.querySelector("#boton3");
let nuevoCiencia = document.querySelector("#boton4");

let contar = 0;


let preguntasDeportes =[ {
    pregunta:"Como se llama el Chino Recoba ?",
    respuestas:[
{texto:"Rodrigo",correcta:false},
{texto:"Alvaro",correcta:true},
{texto:"Alberto",correcta:false},
{texto:"Diego",correcta:false},
    ]
},
{
    pregunta:"Cuánto dura un partido de fútbol ?",
    respuestas:[
{texto:"90 min",correcta:true},
{texto:"60 min",correcta:false},
{texto:"120 min",correcta:false},
{texto:"95 min",correcta:false},
    ]
},
{
    pregunta:"¿Cuántos jugadores componen un equipo de rugby ?",
    respuestas:[
{texto:"11 jugadores",correcta:false},
{texto:"16 jugadores",correcta:false},
{texto:"19 jugadores",correcta:false},
{texto:"15 jugadores",correcta:true},
    ]
},
]




let preguntasCultura =[ {
    pregunta:"Cuál es el lugar más frío de la tierra ?",
    respuestas:[
{texto:"Mongolia",correcta:false},
{texto:"Nueva Zelanda",correcta:false},
{texto:"Rusia",correcta:false},
{texto:"Antártida",correcta:true},
    ]
},
{
    pregunta:"Cuál es el río más largo del mundo ?",
    respuestas:[
{texto:"Rio de la plata",correcta:false},
{texto:"Rio Nilo",correcta:false},
{texto:"Rio Amazonas",correcta:true},
{texto:"Rio de Grecia",correcta:false},
    ]
},
{
    pregunta:"¿En qué país se encuentra la torre de Pisa ?",
    respuestas:[
{texto:"Italia",correcta:true},
{texto:"Argentina",correcta:false},
{texto:"Alemania",correcta:false},
{texto:"Grecia",correcta:false},
    ]
},
]

let preguntasCine =[ {
    pregunta:"Cuántas películas de Saw hay ?",
    respuestas:[
{texto:"9",correcta:true},
{texto:"7",correcta:false},
{texto:"10",correcta:false},
{texto:"6",correcta:false},
    ]
},
{
    pregunta:"A qué año viajan Marty y Doc en Regreso al futuro II ?",
    respuestas:[
{texto:"2016",correcta:false},
{texto:"2015",correcta:true},
{texto:"2020",correcta:false},
{texto:"2018",correcta:false},
    ]
},
{
    pregunta:"¿Qué ciudad está plagada de fantasmas en Cazafantasmas ?",
    respuestas:[
{texto:"Nueva York ",correcta:true},
{texto:"Miami",correcta:false},
{texto:"Dallas",correcta:false},
{texto:"San Francisco",correcta:false},
    ]
},
]


let preguntasCiencia =[ {
    pregunta:"Qué significa ADN ?",
    respuestas:[
{texto:"Ácido derrenal",correcta:false},
{texto:"Arceo de nato",correcta:false},
{texto:"Ácido desoxinado",correcta:false},
{texto:"Ácido desoxirribonucleico",correcta:true},
    ]
},
{
    pregunta:"Cuántos huesos tienen los tiburones en el cuerpo ?",
    respuestas:[
{texto:"216",correcta:false},
{texto:"115",correcta:false},
{texto:"0",correcta:true},
{texto:"98",correcta:false},
    ]
},
{
    pregunta:"¿Cuántos corazones tiene un pulpo ?",
    respuestas:[
{texto:"7 ",correcta:false},
{texto:"3",correcta:true},
{texto:"12",correcta:false},
{texto:"1",correcta:false},
    ]
},
]
let display = 1;
let categoriaElegida = "";




btnCategorias.addEventListener("click", function(){
    cerrar()
})

function cerrar(){
    if(display == 1){
        document.querySelector(".cambiarCategorias").style.display = "block";
     display = 0;
    } else{
        document.querySelector(".cambiarCategorias").style.display = "none";
        display = 1;
    }
    }



next.addEventListener("click", function(){
    
    document.querySelector(".preguntitas").remove()
    
    laCorrecta = 0;
    btnRespuesta.forEach(element =>{
        element.classList.remove("color" , "color1")
        
        
    })
    universal(categoriaElegida)
    next.style.display = "none";
})


let viejaPregunta = [];


nuevoDeportes.addEventListener("click", function(){
    document.querySelector(".preguntitas").remove()
    laCorrecta = 0;
    btnRespuesta.forEach(element =>{
        element.classList.remove("color" , "color1")})
    universal(preguntasDeportes)
    btnCategorias.style.display = "none";
    cerrar()
    
    })

nuevoCultura.addEventListener("click", function(){
    document.querySelector(".preguntitas").remove()
    laCorrecta = 0;
    btnRespuesta.forEach(element =>{
        element.classList.remove("color" , "color1")})
    universal(preguntasCultura)
    btnCategorias.style.display = "none";
    cerrar()
    })

nuevoCine.addEventListener("click", function(){
    document.querySelector(".preguntitas").remove()
    laCorrecta = 0;
    btnRespuesta.forEach(element =>{
        element.classList.remove("color" , "color1")})
    universal(preguntasCine)
    btnCategorias.style.display = "none";
    cerrar()
    })
  
nuevoCiencia.addEventListener("click", function(){
    document.querySelector(".preguntitas").remove()
    laCorrecta = 0;
    btnRespuesta.forEach(element =>{
        element.classList.remove("color" , "color1")})
    universal(preguntasCiencia)
    btnCategorias.style.display = "none";
    cerrar()
    })




btnDeportes.addEventListener("click", function(){
    universal(preguntasDeportes)
    })

btnCultura.addEventListener("click", function(){
    universal(preguntasCultura)
    })

btnCine.addEventListener("click", function(){
    universal(preguntasCine)
    })
  
btnCiencia.addEventListener("click", function(){
    universal(preguntasCiencia)
    })
 



botonesInicio.forEach(element => {
    element.addEventListener("click",function(){
        document.querySelector(".botones-container").style.display = "none";
    })
})


var timeLeft = 60;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}

function doSomething(){
    document.querySelector(".gameOver").style.display = "block"
    document.querySelector(".newGame").style.display = "block"
}

document.querySelector(".newGame").addEventListener("click",function(){
    window.location.reload()
})



let laCorrecta;

function universal(categorias){
    let random = Math.floor(Math.random()*categorias.length)
    let btnRespuesta = document.querySelectorAll(".btnRespuesta");

    while (viejaPregunta.includes(random) && viejaPregunta.length < categorias.length) {
        random =  Math.floor(Math.random()*preguntasDeportes.length)
      }
      viejaPregunta.push(random)
categoriaElegida = categorias;
for(let i = 0; i < categorias[random].respuestas.length; i++){
    respuestaTexto[i].innerHTML = categorias[random].respuestas[i].texto
    btnRespuesta[i].addEventListener("click", function(){
        if(categorias[random].respuestas[i].correcta == false){
            btnRespuesta[i].classList.add("color");
            if(!laCorrecta == 1){

            
            contar = contar - 1;
           contador.innerHTML = "score: " + contar;
           finalScore.innerHTML = "score: " + contar
        }
           
        }else if(categorias[random].respuestas[i].correcta == true){
            laCorrecta = 1
            next.style.display = "block";
            btnCategorias.style.display = "block";
            btnRespuesta[i].classList.add("color1");
            if(laCorrecta == 1){
           contar = contar + 1;
           contador.innerHTML = "score: " + contar
           finalScore.innerHTML = "score: " + contar
           btnRespuesta.forEach( (element) => {
element.click()
           })
           
           }}
    }, {once:true});
}
preguntaTexto.insertAdjacentHTML("beforeend",`<p class ="preguntitas">${categorias[random].pregunta}</p>`)
}