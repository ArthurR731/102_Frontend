let numeros = [1, 2, 3]
console.log(numeros);
numeros.push (6)

console.log(numeros);

numeros.shift (1);
console.log(numeros);

numeros.unshift(-3);
console.log(numeros)

console.log(numeros[3]);

//=====================================================================

let garage = ["BYD", "Tesla", "Dodge", "Audi", "Lamborghini", "Jaguar", "Subaru", "Pagani", "Mazda"]
console.log(garage[6])

garage.push("Toyota")

console.log("tamanho do array", garage.length)

for (let i = 0; i < garage.length; i++) {
    console.log("Carros nº %d:", i+1)
    console.log("Marca: %s", garage[i])
}

for (carro in garage) {
    console.log(carro in garage);
    }
