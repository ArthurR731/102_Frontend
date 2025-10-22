let alunos = {
    nome: "Ana",
    idade: 16,
    matricula: "8AT123",
    ausente: true
};


console.log(alunos)
console.log(alunos.nome)
console.log("Nome do aluno: %s", alunos.nome)
console.log("Matricula do aluno: %s", alunos.nome)
//--------------------------------------------------------------------------------------------------------------------

let aluno1 = {
    nome: "Ana",
    idade: 16,
    matricula: "8AT123",
    ausente: true
};
let aluno2 = {
    nome: "Muller",
    idade: 15,
    matricula: "8CT123",
    ausente: true
};
let aluno3 = {
    nome: "Felipe",
    idade: 17,
    matricula: "8BT123",
    ausente: false
};
let turma = [aluno1, aluno2, aluno3]

console.log(turma)