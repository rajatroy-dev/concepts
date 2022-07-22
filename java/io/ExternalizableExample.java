package io;

import java.io.Externalizable;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;

class Animal implements Externalizable {
    private String name;
    private boolean carnivorous;
    private String sound;
    private int noOfLegs;

    // This no-arguments constructor is mandatory for Externalizable
    public Animal() {
    }

    public Animal(String name, boolean carnivorous, String sound, int noOfLegs) {
        this.name = name;
        this.carnivorous = carnivorous;
        this.sound = sound;
        this.noOfLegs = noOfLegs;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCarnivorous() {
        return carnivorous;
    }

    public void setCarnivorous(boolean carnivorous) {
        this.carnivorous = carnivorous;
    }

    public String getSound() {
        return sound;
    }

    public void setSound(String sound) {
        this.sound = sound;
    }

    public int getNoOfLegs() {
        return noOfLegs;
    }

    public void setNoOfLegs(int noOfLegs) {
        this.noOfLegs = noOfLegs;
    }

    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeObject(name);
        out.writeBoolean(carnivorous);
        out.writeObject(sound);
        out.writeInt(noOfLegs);
    }

    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        this.name = (String) in.readObject();
        this.carnivorous = in.readBoolean();
        this.sound = (String) in.readObject();
        this.noOfLegs = in.readInt();
    }

}

public class ExternalizableExample {
    public static void main(String[] args) {
        Animal lion = new Animal("Lion", true, "Roar", 4);

        System.out.println("Externalizing . . .");
        try {
            FileOutputStream fo = new FileOutputStream("./io/ex_records.bin");
            ObjectOutputStream so = new ObjectOutputStream(fo);
            so.writeObject(lion);
            so.flush();
            fo.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        System.out.println("De-externalizing . . .");
        Animal dLion = null;
        try {
            FileInputStream fi = new FileInputStream("./io/ex_records.bin");
            ObjectInputStream si = new ObjectInputStream(fi);
            dLion = (Animal) si.readObject();
            si.close();
            fi.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        System.out.println(dLion.getName());
        System.out.println(dLion.isCarnivorous());
        System.out.println(dLion.getSound());
        System.out.println(dLion.getNoOfLegs());
    }
}
