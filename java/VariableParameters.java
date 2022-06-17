public class VariableParameters {
    /*
     * If we are using variable parameters, then it has to be the last argument
     * passed to a method.
     * 
     * private static void woahVariableParameters(String... args, String anotherOne)
     * { for (String string : args) { System.out.println(string); } }
     */

    private static void woahVariableParameters(String anotherOne, String... args) {
        System.out.println(anotherOne);
        for (String string : args) {
            System.out.println(string);
        }
    }

    public static void main(String[] args) {
        woahVariableParameters("Alex", "Robert", "Stephanie", "Neenu");
    }
}
