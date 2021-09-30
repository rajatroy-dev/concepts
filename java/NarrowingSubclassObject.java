class One {
    public String print() {
        return "Class One: Print!";
    }

    public String identityOfOne() {
        return "Class One: Identity of One!";
    }
}

class Two extends One {
    public String print() {
        return "Class Two: Print!";
    }

    public String identityOfTwo() {
        return "Class Two: Identity of Two!";
    }
}

public class NarrowingSubclassObject {
    public static void main(String[] args) {
        One one = new Two();
        Two two = (Two) one;

        System.out.println(two.identityOfOne());
        System.out.println(two.identityOfTwo());
        System.out.println(two.print());
    }
}