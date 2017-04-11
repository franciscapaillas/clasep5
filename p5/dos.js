var movies = [
  "the grudge",
  "eon blue apocalypse",
  "the patient",
  "mantra",
  "schism",
  "parabol",
  "parabola",
  "ticks & leeches",
  "lateralus",
]

var oscars = [1,2,3,4,5,6,7,8,9]

movies.push("disposition");
oscars.push(10);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('here'); //esto sirve para meter esta información en una parte del sitio especifico.
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(25);
  for(var x = 0; x <= movies.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(255,100);
    // el tamaño del texto es igual a la cantidad de oscars ganados * 3
    textSize((oscars[x]*3));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    text(oscars[x], ((width/(movies.length+1))*(x+1)), (height/2));
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(12);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(movies[x], ((width/(movies.length+1))*(x+1)), ((height/2)+12),((windowWidth/(movies.length+1))-50),100);
  }
}
