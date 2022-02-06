package callback;

import java.lang.reflect.InvocationTargetException;

interface Branch {
    double fee();
}

class Mechanical implements Branch {

    @Override
    public double fee() {
        return 350000;
    }

}

class ComputerScience implements Branch {

    @Override
    public double fee() {
        return 355000;
    }

}

public class Callback {
    public static void main(String[] args)
            throws ClassNotFoundException, InstantiationException, IllegalAccessException, IllegalArgumentException,
            InvocationTargetException, NoSuchMethodException, SecurityException {
        Class c = Class.forName("callback.Mechanical");
        Branch branch = (Branch) c.getDeclaredConstructor().newInstance();
        System.out.println(branch.fee());
    }
}
