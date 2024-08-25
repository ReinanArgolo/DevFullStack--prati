package Objeto;

public class Pessoa {

    String nome;

    String CPF;

    String nascimento;

    double altura;

    double peso;

    int idade;


    void caminha() {
        System.out.println("Caminhando...");
    }

    void estuda() {
        System.out.println("Estudando...");
    }


    void programa() {
        System.out.println("Promgramando...");
    }


    public static void main(String[] args) {
        Pessoa minhaPessoa = new Pessoa();

        minhaPessoa.altura = 10.8;
        System.out.println(minhaPessoa.altura);
    }
}
