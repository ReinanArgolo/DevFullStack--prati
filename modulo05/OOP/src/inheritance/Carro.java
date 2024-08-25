package inheritance;

public class Carro extends Veículo{

    public boolean travaEletrica;
    public String tracao;
    public int nmPortas;




    public Carro(boolean travaEletrica, String tracao, int nmPortas) {
        super("Suv", "Renoult", "Ela o que", "Stport", "2020");
        this.travaEletrica = travaEletrica;
        this.tracao = tracao;
        this.nmPortas = nmPortas;

    }

    public static void main(String[] args) {
        Carro meuCarro = new Carro(true, "4x4", 2);


    }
}
