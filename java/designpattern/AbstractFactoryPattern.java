package designpattern;

enum CarType {
    HATCHBACK, SEDAN, SUV
}

interface Car {
    void showCar(CarType type);
}

class Tata implements Car {
    @Override
    public void showCar(CarType type) {
        switch (type) {
            case HATCHBACK:
                System.out.println("Tiago");
                break;
            case SEDAN:
                System.out.println("Tigor");
                break;
            case SUV:
                System.out.println("Nexon");
                break;
            default:
                break;
        }
    }
}

class Mahindra implements Car {
    @Override
    public void showCar(CarType type) {
        switch (type) {
            case HATCHBACK:
                System.out.println("KUV100");
                break;
            case SEDAN:
                System.out.println("eVerito");
                break;
            case SUV:
                System.out.println("XUV700");
                break;
            default:
                break;
        }
    }
}

class Mercedes implements Car {
    @Override
    public void showCar(CarType type) {
        switch (type) {
            case HATCHBACK:
                System.out.println("A-Class");
                break;
            case SEDAN:
                System.out.println("E-Class");
                break;
            case SUV:
                System.out.println("GLA");
                break;
            default:
                break;
        }
    }
}

class Audi implements Car {
    @Override
    public void showCar(CarType type) {
        switch (type) {
            case HATCHBACK:
                System.out.println("S5");
                break;
            case SEDAN:
                System.out.println("A6");
                break;
            case SUV:
                System.out.println("Q3");
                break;
            default:
                break;
        }
    }
}

interface AbstractFactory {
    Car getCar(String company);
}

class IndianCarFactory implements AbstractFactory {
    @Override
    public Car getCar(String company) {
        if (company.equalsIgnoreCase("TATA")) {
            return new Tata();
        } else if (company.equalsIgnoreCase("MAHINDRA")) {
            return new Mahindra();
        }

        return null;
    }
}

class ForeignCarFactory implements AbstractFactory {
    @Override
    public Car getCar(String company) {
        if (company.equalsIgnoreCase("MERCEDES")) {
            return new Mercedes();
        } else if (company.equalsIgnoreCase("AUDI")) {
            return new Audi();
        }

        return null;
    }
}

class FactoryProducer {
    public static AbstractFactory getFactory(boolean isIndian) {
        if (isIndian) {
            return new IndianCarFactory();
        } else {
            return new ForeignCarFactory();
        }
    }
}

public class AbstractFactoryPattern {
    public static void main(String[] args) {
        AbstractFactory carFactory = FactoryProducer.getFactory(false);
        Car car = carFactory.getCar("MERCEDES");
        car.showCar(CarType.HATCHBACK);
    }
}
