
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Pizza Vegetariana',
        informacion: 'Champiñon,pimiento verde,aceitunas negras, Not Meat,champiñones y queso',
        precio: 12000,
        imagen: './IMG/pizza-napolitana.jpg',
    },
    {
        id: 2,
        nombre: 'Pizza todas Carne',
        precio: 11000,
        informacion: 'Queso mozzarella, pepperoni , jamón, tocino, salchicha  italiana, chapiñones ',
        imagen: './IMG/pizza-napolitana.jpg',
    },
    {
        id: 3,
        nombre: 'Pizza Napolitana',
        precio: 13000,
        informacion: 'Queso mozzarella, orégano, pepperoni,salchicha italiana, aceitunas negras,champiñón.',
        imagen: './IMG/pizza-napolitana.jpg',
    },
    {
        id: 4,
        nombre: 'Pizza Pepperoni',
        precio: 12500,
        informacion: 'Queso mozzarella, Extra queso mozzarella, doble pepperoni , aceituna.',
        imagen: './IMG/pizza_pepperoni.png',
    },
    {
        id: 5,
        nombre: 'Napolitana Cherry',
        precio: 14000,
        informacion: 'Queso mozzarella, orégano, tomate cherry, champiñones y aceitunas.',
        imagen: './IMG/pizza,pimenton.jpg',
    },
    {
        id: 6,
        nombre: 'Pizza The Works',
        precio: 16000,
        informacion: 'Queso mozzarella, pepperoni, jamón,salchicha italiana, cebolla, pimiento,aceitunas',
        imagen: './IMG/champiñones.jpg',
    },
    {
        id: 7,
        nombre: 'Pizza Pollo BBQ',
        precio: 15000,
        informacion: 'Queso mozzarella, pollo, tocino, cebolla,salsa bbq, oregnano y aceitunas',
        imagen: './IMG/pizza-napolitana.jpg',
    },
    {
        id: 8,
        nombre: 'Pizza Canadian Bacon',
        precio: 17000,
        informacion: 'Queso mozzarella, lomito canadiense,tocino, queso parmesano y romano.',
        imagen: './IMG/pizza-napolitana.jpg',
    },
    {
        id: 9,
        nombre: 'Pizza Sweet Blue Cheese',
        precio: 19000,
        informacion: 'Queso azul y mozzarella, cebolla    caramelizada y tocino sobre una base desalsa de ajo.',
        imagen: './IMG/pizza-napolitana.jpg',
    },

];

let carrito = [];
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');


const estructuraCarrito = () => {
    baseDeDatos.forEach((info) => {

        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');

        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        const nTitulo = document.createElement('h5');
        nTitulo.classList.add('card-title');
        nTitulo.textContent = info.nombre;

        const nImagen = document.createElement('img');
        nImagen.classList.add('img-fluid','rounded');
        nImagen.setAttribute('src', info.imagen);

        const nInformacion = document.createElement('p');
        nInformacion.classList.add('card-title');
        nInformacion.textContent = info.informacion;

        const nPrecio = document.createElement('h5');
        nPrecio.classList.add('card-text'); 
        nPrecio.textContent = `${info.precio}`;

        const nBoton = document.createElement('button');
        nBoton.classList.add('btn', 'btn-success');
        nBoton.textContent = 'Agregar cantidad';
        nBoton.setAttribute('marcador', info.id);
        nBoton.addEventListener('click', cantidadPizza);

        miNodoCardBody.appendChild(nImagen);
        miNodoCardBody.appendChild(nTitulo);
        miNodoCardBody.appendChild(nInformacion);
        miNodoCardBody.appendChild(nPrecio);
        miNodoCardBody.appendChild(nBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}


const cantidadPizza = (evento) => {
    carrito.push(evento.target.getAttribute('marcador'))
    carritoPizza();
}

const calcularTotal = () => {    
    return carrito.reduce((total, item) => {       
    const miItem = baseDeDatos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
    });        
    return total + miItem[0].precio;
}, 0);
}


const carritoPizza = () => {

    DOMcarrito.textContent = '';

    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {

        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);

        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-5', 'bold');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - $ ${miItem[0].precio}`;
        

        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-outline-danger', 'mx-5');
        miBoton.textContent = 'Eliminar';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarPizza);

        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);  
    });
    DOMtotal.textContent = calcularTotal();
}

const borrarPizza = (evento) => {
    
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    carritoPizza();
}

/* realizar compra y vaciar el carro */

// const vaciarCarrito = () =>{
//     carrito = [];
//     carritoPizza();
// }

estructuraCarrito();
carritoPizza();



