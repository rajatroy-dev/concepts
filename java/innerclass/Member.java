package innerclass;

public class Member {
    int memberInt = 1;

    class Inner {
        void print() {
            System.out.println("memberInt: " + memberInt);
        }
    }

    public static void main(String[] args) {
        Member.Inner inner = new Member().new Inner();
        inner.print();
    }
}
