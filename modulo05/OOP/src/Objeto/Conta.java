package Objeto;

public class Conta {

    private int numeroConta;
    private String titular;
    private int senha;

    public int setNumeroConta(int numero) {
        if(numero < 0) {
            throw new RuntimeException("Número inválido!");
        } else {
            return this.numeroConta = numero;
        }
    }

    public String setTitular(String nome) {
        if(nome == "") {
            throw new RuntimeException("Nome Invalido");
        } else {
            return this.titular = nome;
        }
    }

    public int setSenha(int senha) {
        if (senha < 0) {
            throw new RuntimeException("Senha invalida");
        } else {
            return this.senha = senha;
        }
    }


    public int getNumeroConta() {
        return numeroConta;
    }

    public String getTitular() {
        return titular;
    }

    public int getSenha() {
        return senha;
    }


}
