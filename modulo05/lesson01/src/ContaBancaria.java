public class ContaBancaria {
    private double saldo;

    public double consultaSaldo(){
        return saldo;
    }

    public void depositar(double valor) {
        this.saldo += valor;
    }


}
