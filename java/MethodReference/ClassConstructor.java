package MethodReference;

import java.util.Arrays;
import java.util.List;

class Greetings {
    public Greetings(String name) {
        System.out.println("Hi! " + name);
    }
}

public class ClassConstructor {
    public static void main(String[] args) {
        String[] names = { "Anthony", "Beatrice", "Chloe", "Daniel" };
        List<String> alphabets = Arrays.asList(names);

        alphabets.stream().forEach(Greetings::new);
    }
}
