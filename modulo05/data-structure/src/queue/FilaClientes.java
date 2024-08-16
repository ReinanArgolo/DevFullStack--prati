package queue;

public class FilaClientes {
    private FilaClientes.Node first;
    private FilaClientes.Node last;

    public FilaClientes() {
        this.first = null;
        this.last = null;
    }

    private static class Node {
        String data;
        FilaClientes.Node next;

        public Node(String data) {
            this.data = data;
            this.next = null;
        }
    }

    public void enqueue (String data) {
        FilaClientes.Node newNode = new FilaClientes.Node(data);

        if(this.last == null){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    public String dequeue() {
        if(this.first == null) {
            throw new IllegalStateException("Fila Vazia");

        }

        String data = this.first.data;
        this.first = this.first.next;

        if (this.first == null) {
            this.last = null;
        }

        return data;

    }

    public boolean isEmpty() {
        return this.first == null;
    }
}
