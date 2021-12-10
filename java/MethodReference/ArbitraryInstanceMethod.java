package MethodReference;

import java.util.ArrayList;

class Greetings {
    private String name;

    public Greetings(String name) {
        this.name = name;
    }

    public void greet() {
        System.out.println("Hi! " + this.name);
    }
}

public class ArbitraryInstanceMethod {
    public static void main(String[] args) {
        ArrayList<Greetings> greetings = new ArrayList<>();
        greetings.add(new Greetings("Anthony"));
        greetings.add(new Greetings("Beatrice"));
        greetings.add(new Greetings("Christie"));
        greetings.add(new Greetings("David"));

        greetings.stream().forEach(Greetings::greet);
    }
}
