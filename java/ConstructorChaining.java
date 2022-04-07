public class ConstructorChaining {
    private String one;
    private String two;
    private String three;

    public ConstructorChaining() {
        System.out.println("ConstructorChaining()");
    }
    
    public ConstructorChaining(String one) {
        this();
        this.one = one;
        System.out.println("ConstructorChaining(one)");
    }
    
    public ConstructorChaining(String one, String two) {
        this(one);
        this.two = two;
        System.out.println("ConstructorChaining(one, two)");
    }
    
    public ConstructorChaining(String one, String two, String three) {
        this(one, two);
        this.three = three;
        System.out.println("ConstructorChaining(one, two, three)");
    }

    public static void main(String[] args) {
        ConstructorChaining cc = new ConstructorChaining("one", "two", "three");

        System.out.println(cc.one);
        System.out.println(cc.two);
        System.out.println(cc.three);
    }
}
