class Filme {
    constructor(titulo, ano, genero, duracao, assistido, avaliacao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.avaliacao = avaliacao;
    }

    FoiAssistido() {
        this.assistido = true;
    }

    avaliacaoFilme(nota) {
        this.avaliacao = nota;
    }

    ExibirAtributos() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao}`);
        console.log(`Assistido: ${this.assistido}`);
        console.log(`Avaliação: ${this.avaliacao}`);
    }
}

const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ifAssistido = false;
const ListaDeFilmes = [];

function main() {
    console.log("Options:");
    console.log("1 - Adicionar Filme");
    console.log("2 - Marcar um filme como assistido");
    console.log("3 - Avaliar um filme");
    console.log("4 - Mostrar a lista de filmes");
    console.log("5 - Quitar do programa");
    input.question("Escolha: ", (escolha) => {
        escolha = parseInt(escolha);
        switch (escolha) {
            case 1:
                input.question("Entre com o título do filme: ", (titulo) => {
                    input.question("Entre com o ano do filme: ", (ano) => {
                        input.question("Entre com o gênero do filme: ", (genero) => {
                            input.question("Entre com a duração do filme: ", (duracao) => {
                                input.question("Marcar o filme como assistido? (true para sim e false para não): ", (assistido) => {
                                    assistido = (assistido === 'true');
                                    if (ifAssistido) {
                                        input.question("Avalie o filme: ", (avaliacao) => {
                                            ListaDeFilmes.push(new Filme(titulo, ano, genero, duracao, assistido, parseFloat(avaliacao)));
                                            main();
                                        });
                                    } else {
                                        ListaDeFilmes.push(new Filme(titulo, ano, genero, duracao, assistido, 0));
                                        main();
                                    }
                                });
                            });
                        });
                    });
                });
                break;
            case 2:
                input.question("Marcar filme como assistido: ", (titulo) => {
                    for (const filme of ListaDeFilmes) {
                        if (titulo === filme.titulo) {
                            filme.FoiAssistido();
                            ifAssistido = true;
                        }
                    }
                    if (ifAssistido) {
                        console.log("Filme marcado como assistido!");
                        ifAssistido = false;
                    } else {
                        console.log("Filme não encontrado!");
                    }
                    main();
                });
                break;
            case 3:
                input.question("Qual filme você quer avaliar: ", (titulo) => {
                    for (const filme of ListaDeFilmes) {
                        if (titulo === filme.titulo) {
                            input.question("Entre com a nota do filme: ", (nota) => {
                                filme.avaliacaoFilme(parseFloat(nota));
                                ifAssistido = true;
                                main();
                            });
                        }
                    }
                    if (ifAssistido) {
                        ifAssistido = false;
                    } else {
                        console.log("Filme não encontrado!");
                        main();
                    }
                });
                break;
            case 4:
                for (const filme of ListaDeFilmes) {
                    filme.ExibirAtributos();
                }
                main();
                break;
            case 5:
                console.log("adeus!");
                input.close();
                process.exit(0);
                break;
            default:
                console.log("Opção inválida!");
                main();
                break;
        }
    });
}

main();
