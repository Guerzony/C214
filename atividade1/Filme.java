package atividade1;

public class Filme {
    public String titulo;
    public int ano;
    public String genero;
    public float duracao;
    public boolean assistido;
    public float avaliacao;

    public Filme(String titulo, int ano, String genero, float duracao, boolean assistido, float avaliacao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.avaliacao = avaliacao;
    }

    public void ExibirAtributos(){
        System.out.println("Filme: ");
        System.out.println("Titulo: " + titulo);
        System.out.println("Ano: " + ano);
        System.out.println("Genero: " + genero);
        System.out.println("Duracao: " + duracao + " minutos");
        System.out.println("Assistido: " + assistido);
        System.out.println("Avaliacao: " + avaliacao);
        System.out.println(" ");
    }
    public void FoiAssistido(){
        this.assistido = true;
    }
    public void avaliacaoFilme(float nota){
        if(nota <= 10) {
            this.avaliacao = nota;
        }
        else{
            System.out.println("Nota incorreta!");
        }
    }
}