class Singleton {
    private static Singleton singleton = null;

    private Singleton() {
    }

    public static Singleton getInstance() {
        if (singleton == null)
            singleton = new Singleton();

        return singleton;
    }
}

public class SingletonClass {
    public static void main(String[] args) {
        Singleton first = Singleton.getInstance();
        Singleton second = Singleton.getInstance();

        if (first == second)
            System.out.println("One instance of singleton class in the whole application context");
        else
            System.out.println("Your Singleton class definition has an error");
    }
}
