let pizzas = [
    {
        nombre: "Vegetariana",
        precio: 2500,
        ingredientes: ['Pimientos', 'Carne de soja']
    },
    {
        nombre: "Normal",
        precio: 2500,
        ingredientes: ['Jamon', 'Carne roja']
    }
]

class Carro {
    constructor(pizza, ingrediente, precio, cantidad){
        this.pizza = pizza;
        this.ingrediente = ingrediente;
        this.precio = precio;
        this.cantidad = cantidad;
        this.total = cantidad * precio;
    }       
}

const carritoPizza = []

let consulta = window.confirm("Quiere pedir una pizza? Aceptar para continuar o cancelar para no.");
if(consulta == true){
    
    while(consulta){
        let sPizza = prompt("Seleccione pizza [1] Vegetariana | [2] Normal")
    
        while( sPizza != 1 && sPizza != 2 ){
            sPizza = Number(prompt("Debe seleccionar una opcion válida: [1] Vegetariana | [2] Normal"))
        }
    
        let sIngrediente = prompt(`Seleccione ingredientes [1] ${pizzas[sPizza-1].ingredientes[0]} | [2] ${pizzas[sPizza-1].ingredientes[1]}`)
        
        while( sIngrediente != 1 && sIngrediente != 2 ){
            sIngrediente = Number(prompt(`Debe seleccionar una opcion válida: [1] ${pizzas[sPizza-1].ingredientes[0]} | [2] ${pizzas[sPizza-1].ingredientes[1]}`))
        }
    
        let sCantidad = prompt("Cuantas pizzas de este tipo desea?")
        
        while( sCantidad <0 ){
            sCantidad = Number(prompt("Debe seleccionar una opcion válida"))
        }
        carritoPizza.push(new Carro(pizzas[sPizza-1].nombre, pizzas[sPizza-1].ingredientes[sIngrediente-1], pizzas[sPizza-1].precio, sCantidad))

        let otra = window.confirm("Desea agregar otra piza?");
        console.log(otra)
        if(otra == false){
            consulta = false;
            let cuenta = []
            let total = 0
            carritoPizza.forEach(carritoPizza => {
                total = total + carritoPizza.precio * carritoPizza.cantidad
                cuenta.push(`Pizza: ${carritoPizza.pizza} con ${carritoPizza.ingrediente} x ${carritoPizza.cantidad} = ${carritoPizza.precio * carritoPizza.cantidad}`)
            });
            alert(`Cuenta: ${cuenta.join("\n")} \nTotal ${total}`)
        }
    }

}else {
    alert("Si desea pedir una pizza presione F5 o refresque la página.")
}

