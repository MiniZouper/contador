//llamamos a la funcion que se encarga de cargar los archivo
const contador = document.getElementById("contar");
const sumar = document.getElementById("incre");
const restar=document.getElementById("decre");
const reset = document.getElementById("reset");

//creamos un contador que incia en 0 y es de color azul
let numero=0;
contador.style.color="#335284"

//creamos una funcion que se encarga de sumar 1 al contador con cada click
sumar.addEventListener("click", () =>{

    
    numero++;
    contador.innerHTML=numero;
    if(numero > 0) 
    { 
        //si el contador es mayor a 0 el color del contador cambia a verde
        contador.style.color="#00C49A"
    }
    
    else if(numero == 0){
        //si el contador es igual a 0 el color del contador cambia a azul
        contador.style.color="#335284"
    }
    else
    {
        //si el contador es menor a 0 el color del contador cambia a rojo
        contador.style.color="#EF4B4C"
    }
    
});

//creamos una funcion que se encarga de restar 1 al contador al hacer click
restar.addEventListener("click", ()=>{

    numero--;
    contador.innerHTML=numero;
    if(numero > 0)
    {
        contador.style.color="#00C49A"
    }

    else if(numero == 0){
        contador.style.color="#335284"
    }
    else
    {
        contador.style.color="#EF4B4C"
    }
});

//creamos una funcion que se encarga de resetear el contador
reset.addEventListener("click", () =>{
    numero =0;
    contador.innerHTML=numero;
    contador.style.color="#335284"
    
});


       
