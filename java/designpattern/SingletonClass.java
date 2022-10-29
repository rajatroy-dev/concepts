package designpattern;

import java.io.Serializable;

// https://medium.com/@kevalpatel2106/how-to-make-the-perfect-singleton-de6b951dfdb0

class Singleton implements Serializable {
    /*
     * Without volatile modifier, it’s possible for another thread in Java to see
     * half initialized state of singleton variable, but with volatile variable
     * guaranteeing happens-before relationship, all the write will happen on
     * volatile singleton before any read of singleton variable.
     */
    private static volatile Singleton singleton = null;

    private Singleton() {
        /*
         * Java Reflection is a process of examining or modifying the run-time behavior
         * of a class at run time.
         * 
         * You can make the new instance of the Singleton class by changing the
         * constructor visibility as public in run-time and create new instance using
         * that constructor.
         * 
         * Prevent reflection API.
         */
        if (singleton != null) {
            throw new RuntimeException("You cannot call a private constructor.");
        }
    }

    public static Singleton getInstance() {
        if (singleton == null) {
            synchronized (SingletonClass.class) { // Check for the second time.
                // if there is no instance available... create new one
                if (singleton == null)
                    singleton = new Singleton();
            }
        }
        return singleton;
    }

    /*
     * To prevent creation of another instance you have to provide the
     * implementation of readResolve() method. readResolve() replaces the object
     * read from the stream. This ensures that nobody can create another instance by
     * serializing and deserializing the singleton.
     */
    protected Singleton readResolve() {
        return getInstance();
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
