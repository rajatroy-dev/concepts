package hashmap;

import java.util.HashMap;
import java.util.Map;

class Seq {
    private int id;

    public Seq(int id) {
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
        return true;
    }

    @Override
    public String toString() {
        return "Seq [id=" + id + "]";
    }
}

public class SameEquals {
    public static void main(String[] args) {
        Seq one = new Seq(1);
        Seq two = new Seq(2);

        HashMap<Seq, Integer> map = new HashMap<>();
        map.put(one, 1);
        map.put(two, 2);

        // https://stackoverflow.com/a/6493946
        /*
         * If two keys are equal but their hashCode() method returns different hash
         * codes, then the equals() and hashCode() methods of the key class violate the
         * contract and you'll get strange results when using those keys in a HashMap.
         */
        for (Map.Entry<Seq, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
        /*
         * Seq [id=1] 1
         * Seq [id=2] 2
         */
    }
}
