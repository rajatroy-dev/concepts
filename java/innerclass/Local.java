package innerclass;

public class Local {
    public static void main(String[] args) {
        Local local = new Local();
        local.run();
    }

    void run() {
        class LocalClass {
            int localInt = 1;

            int addOne(int number) {
                return number + localInt;
            }
        }
        System.out.println(new LocalClass().addOne(5));
    }
}
