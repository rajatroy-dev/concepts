package innerclass;

public class AnonymousClass {
    public static void main(String[] args) {
        Thread t1 = new Thread() {
            @Override
            public void run() {
                System.out.println("t1");
            }
        };

        Thread t2 = new Thread() {
            @Override
            public void run() {
                System.out.println("t2");
            }
        };

        t1.start();
        t2.start();
        System.out.println("main");
    }
}