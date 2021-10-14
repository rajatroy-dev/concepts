import java.io.EOFException;
import java.io.IOException;

class A {
    // Example 1: Parent class method throws a subclass exception
    // public String methodOne() throws EOFException {
    //     return "Class A: methodOne.";
    // }

    // Example 2: Parent class method throws a superclass exception
    public String methodTwo() throws IOException {
        return "Class A: methodTwo.";
    }

    // Example 3: Parent class method throws same exception
    public String methodThree() throws IOException {
        return "Class A: methodThree.";
    }

    // Example 4: Parent class method throws no exception
    // public String methodFour() {
    //     return "Class A: methodFour.";
    // }

    // Example 5: Parent class method throws no exception
    public String methodFive() {
        return "Class A: methodFive.";
    }
}

class B extends A {
    // Example 1: Child class method throws a superclass exception
    // public String methodOne() throws IOException {
    //     return "Class B: methodOne.";
    // }

    // Example 2: Child class method throws a subclass exception
    public String methodTwo() throws EOFException {
        return "Class B: methodTwo.";
    }

    // Example 3: Child class method throws same exception
    public String methodThree() throws IOException {
        return "Class B: methodThree.";
    }

    // Example 4: Child class method throws checked exception
    // public String methodFour() throws IOException {
    //     return "Class B: methodFour.";
    // }

    // Example 5: Child class method throws unchecked exception
    public String methodFive() throws ArithmeticException {
        return "Class B: methodFive.";
    }
}

public class ExceptionThrownInInhertitedClassMethod {
    public static void main(String[] args) throws IOException {
        B b = new B();
        b.methodTwo();
        b.methodThree();
        b.methodFive();
    }
}
