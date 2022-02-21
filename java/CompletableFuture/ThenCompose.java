package completablefuture;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

class User {
    private String id;
    private String name;
    private String employeeNumber;

    public User(String id, String name, String employeeNumber) {
        this.id = id;
        this.name = name;
        this.employeeNumber = employeeNumber;
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

    public String getEmployeeNumber() {
        return employeeNumber;
    }

    public void setEmployeeNumber(String employeeNumber) {
        this.employeeNumber = employeeNumber;
    }
}

class Employee {
    private String employeeNumber;
    private Double salary;

    public Employee(String employeeNumber, Double salary) {
        this.employeeNumber = employeeNumber;
        this.salary = salary;
    }

    public String getEmployeeNumber() {
        return employeeNumber;
    }

    public void setEmployeeNumber(String employeeNumber) {
        this.employeeNumber = employeeNumber;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

}

class Data {

    private static List<User> users = Arrays.asList(new User("1", "Anthony", "AN1"), new User("2", "Beatrice", "BE1"),
            new User("3", "Caroline", "CA1"), new User("4", "David", "DA1"));

    private static List<Employee> employees = Arrays.asList(new Employee("AN1", 100600.00),
            new Employee("BE1", 100500.00),
            new Employee("CA1", 100300.00), new Employee("DA1", 100400.00));

    public static String getEmployeeNumber(String userId) {
        User user = users.stream().filter((u) -> u.getId().equals(userId)).findFirst().orElse(null);

        return user.getEmployeeNumber();
    }

    public static Double getEmployeeSalary(String employeeNumber) {
        Employee employee = employees.stream().filter((e) -> e.getEmployeeNumber().equals(employeeNumber)).findFirst()
                .orElse(null);

        return employee.getSalary();
    }
}

public class ThenCompose {

    static CompletableFuture<String> getEmployeeNumber(String userId) {
        return CompletableFuture
                .supplyAsync(() -> Data.getEmployeeNumber(userId));
    }

    static CompletableFuture<Double> getEmployeeSalary(String employeeNumber) {
        return CompletableFuture.supplyAsync(() -> Data.getEmployeeSalary(employeeNumber));
    }

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        CompletableFuture<Double> result = getEmployeeNumber("1")
                .thenCompose((employeeNumber) -> getEmployeeSalary(employeeNumber));

        System.out.println(result.get());
    }
}
