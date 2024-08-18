package Tree;


class Node {
    int value;
    Node left;

    Node right;

    Node(int value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    Node root;

    BinaryTree() {
        this.root = null;
    }

    public add(int value){
        this.root = addRecursive(root, value);
    }

    private Node addRecursive(Node current, int value) {
        if(current ==  null) {
            return new Node(value);
        }

        if(value < current.value) {
            current.left = addRecursive(current.left, value);
        } else if (value > current.value) {
            current.right = addRecursive(current.right, value);
        }

        return current;
    }

    public void ordenedPrint(Node current) {
        if(current != null) {
            ordenedPrint(current.left);
            System.out.println(current.value);
            ordenedPrint(current.right);
        }
    }

    public static void main(String[] args) {
        BinaryTree arvore = new BinaryTree();

        arvore.add(10);
    }


}
