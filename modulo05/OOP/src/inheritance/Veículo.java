package inheritance;

public class Veículo {
    public String modelo;
    public String marca;
    public String tipo;
    public String categoria;
    public String anoFabricacao;

    public Veículo(String modelo, String marca, String tipo, String categoria, String anoFabricacao) {
        this.modelo = modelo;
        this.marca = marca;
        this.tipo = tipo;
        this.categoria = categoria;
        this.anoFabricacao = anoFabricacao;
    }


    void ligar() {
        System.out.println("O veículo está ligado!");
    }

    void acelerar() {
        System.out.println("Está acelerando!");
    }
}
