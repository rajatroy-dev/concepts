package functionalinterface;

import java.util.function.Predicate;

public class UnderstandingPredicate {
    public static void main(String[] args) {
        Predicate<Integer> greaterThanTen = i -> i > 10;
        System.out.println(greaterThanTen.test(20)); // whether number is greaterThanTen

        Predicate<Integer> lesserThanTwenty = i -> i < 20;
        System.out.println(lesserThanTwenty.negate().test(21)); // !lesserThanTwenty

        System.out.println(greaterThanTen.and(lesserThanTwenty).test(15)); // chaining with and

        System.out.println(greaterThanTen.or(lesserThanTwenty).test(31)); // chaining with or
    }
}
