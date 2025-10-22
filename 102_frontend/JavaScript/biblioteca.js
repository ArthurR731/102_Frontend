
let biblioteca = {
        livro1: {
        nome: "Dom Casmurro",
        autor: "Machado de Assis",
        ano: 1899,
        genero: "Romance"
    },
        livro2: {
        nome: "1984",
        autor: "George Orwell",
        ano: 1949,
        genero: "Ficção"
    },
        livro3: {
        nome: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        ano: 1943,
        genero: "Fábula"
    },
        livro4: {
        nome: "Cem Anos de Solidão",
        autor: "Gabriel García Márquez",
        ano: 1967,
        genero: "Romance"
    },
        livro5: {
        nome: "A Metamorfose",
        autor: "Franz Kafka",
        ano: 1915,
        genero: "Ficção"
    },
        livro6: {
        nome: "Orgulho e Preconceito",
        autor: "Jane Austen",
        ano: 1813,
        genero: "Romance"
    }}

    for(let chave in biblioteca){
        console.log(biblioteca[chave].nome)
    }

    biblioteca.livro7 ={
        nome: "O Senhor dos Anéis: A Sociedade do Anel",
        autor: "J. R. R. Tolkien",
        ano: 1954,
        genero: "Aventura"
    }

    console.log("------------------Livros de romance-----------------------------")
    let gen = "Romance";

    for(let chave in biblioteca){
        if (biblioteca[chave].genero === gen){
            console.log(biblioteca[chave].nome)
        }
    }
    
    console.log("---------------mais antigo-------------")

    let nomelivro = ""
    let anolivro = 99999

    for(let chave in biblioteca){
        if(biblioteca[chave].ano < anolivro){
            anolivro = biblioteca[chave].ano
            nomelivro = biblioteca[chave].nome
        }
    }
    console.log(nomelivro, "-", anolivro)