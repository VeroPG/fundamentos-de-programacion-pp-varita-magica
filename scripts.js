//Evita el comportamiento por defecto al hacer click.
//Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

let link = document.querySelectorAll("a");
link.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

/*Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*. */

let imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    img.src = `assets/${getRandom3(gif)}`;
  });
});

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
let parrafo = document.querySelectorAll("p");
parrafo.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.backgroundColor = getRandom2(colors2);
    item.style.color = getRandom();
  });
});

//2.3 Bloques de article o section: Cambia el color de fondo.
let section = document.querySelectorAll("section");
section.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.backgroundColor = getRandom();
  });
});

//Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

imgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.src = "assets/abracadabra.gif";
  });
});

//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
let parrafo2 = document.querySelectorAll("p");
parrafo2.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = getRandom2(colors2);
    item.style.color = getRandom2(colors2);
  });
});

//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
let articulo2 = document.querySelectorAll("article");
articulo2.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = getRandom2(colors2);
  });
});

/*PREMIUM/*
    
    
//4 Crea una función de nombre getRandom que acepte un array 
con valores y devuelva uno de ellos de manera aleatoria.*/
let colors = ["red", "blue", "green"];
let getRandom = (colors) => {
  let random1 = Math.floor(Math.random() * colors.length);
  return colors[random1];
};
console.log(getRandom(colors)); // imprime 'red', 'blue' o 'green'

//5 Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta
//que hayas escogido de coolors.co en los apartados anteriores.
let colors2 = ["#5F0F40", "#9a031e", "#fb8b24", "#e36414", "#0F4C5C"];
let getRandom2 = (colors2) => {
  let random2 = Math.floor(Math.random() * colors2.length);
  return colors2[random2];
};
console.log(getRandom2(colors2));

//6 Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.
let gif = [
  "magic-1.gif",
  "magic-2.gif",
  "magic-3.gif",
  "magic-4.gif",
  "magic-5.gif",
  "magic-6.gif",
];

let getRandom3 = (gif) => {
  let randomGif = Math.floor(Math.random() * gif.length);
  return gif[randomGif];
};

console.log(getRandom2(gif));
