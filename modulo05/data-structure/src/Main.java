import Lists.CustomList;
import Lists.SinglyLinkedList;
import Lists.Produtos;

import queue.FilaClientes;
import queue.Clientes;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
//        CustomList list = new CustomList();
//
//        list.add(10);
//        list.add(20);
//        list.add(40);
//        list.add(50);
//        list.add(60);
//
//        System.out.println(list.toString());
//
//        System.out.println(list.toString());
//
//        System.out.println(list.get(2));


//        SinglyLinkedList list = new SinglyLinkedList();
//
//        list.add(10);
//        list.add(5);
//        list.add(90);
//
//        System.out.println("Elemnto no índice 0: " + list.get(1));
//
//        ArrayList<Integer> list = new ArrayList<>();
//
//        list.add(89);
//
//        System.out.println(list.get(0));

//    Produtos list = new Produtos();
//
//        list.produtos.add("Pratos");
//        list.produtos.add("Garfos");
//        list.produtos.add("Facas");
//
//        System.out.println(list.produtos.get(1));
//

        Clientes lClientes = new Clientes();
        FilaClientes  filaClientes = new FilaClientes();

        lClientes.addCliente("Marcos");
        lClientes.addCliente("Ana");
        lClientes.addCliente("Paulo");
        lClientes.addCliente("Suzana");

        for (int i = 0; i < lClientes.size(); i++) {
            filaClientes.enqueue(lClientes.getCliente(i));
        }

        for (int i = 0; i < lClientes.size(); i++) {
            filaClientes.dequeue();
            System.out.println("Cliente atendito: " + lClientes.getCliente(i));;

            if (filaClientes.isEmpty()){
                System.out.println("A fila está vazia!");
            }


        }


    }
}