package designpattern;

final class Vehicle {
    // required parameters
    private String manufacturer;
    private String model;
    private int wheels;
    private String engine;

    // optional parameters
    private String stereoSpeakers;

    public String getManufacturer() {
        return manufacturer;
    }

    public String getModel() {
        return model;
    }

    public String getEngine() {
        return engine;
    }

    public int getWheels() {
        return wheels;
    }

    public String getStereoSpeakers() {
        return stereoSpeakers;
    }

    private Vehicle(Builder builder) {
        this.manufacturer = builder.manufacturer;
        this.model = builder.model;
        this.wheels = builder.wheels;
        this.engine = builder.engine;
        this.stereoSpeakers = builder.stereoSpeakers;
    }

    @Override
    public String toString() {
        return "Manufacturer: " + this.manufacturer + ", Model: " + this.model + ", Wheels: " + this.wheels
                + ", Engine: " + this.engine + ", Stereo Speakers: " + this.stereoSpeakers;
    }

    // Builder class
    public static class Builder {
        // required parameters
        private String manufacturer;
        private String model;
        private int wheels;
        private String engine;

        // optional parameters
        private String stereoSpeakers;

        public Builder(String manufacturer, String model, int wheels, String engine) {
            this.manufacturer = manufacturer;
            this.model = model;
            this.wheels = wheels;
            this.engine = engine;
        }

        public Builder setStereoSpeakers(String stereoSpeakers) {
            this.stereoSpeakers = stereoSpeakers;
            return this;
        }

        public Vehicle build() {
            return new Vehicle(this);
        }
    }
}

public class BuilderPattern {
    public static void main(String[] args) {
        Vehicle car = new Vehicle.Builder("Tata", "Nexon", 4, "1.2L Turbocharged Revotron Petrol")
                .setStereoSpeakers("6\" MS-610 Dual Cone").build();

        System.out.println(car);
    }
}
