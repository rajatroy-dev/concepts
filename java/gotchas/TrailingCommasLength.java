package gotchas;

public class TrailingCommasLength {
    public static void main(String[] args) {
        int trailingCommas = "a,b,c,d,,,".split(",").length;
        int leadingCommas = ",,,a,b,c,d".split(",").length;

        boolean result = trailingCommas == leadingCommas;

        System.out.println("Gotcha! Trailing Commas == Leading Commas ? " + result);
    }
}
