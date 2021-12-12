package MethodReference;

import java.util.ArrayList;
import java.util.function.Function;

class Greet {
    protected String name(String name) {
        return "Hi! " + name;
    }
}

class Greetings extends Greet {
    private String name;

    Greetings(String name) {
        this.name = name;
    }

    public void greet() {
        Function<String, String> func = super::name;

        System.out.println(func.apply(this.name));
    }
}

public class Super {
    public static void main(String[] args) {
        ArrayList<Greetings> names = new ArrayList<>();
        names.add(new Greetings("Anthony"));
        names.add(new Greetings("Beatrice"));
        names.add(new Greetings("Christie"));
        names.add(new Greetings("David"));

        names.stream().forEach(Greetings::greet);
    }
}
