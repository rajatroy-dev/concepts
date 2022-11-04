package hashmap;

import java.util.HashMap;
import java.util.Map;

class Shc {
    private int id;

    public Shc(int id) {
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
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Shc other = (Shc) obj;
        if (id != other.id)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Shc [id=" + id + "]";
    }
}

public class SameHashCode {
    public static void main(String[] args) {
        Shc one = new Shc(1);
        Shc two = new Shc(2);

        HashMap<Shc, Integer> map = new HashMap<>();
        map.put(one, 1);
        map.put(two, 2);

        // https://stackoverflow.com/a/6493946
        for (Map.Entry<Shc, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
        /*
         * Shc [id=1] 1
         * Shc [id=2] 2
         */
    }
}
