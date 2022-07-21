package io;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Person implements Serializable {
    private String name;
    private int age;
    private String gender;

    public Person(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }
}

public class SerializableExample {
    public static void main(String[] args) {
        Person person = new Person("Alex", 24, "Male");
        String filename = "./io/records.bin";

        try {
            // Saving of object in a file
            FileOutputStream file = new FileOutputStream(filename);
            ObjectOutputStream out = new ObjectOutputStream(file);

            // Method for serialization of object
            System.out.println("Serializing . . .");
            out.writeObject(person);
            
            out.close();
            file.close();
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        Person dPerson = null;
        
        // Deserialization
        try {
            // Reading the object from a file
            FileInputStream file = new FileInputStream(filename);
            ObjectInputStream in = new ObjectInputStream(file);
            
            // Method for deserialization of object
            System.out.println("De-serializing . . .");
            dPerson = (Person) in.readObject();

            in.close();
            file.close();

            System.out.println("Person name: " + dPerson.getName());
            System.out.println("Person age: " + dPerson.getAge());
            System.out.println("Person gender: " + dPerson.getGender());
        }

        catch (IOException ex) {
            System.out.println(ex.getMessage());
        }

        catch (ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }

    }
}