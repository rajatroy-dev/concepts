package inheritance;

class A {
    public void method(int a) {
        System.out.println("Class A - method parameter: " + a);
    }
}

class B extends A {
    public void method(double b) {
        System.out.println("Class B - method parameter: " + b);
    }
}

public class AmbiguousMethodOverriding {
    public static void main(String[] args) {
        new B().method(10);
    }
}
