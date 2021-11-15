interface Factory {
    void whoAmI();
}

class FirstFactory implements Factory {
    public void whoAmI() {
        System.out.println("I am First Factory!");
    }
}

class SecondFactory implements Factory {
    public void whoAmI() {
        System.out.println("I am Second Factory!");
    }
}

class FindFactory {
    static Factory getFactory(String factoryType) {
        if (factoryType.equalsIgnoreCase("FirstFactory"))
            return new FirstFactory();
        if (factoryType.equalsIgnoreCase("SecondFactory"))
            return new SecondFactory();

        return null;
    }
}

public class FactoryMethods {
    public static void main(String[] args) {

        String factoryType = "secondFactory";

        Factory factory = FindFactory.getFactory(factoryType);

        factory.whoAmI();
    }
}
