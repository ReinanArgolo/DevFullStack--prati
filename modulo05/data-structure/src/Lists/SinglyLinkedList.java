package Lists;

public class SinglyLinkedList {

    private Node head;

    private static class Node {
        int data;

        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }

    }

    public SinglyLinkedList() {
        this.head = null;


    }

    public void add(int data){
        Node newNode = new Node(data);

        if(this.head == null) {
            this.head = newNode;
        } else {
            Node current = this.head;
            while(current.next != null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    public int get (int index) {
        Node current = this.head;

        int count = 0;
        while (current != null) {
            if(count == index) {
                return current.data;
            }
            count++;
            current = current.next;
        }

        throw new IndexOutOfBoundsException("Index fora dos limites/inválido");
    }

    public void remove(int index) {
        Node current = this.head;

        if(this.head == null) {
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido");
        }

        if(index == 0) {
            this.head = this.head.next;
            return;
        }

        int count = 0;
        Node previus = null;

        while(current != null && count < index) {
            previus = current;
            current = current.next;
            count++;
        }

        if (current.next == null) {
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido");
        }

        previus.next = current.next;
    }

    public int size() {
        int count = 0;

        Node current = this.head;

        while(current != null) {
            count++;
            current = current.next;
        }

        return count;
    }

    public boolean isEmpty() {
        return this.head == null;
    }

}
