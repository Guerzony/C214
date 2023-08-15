package atividade1;

public class Main {

        public static void main(String[] args) {
            Filme filme1 = new Filme("Interestelar", 2014,"Ficção Científica",169 ,true, 10);
            filme1.ExibirAtributos();

            Filme filme2 = new Filme("O Senhor dos Anéis: A Sociedade do Anel", 2001,"Fantasia",178,false,1);
            filme2.ExibirAtributos();

            Filme filme3 = new Filme("Clube da Luta",1999,"Suspense", 139 ,false,8);
            filme3.ExibirAtributos();


            filme2.FoiAssistido();

            filme2.avaliacaoFilme(5);


            filme2.ExibirAtributos();
        }
    }

