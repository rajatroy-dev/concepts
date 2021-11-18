public class AmbiguousNumberArgs {
    static void print(long a, int b) {
        System.out.println(String.format("a: %d, b: %d", a, b));
    }

    static void print(int a, long b) {
        System.out.println(String.format("a: %d, b: %d", a, b));
    }

    public static void main(String[] args) {
        AmbiguousNumberArgs.print(10, 20);
    }
}
