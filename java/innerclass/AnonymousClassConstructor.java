package innerclass;

public class AnonymousClassConstructor {
    public static void main(String[] args) {
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("t1 - r");
            }
        });

        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("t2 - r");
            }
        });

        t1.start();
        t2.start();
        System.out.println("main");
    }
}
