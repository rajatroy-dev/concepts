import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

class Test {
    void print(String str) {
        System.out.println("Hi! " + str);
        ;
    }
}

public class ColonOperator {
    public static void main(String[] args) {
        String[] array = { "Zack", "Yelena", "Xavier" };
        List<String> names = Arrays.asList(array);

        Test test = new Test();
        names.stream().forEach(test::print);

        Consumer<String> consumer = test::print;
        consumer.accept("Anthony");
    }
}
