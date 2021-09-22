package InheritanceParentParameterizedConstructor;

class Mammal {
    // public Mammal() {}

    public Mammal(int age) {
        System.out.println("Mammal");
    }
}

public class Platypus extends Mammal {
    /**
     * Parent class has a parameterized constructor declared.
     * So, to have a non-parameterized child class constructor:
     *  - we have to explicitly declare a non-parameterized parent class constructor.
     *  - the first statement inside the non-parameterized child constructor should
     *    be a call to the parameterized parent class constructor
     */
    public Platypus() {
        super(5);
        System.out.println("Platypus");
    }

    public static void main(String[] args) {
        new Mammal(5);
    }
}
