package compare;

import java.util.Arrays;
import java.util.Comparator;

class EmployeeAgeComparator implements Comparator<Employee> {
    public int compare(Employee first, Employee second) {
        if (first.getAge() < second.getAge())
            return -1;
        else if (first.getAge() > second.getAge())
            return 1;

        return 0;
    }
}

class EmployeeNameComparator implements Comparator<Employee> {
    public int compare(Employee first, Employee second) {
        return first.getName().compareTo(second.getName());
    }
}

public class ComparatorExample {
    public static void main(String[] args) {
        Employee a = new Employee("1", "Charlie", "Regular", 23);
        Employee b = new Employee("2", "Annie", "Contract", 25);

        Employee[] array = { a, b };
        System.out.println(array[0].getName());
        System.out.println(array[1].getName());

        Arrays.sort(array, new EmployeeNameComparator());
        System.out.println(array[0].getName());
        System.out.println(array[1].getName());

        Arrays.sort(array, new EmployeeAgeComparator());
        System.out.println(array[0].getName());
        System.out.println(array[1].getName());
    }
}
