                //VARIABLES//

// variables para el cambio de color del fondo

let fRojo = 220; // f= fondo
let fVerde = 220;
let fAzul = 220;

// variables del cuadrado que respira
let tamCuadrado = 50;   // tam = tamaño
let tamCreciendo = true; // true es el "boton de activado para el movimiento de una figura"

// variables de colores cambiantes
let cRojo = 100;  // c = color
let cAzul = 150;

// variables circulo pequeño (sube y baja)
let yPeque = 60;
let velPeque = 4; // vel = velocidad
let xPeque = 100; 

// variables rectangulo grande (sube y baja)
let yGrande = 250;
let velGrande = -3;
let xGrande = 350;


                  // SKECTH //



function setup() {
  createCanvas(600, 400);
}

function draw() {

  background(fRojo, fVerde, fAzul);
  noStroke();

  if (frameCount % 30 === 0) {
    cRojo = random(50, 255);
    cAzul = random(100, 255);
  }

  // circulo pequeño que se controla con el mouse
  fill(cRojo, 100, cAzul);
  ellipse(mouseX, mouseY, 60, 60);

  // cuadrado que aumenta y disminuye su tamaño
  
  if (tamCreciendo === true) {
    tamCuadrado = tamCuadrado + 1.5;
  } else {
    tamCuadrado = tamCuadrado - 1.5;
  }

  if (tamCuadrado > 120) {
    tamCreciendo = false;
  }
  if (tamCuadrado < 40) {
    tamCreciendo = true;
  }

  fill(150, 200, cRojo); 
  rect(width / 4, height / 2, tamCuadrado, tamCuadrado);

  // ciculo pequeño
  
  fill(255, 180, 50); 
  ellipse(xPeque, yPeque, 20, 20); 
  
  yPeque = yPeque + velPeque; 
  
  if (yPeque > height || yPeque < 0) {
    velPeque = velPeque * -1;
  }

  // rectangulo grande
  
  fill(50, cAzul, 220); 
  rect(xGrande, yGrande, 100, 130); 
  
  yGrande = yGrande + velGrande; 
  
  if (yGrande > height || yGrande < 0) {
    velGrande = velGrande * -1;
  }
}

// al hacer click en pantalla cambia de color el fondo :> 

function mousePressed() {
  fRojo = random(50, 255);
  fVerde = random(50, 255);
  fAzul = random(50, 255);
}
