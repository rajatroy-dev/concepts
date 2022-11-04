package hashmap;

import java.util.HashMap;
import java.util.Map;

class Oak {
    private int id;

    public Oak(int id) {
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
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Oak other = (Oak) obj;
        if (id != other.id)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Oak [id=" + id + "]";
    }
}

public class ObjectsAsKeys {
    public static void main(String[] args) {
        Oak one = new Oak(1);
        Oak two = new Oak(2);

        HashMap<Oak, Integer> map = new HashMap<>();
        map.put(one, 1);
        map.put(two, 2);

        for (Map.Entry<Oak, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
        /*
         * Oak [id=1] 1
         * Oak [id=2] 2
         */
    }
}
