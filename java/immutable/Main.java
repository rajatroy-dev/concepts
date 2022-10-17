package immutable;

final class Immutable {
    final String fieldOne;
    final String fieldTwo;

    public Immutable(String fieldOne, String fieldTwo) {
        this.fieldOne = fieldOne;
        this.fieldTwo = fieldTwo;
    }

    public String getFieldOne() {
        return fieldOne;
    }

    public String getFieldTwo() {
        return fieldTwo;
    }

    void setFieldOne(String fieldOne) {
        // this.fieldOne = fieldOne; // The final field Immutable.fieldOne cannot be assigned
    }

    void setFieldTwo(String fieldTwo) {
        // this.fieldTwo = fieldOne; // The final field Immutable.fieldTwo cannot be assigned
    }
}

public class Main {
    public static void main(String[] args) {
        // Nagarro Interview Question
        Immutable immutable = new Immutable("fieldOne", "fieldTwo");

        System.out.println(immutable.getFieldOne());
        System.out.println(immutable.getFieldTwo());
    }
}
