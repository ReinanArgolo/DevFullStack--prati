package Objeto.ContaBancaria.Conta;

import java.util.ArrayList;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;



public class DadosDaConta {
    public int numeroConta;
    public String titular;
    private double saldo;

    public String getExtrato(int n) {
        return extrato.get(n);

    }

    ArrayList<String> extrato = new ArrayList<>();

//    public DadosDaConta(String nome, int numero) {
//        this.numeroConta = numero;
//        this.titular = nome;
//
//    }

    public void Depositar(double valor) {
        this.saldo += valor;
        int hash = gerarHash();
        LocalDateTime agora = LocalDateTime.now();

        registrarNoExtrato(valor, hash, agora);
    }

    public void registrarNoExtrato(double valor, int hash, LocalDateTime time) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = time.format(formatter);
        String resultado = String.format("%.2f - %d (%s)", valor, hash, formattedTime);

        extrato.add(resultado);
    }

    private int gerarHash() {
        LocalDateTime agora = LocalDateTime.now();
        return agora.hashCode();
    }


    public static void main(String[] args) {
        DadosDaConta Dados = new DadosDaConta();

        Dados.Depositar(100);

        System.out.println(Dados.getExtrato(0));


    }



}
