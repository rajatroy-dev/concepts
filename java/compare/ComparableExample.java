package compare;

import java.util.Arrays;

public class ComparableExample {
    public static void main(String[] args) {
        Employee a = new Employee("1", "Charlie", "Regular", 23);
        Employee b = new Employee("2", "Annie", "Contract", 25);

        Employee[] array = { b, a };
        System.out.println(array[0].getName());
        System.out.println(array[1].getName());
        
        Arrays.sort(array);
        System.out.println(array[0].getName());
        System.out.println(array[1].getName());
    }
}
