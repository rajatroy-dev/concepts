package Collections;

import java.util.HashMap;
import java.util.Map;

public class Maps {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        map.put("a", "Apple");
        map.put("b", "Ball");
        map.put("c", "Cat");
        map.put("d", "Dog");

        map.forEach((k, v) -> System.out.println(k + " for " + v));
    }
}
