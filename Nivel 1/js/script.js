//Ejercicio 1
function ejercicio1() {
    var nombre = ["R", "I", "G", "O", "B", "E", "R", "T", "A"];

    for (let i = 0; i < nombre.length; i++) {
        console.log(nombre[i]);
    }
}

//Ejercicio 2
function ejercicio2() {
    var nombre = ["R", "I", "G", "O", 4, "B", "E", "R", 7, "T", "A"];
    console.log("Partiendo del nombre RIGO4BER7TA");

    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] == "A" || nombre[i] == "E" || nombre[i] == "I" || nombre[i] == "O" || nombre[i] == "U") {
            console.log("He encontrado la VOCAL: " + nombre[i]);
        } else if (!isNaN(nombre[i])) {
            console.log("Los nombres de personas no contienen el número: " + nombre[i]);
        } else {
            console.log("He encontrado la CONSONANTE: " + nombre[i]);
        }
    }
}

//Ejercicio 3
function ejercicio3() {
    var nombre = ["R", "I", "G", "O", "B", "E", "R", "T", "A"];
    let map = new Map();

    for (let i = 0; i < nombre.length; i++) {
        if (map.has(nombre[i])) {
            var valor = map.get(nombre[i]);
            valor++;
            map.set(nombre[i], valor);
        } else {
            map.set(nombre[i], 1);
        }
    }

    console.log(map);

}

//Ejercicio 4
function ejercicio4() {
    var nombre = ["R", "I", "G", "O", "B", "E", "R", "T", "A"];
    var apellido = ["M", "E", "N", "C", "H", "Ú"];
    var fullName = nombre.concat(" ").concat(apellido);
    console.log(fullName);
}