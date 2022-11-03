package strings;

public class Equality {
    public static void main(String[] args) {
        String a = "abc";
        String b = "abc";
        String c = new String("abc");

        // This will give true.
        // FUCK MAN - I always thought that we should compare.
        // strings only with .equals() otherwise it will return
        // false. I JUST ASSUMED.
        // NEVER ASSUME THINGS. FUCK ME!!! AAAHHH!
        System.out.println(a == b);

        System.out.println(a == c); // false
    }
}
