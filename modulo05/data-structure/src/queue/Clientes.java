package queue;
import java.util.LinkedList;

public class Clientes {

    LinkedList<String> listaClientes = new LinkedList<>();

    public void addCliente(String cliente) {
        listaClientes.add(cliente);
    }

    public int size() {
        return listaClientes.size();
    }

    public String getCliente(int n) {
        return listaClientes.get(n);
    }

}

