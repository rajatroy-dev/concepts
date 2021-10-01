/**
 * An Interface that has only one unimplemented method is a functional interface
 */
interface AFunction<T, R> {
    public R thrice(T variable);

    default String whoAmI() {
        return "A Functional Interface!";
    }
}

// Prior to functional interface
class AFunctionImpl implements AFunction<Long, Long> {
    @Override
    public Long thrice(Long variable) {
        return 3 * variable;
    }
}

public class FunctionalInterface {
    public static void main(String[] args) {

        // Prior to functional interface
        AFunction<Long, Long> aFunction = new AFunctionImpl();
        System.out.println(String.format("Non-functional interface: %s", aFunction.thrice(5L)));

        AFunction<Long, Long> newAFunction = (variable) -> 3 * variable;
        System.out.println(String.format("Functional interface: %s", newAFunction.thrice(6L)));

    }
}
