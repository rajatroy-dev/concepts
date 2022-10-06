package streams;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Employee {
    private String name;
    private Integer age;

    public Employee(String name, Integer age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Name: " + this.name + ", Age: " + this.age;
    }
}

public class SortWithLambdaComparator {
    public static void main(String[] args) {
        ArrayList<Employee> list = new ArrayList<>();
        list.add(new Employee("Rajat", 28));
        list.add(new Employee("Rajesh", 28));
        list.add(new Employee("Ajeet", 30));
        list.add(new Employee("Abhishek", 27));
        list.add(new Employee("Binod", 25));

        List<Employee> sorted = list.stream().sorted((e1, e2) -> {
            if (e1.getAge() > e2.getAge()) {
                return 1;
            } else if (e1.getAge() < e2.getAge()) {
                return -1;
            } else {
                return e1.getName().compareTo(e2.getName());
            }
        }).collect(Collectors.toList());

        System.out.println(sorted);
    }
}
