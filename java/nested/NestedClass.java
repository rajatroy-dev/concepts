package nested;

class A {
    // Non-static nested classes are called inner classes.
    class B {
        void method() {
            System.out.println("A -> B -> method!");
        }
    }
}

class C {
    // static nested classes
    static class D {
        void method() {
            System.out.println("C -> D -> method!");
        }
    }
}

public class NestedClass {
    public static void main(String[] args) {
        A.B b = new A().new B();
        b.method();

        C.D d = new C.D();
        d.method();

    }
}
