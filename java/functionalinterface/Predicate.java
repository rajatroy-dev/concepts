package functionalinterface;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

enum EmployeeType {
    CONTRACT,
    REGULAR
}

class Employee {
    private String id;
    private String name;
    private EmployeeType employeeType;

    public Employee(String id, String name, EmployeeType employeeType) {
        this.id = id;
        this.name = name;
        this.employeeType = employeeType;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public EmployeeType getEmployeeType() {
        return employeeType;
    }

    public void setEmployeeType(EmployeeType employeeType) {
        this.employeeType = employeeType;
    }

    @Override
    public String toString() {
        return "{ 'id': " + this.id + ", 'name': " + this.name + ", 'employeeType': " + this.employeeType + " }";
    }
}

public class Predicate {
    public static void main(String[] args) {
        ArrayList<Employee> employees = new ArrayList<>();
        employees.add(new Employee("1", "Christina", EmployeeType.REGULAR));
        employees.add(new Employee("2", "Angela", EmployeeType.CONTRACT));
        employees.add(new Employee("3", "David", EmployeeType.REGULAR));

        List<Employee> filtered = employees.stream().filter((e) -> e.getEmployeeType() == EmployeeType.REGULAR)
                .collect(Collectors.toList());

        System.out.println(filtered);
    }
}
