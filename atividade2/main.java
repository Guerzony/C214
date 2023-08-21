package atividade2;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.List;
public class main {
    static boolean  ifAssistido;
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        List<Filme> ListaDeFilmes = new ArrayList<Filme>();
        while (true) {
            System.out.println("Options:");
            System.out.println("1 - Adicionar Filme");
            System.out.println("2 - Marcar um filme como assistido");
            System.out.println("3 - Avaliar um filme");
            System.out.println("4 - Mostrar a lista de filmes");
            System.out.println("5 - Quitar do programa");
            System.out.print("Escolha: ");
            int escolha = input.nextInt();

            switch (escolha) {
                case 1:
                    System.out.print("Entre com o titulo do filme: ");
                    String titulo = input.next();
                    System.out.print("Entre com o ano do filme: ");
                    int ano = input.nextInt();
                    System.out.print("Entre com o genero do filme: ");
                    String genero = input.next();
                    System.out.print("Entre com o duracao do filme: ");
                    String duracao = input.next();
                    System.out.print("Marcar o filme como assistido? (true para sim e false para nao): ");
                    boolean assistido = input.nextBoolean();
                    if(ifAssistido){
                        System.out.println("Avalie o filme: ");
                        float avaliacao = input.nextFloat();
                        ListaDeFilmes.add(new Filme(titulo, ano, genero, duracao, assistido, avaliacao));
                    }else
                        ListaDeFilmes.add(new Filme(titulo, ano, genero, duracao, assistido, 0));
                    break;
                case 2:
                    System.out.print("Marcar filme como assistido: ");
                    titulo = input.next();
                    for(Filme filme: ListaDeFilmes){
                        if( titulo.equals(filme.titulo)) {
                            filme.FoiAssistido(titulo);
                            ifAssistido = true;
                        }
                    }
                    if(ifAssistido){
                        System.out.println("Filme marcado como assistido!");
                        ifAssistido = false;
                    }else{
                        System.out.println("Filme nao encontrado!");
                    }
                    break;
                case 3:
                    System.out.print("Qual filme voce quer avaliar: ");
                    titulo = input.next();
                    for(Filme filme: ListaDeFilmes){
                        if(titulo.equals(filme.titulo)) {
                            System.out.print("Entre com a nota do filme: ");
                            float nota = input.nextFloat();
                            filme.avaliacaoFilme(nota);
                            ifAssistido = true;
                        }
                    }
                    if(ifAssistido){
                        ifAssistido = false;
                    }
                    else{
                        System.out.println("Filme nao encontrado!");
                    }

                    break;
                case 4:
                    for(Filme filme : ListaDeFilmes){
                        filme.ExibirAtributos();
                    }
                    break;
                case 5:
                    System.out.println("adeus!");
                    input.close();
                    System.exit(0);
                    break;
                default:
                    System.out.println("Opção invalida!");
                    break;
            }
        }
    }
}
