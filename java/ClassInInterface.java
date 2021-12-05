interface AnInterface {
    static String aStaticString = "aStaticString";

    class AClassInInterface { // static nested class by default
        private String interfaceName;

        void parentInterfaceStaticString() {
            System.out.println(aStaticString);
        }

        public AClassInInterface(String interfaceName) {
            this.interfaceName = interfaceName;
        }

        public String getInterfaceName() {
            return this.interfaceName;
        }

        public void setInterfaceName(String interfaceName) {
            this.interfaceName = interfaceName;
        }
    }
}

public class ClassInInterface {
    public static void main(String[] args) {
        AnInterface.AClassInInterface x = new AnInterface.AClassInInterface("interfaceName");

        x.parentInterfaceStaticString(); // as nested class is static by default we can access the static variable of interface

        System.out.println(x.getInterfaceName());
        x.setInterfaceName("newInterfaceName");
        System.out.println(x.getInterfaceName());
    }
}
