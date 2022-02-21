package inheritance;

interface First {
    default void print() {
        System.out.println("First interface: print()");
    }
}

interface Second {
    default void print() {
        System.out.println("Second interface: print()");
    }
}

class Child implements First, Second {
    public void print() {
        First.super.print();
        Second.super.print();
    }
}

public class MultipleInheritance {
    public static void main(String[] args) {
        Child child = new Child();
        child.print();
    }
}
