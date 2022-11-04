package hashmap;

import java.util.HashMap;
import java.util.Map;

class Shceq {
    private int id;

    public Shceq(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        return 1;
    }

    @Override
    public boolean equals(Object obj) {
        return true;
    }

    @Override
    public String toString() {
        return "Shceq [id=" + id + "]";
    }
}

public class SameHashCodeAndEquals {
    public static void main(String[] args) {
        Shceq one = new Shceq(1);
        Shceq two = new Shceq(2);

        HashMap<Shceq, Integer> map = new HashMap<>();
        map.put(one, 1);
        map.put(two, 2);

        for (Map.Entry<Shceq, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
        /*
         * Shceq [id=1] 2
         */
    }
}
