let carrito = []


const contenedor = document.getElementById("container")
const verCarrito = document.getElementById("carrito")
const Modal = document.getElementById("modal_Contendor")
const CantidadCarrito = document.getElementById("CantidadCarrito")

productos.forEach(item => {
    let agregaCard = document.createElement("div")
    agregaCard.classList = "item"
    agregaCard.innerHTML = `
        <h2 class="titulo-item">${item.nombre}</h2>
        <img src= "${item.imagen}" 
        <h2 class="precio-item"> $${item.precio} </h2>      
        `
    contenedor.append(agregaCard)


    let comprar = document.createElement("button")
    comprar.textContent = "Agregar carrito"
    comprar.classList = "boton-item"
    agregaCard.append(comprar)


    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatitem) => repeatitem.id === item.id)

        if (repeat) {
            carrito.map((producto) => {
                if (producto.id === item.id) {
                    producto.cantidad++
                }
            })
        } else {
            carrito.push({
                id: item.id,
                nombre: item.nombre,
                img: item.imagen,
                precio: item.precio,
                cantidad: item.cantidad,
            })

        }
        console.log(carrito)
        carritoCant()
    })

});


const pintarCarrito = () => {
    Modal.innerHTML = "";
    Modal.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="titulo-header">  Tu Carrito </h1>
        `
    Modal.append(modalHeader)

    const modalbutton = document.createElement("h1")
    modalbutton.textContent = "X"
    modalbutton.className = "modal-button"

    modalbutton.addEventListener("click", () => {
        Modal.style.display = "none";
    })

    modalHeader.append(modalbutton)

    carrito.forEach((item) => {

        let carritoContenedor = document.createElement("div")
        carritoContenedor.className = "modal-conte"
        carritoContenedor.innerHTML = `
                <img class="modal-img" src= "${item.img}">
                <p> $ ${item.precio}<p> 
                <p> Cantidad: ${item.cantidad} </p>
                <p> Total: ${item.cantidad * item.precio} <p>
            `

        Modal.append(carritoContenedor)



        let eliminar = document.createElement("span")
        eliminar.innerText = "❌"
        eliminar.className = "delete"
        carritoContenedor.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalCarr = document.createElement("div")
    totalCarr.className = "total-conte"
    totalCarr.innerHTML = `Total a pagar: $${total} `
    Modal.append(totalCarr)
};

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoNombre) => {
        return carritoNombre !== foundId;
    });
    carritoCant()
    pintarCarrito()
};



const carritoCant = () => {
    CantidadCarrito.style.display = "block"
    CantidadCarrito.innerText = carrito.length
}