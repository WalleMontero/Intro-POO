class gato {



    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";

    constructor(nombre, edad, raza, caracter){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;

    }

    maullar(){
        console.log("MIAUUUUU");
        return "MIAUUUUU";
    }
    
    dormir(){
        console.log("Zzzzzzzz");
        return "Zzzzzzzz";
    }

    ronronear(){
        console.log("Rrrrrrrr");
        return "Rrrrrrrr";
    }

    caminar(){
        console.log("*walking");
        return "walking";
    }
}

var mew = new gato("Mew", 7, "Americano", "Amistoso");
var caramelo = new gato("Caramelo", 2, "Americano", "Agresivo");
var mowyo = new gato("Mowyo", 3, "Desconocido", "Amistoso");
var chombo = new gato("Chombo", 10, "Persa", "Huevon");
var capullo = new gato("Capullo", 5, "Americano", "Amistoso");

const objeto1 = {
    nombre: "walle",
    edad: 25,
    ciudad: "Morelia",
    caracter: "Fuerte"
};

