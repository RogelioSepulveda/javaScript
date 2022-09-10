



const elegirMenu = () => {
    do {
        let numero = prompt("Seleccione el tipos de pizza: 1- Vegetariana 2- No vegetariana");
    
        if (Number(numero) == numero) {
            if (numero == 1 || numero == 2) {
                if (numero == 1) {
                alert("Menu vegetariano");  
                agregarIngredienteVegetariano();      
                }
                else if (numero == 2) {
                alert("Menu pizza normal");
                agregarIngredienteCarne();
                }			
            }		
            else {
                alert("Elección erronea");
            }
        }
        else {
            if (numero != undefined) {	
                alert("Introduce un numero valido del menú");
            }
        }
    } while (numero != undefined);
    
}



const agregarIngredienteVegetariano = () => {
    let ingrediente = Number(prompt(`Introduce el ingrediente que deseas: 
            1.-Pimenton
            2.-Carne soya `))

            if (ingrediente == "pimientos"){
                alert("Pimientos agregados")
                } else if(ingrediente === "Soya") {
                alert("Soya agregado")        
                }
                switch (ingrediente){
                case "pimientos" : 
                precio = 400;
                break;
                case "soya":  
                mensaje = "soya"
                precio = 500
                break;
                default: 
                mensaje = "El ingrediente seleccionado no esta en el menú, Por favor seleccione un ingrediente valido"
                break;
                }       
}


const agregarIngredienteCarne = () => {
            alert("Los ingredientes de pizzas normal son jamón y carne roja")

            let ingrediente = Number(prompt(`Introduce el ingrediente que deseas: 
            1.-Jamón
            2.-Carne roja`))
            if (ingrediente === 1){
            alert("Jamón agregados")
            } else if(ingrediente === 2) {
            alert("carne roja agregado")        
            }            
            switch (ingrediente){
                case 1 : 
                mensaje = " Su pedido es pizza normal con queso mozzarella, tomate y jamón"
                break;
                case 2:  
                mensaje = "Su pedido es pizza normal con queso mozzarella, tomate y carne roja"
                break;
                default: 
                mensaje = "El ingrediente seleccionado no esta en el menú, Por favor seleccione un ingrediente valido"
                break;
            }  
            alert(mensaje + " Muchas gracias por su pedido")
}


const InicarConsulta = () => {
    let abrirMenu = prompt("Desea iniciar su pedido: 1- si o 2- no")
    if(abrirMenu == 1 || abrirMenu == 2){
        if(abrirMenu == 1){
            elegirMenu();
        }else {
            alert("Su pedido ha sido cancelo")
        }

    }else{
        alert("opcion incorrecta")
        InicarConsulta();
    }
}

alert("Hola a Don Roka napoli");
InicarConsulta();


let pizzas = prompt("agregar un tipo de pizza vegetariana o normal");
        
        if (pizzas === "vegetariana" || pizzas == "normal"){
            
            switch (pizzas){
            case "vegetariana" :         
            precio : 2500;
            break;
            case "normal": 
            precio: 2600; 
            break;
            default: 
            mensaje = "El ingrediente seleccionado no esta en el menú, Por favor seleccione un ingrediente valido"
            break;
            }       
        console.log(carritoPizza);   
    }