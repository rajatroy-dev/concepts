package explainenum;

enum CarManufacturersEnum {
    FORD,
    MARUTI,
    HONDA,
    TATA,
    MAHINDRA
}

class CarManufacturersClass {
    static final CarManufacturersClass FORD = new CarManufacturersClass();
    static final CarManufacturersClass MARUTI = new CarManufacturersClass();
    static final CarManufacturersClass HONDA = new CarManufacturersClass();
    static final CarManufacturersClass TATA = new CarManufacturersClass();
    static final CarManufacturersClass MAHINDRA = new CarManufacturersClass();
}

public class ExplainEnum {
    public static void main(String[] args) {
        System.out.println(CarManufacturersEnum.FORD);
        System.out.println(CarManufacturersClass.FORD);
    }
}