//Variable que mantiene el estado visible del carrito
/* var carritoVisible = false; */

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
/* if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
} */



let carrito=[]

let productos=[

{
    nombre: "Zygocactus",
    imagen: "./assets/filocactus.jpg",
    precio: 10000,


},

{
    nombre: "Zig zag",
    imagen: "./assets/zigzag.jpg",
    precio: 8000,


},

{
    nombre: "Zapote",
    imagen: "./assets/Zapote.jpg",
    precio: 15000,


},

{
    nombre: "Zamioculca",
    imagen: "./assets/zamioculca-p14-v2.jpg",
    precio: 14000,


},

{
    nombre: "Yerbabuena",
    imagen: "./assets/yerbabuena-matero.jpg",
    precio: 10000,


},

{
    nombre: "Violetas De Los Alpes",
    imagen: "./assets/violeta-alpes-roja-v2.jpg",
    precio: 25000,


},

{
    nombre: "Violeta Africana",
    imagen: "./assets/violeta-africa.jpg",
    precio: 30000,


},

{
    nombre: "Pensamiento",
    imagen: "./assets/pensamiento-01.jpg",
    precio: 22000,


},

{
    nombre: "Tilandsia Roja #1",
    imagen: "./assets/tilandsia-n1.jpg",
    precio: 22000,


},







]

document.addEventListener("DOMContentLoaded",()=>{
    pintarProductos()
})

function pintarProductos(){

    productos.forEach((item,index)=>{
        let div = document.createElement("div")
        div.classList="item"
        let nombre = document.createElement("span")
        nombre.textContent=item.nombre
        nombre.classList="titulo-item"
        div.appendChild(nombre)

        let imagen= document.createElement("img")
        imagen.src=item.imagen
        imagen.classList="img-item"
        div.appendChild(imagen)

        let precio= document.createElement("span")
        precio.textContent=item.precio
        precio.classList="precio-item"
        div.appendChild(precio)

        let boton =document.createElement("button")
        boton.classList="boton-item"
        boton.textContent= "Agregar al Carrito"
        

        boton.addEventListener("click",()=> {
            carrito.push(item)
            console.log(carrito)
        })

        div.appendChild(boton)

        document.getElementById("container").appendChild(div)
    })


}



