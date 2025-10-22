let frutas = ["banana", "uva", "kiwi", "manga", "caju"];

// adicione 2 no inicio
frutas.unshift("limão", "mamão");
console.log(frutas);

// remova 1 do final
frutas.pop();
console.log(frutas);

// adicione em indices 0, 2 e 3
frutas.splice(0, 0, "maçã");
frutas.splice(3, 0, "melancia");
frutas.splice(5, 0, "melão");
console.log(frutas);

// remova 1 do indice 1
frutas.splice(1, 1);
for (let i = 0; i < frutas.length; i++) {
    console.log("fruta %d: %s", i, frutas[i])
}
