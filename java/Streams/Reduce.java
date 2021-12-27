package Streams;

import java.util.Arrays;
import java.util.List;

public class Reduce {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);

        System.out.println(list.stream().reduce((accumulate, value) -> accumulate + value).get());
        System.out.println(list.stream().reduce(20, (accumulate, value) -> accumulate + value));
    }
}
