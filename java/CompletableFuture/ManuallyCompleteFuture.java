package completablefuture;

import java.util.concurrent.CompletableFuture;

class A {
    static void method() {

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Class A!");
    }
}

public class ManuallyCompleteFuture {
    public static void main(String[] args) {
        CompletableFuture<Void> future = CompletableFuture.runAsync(() -> A.method());

        future.complete(null); // Closes the future prematurely
        // future.join(); // Closes the future properly
    }
}
