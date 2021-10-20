class Shared {
    synchronized void test1(Shared s2) {
        System.out.println("Test 1: Begin . . .");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException ex) {
            System.err.println(ex);
        }

        s2.test2(this);
        System.out.println("Test 1: End!");
    }

    synchronized void test2(Shared s1) {
        System.out.println("Test 2: Begin . . .");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException ex) {
            System.err.println(ex);
        }

        s1.test1(this);
        System.out.println("Test 2: End!");
    }
}

class Thread1 extends Thread {
    private Shared s1;
    private Shared s2;

    public Thread1(Shared s1, Shared s2) {
        this.s1 = s1;
        this.s2 = s2;
    }

    @Override
    public void run() {
        s1.test1(s2);
    }

}

class Thread2 extends Thread {
    private Shared s1;
    private Shared s2;

    public Thread2(Shared s1, Shared s2) {
        this.s1 = s1;
        this.s2 = s2;
    }

    @Override
    public void run() {
        s2.test2(s1);
    }

}

public class Deadlock {
    public static void main(String[] args) {
        Shared s1 = new Shared();
        Shared s2 = new Shared();

        Thread1 thread1 = new Thread1(s1, s2);
        thread1.start(); // start() when Thread extended no Runnable implmented

        Thread2 thread2 = new Thread2(s1, s2);
        thread2.start();

    }
}
