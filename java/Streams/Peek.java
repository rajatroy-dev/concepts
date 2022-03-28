package streams;

import java.util.ArrayList;
import java.util.stream.Collectors;

public class Peek {
    public static void main(String[] args) {
        ArrayList<Integer> integers = new ArrayList<>();
        integers.add(1);
        integers.add(2);
        integers.add(3);
        integers.add(4);
        integers.add(5);
        integers.add(6);
        integers.add(7);
        integers.add(8);
        integers.add(9);
        integers.add(10);

        integers.stream().peek(e -> System.out.println(e)); // prints nothing as no terminal operation
        integers.stream().peek(e -> System.out.println(e)).collect(Collectors.toList()); // prints values
    }
}
