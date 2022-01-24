package covariant;

public class B extends A {
    public Integer method() {
        return 1;
    }

    /*
     * Primitive covariant not supported
     * public short charShortMethod() {
     * return 1;
     * }
     */

    public B meMethod() {
        return new B();
    }
}
