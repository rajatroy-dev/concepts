package covariant;

public class A {
    protected Object method() {
        return "1";
    }

    protected char charShortMethod() {
        return 'A';
    }

    protected A meMethod() {
        return new A();
    }
}
