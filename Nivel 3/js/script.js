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

//Ejercicio 5
function ejercicio5() {
    var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

    var str2 = /[a-z.-]+@[a-z\ñ.-]+\.[a-z]{2,3}/gi;
    var conDuplicados = str.match(str2);
    var resultado = []; //matriz donde guardaremos los correos sin duplicados

    for (let i = 0; i < conDuplicados.length; i++) {
        var valorBuscado = conDuplicados[i];
        //Entra en el siguiente if si el index es -1 (es decir, no está el valor) y lo añadimos.
        if (resultado.indexOf(valorBuscado) < 0) { 
            resultado.push(valorBuscado);
        }
    }
    console.log(resultado);
}