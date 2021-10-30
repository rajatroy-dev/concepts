package DeepCloningVSShallowCloning;

public class ShallowCloning {
    static String printArray(String[] array) {
        String result = "[ ";
        for (int i = 0; i < array.length - 1; i++) {
            result += array[i] + ", ";
        }
        result += array[array.length - 1] + " ]";

        return result;
    }

    public static void main(String[] args) {
        String[] coursesArrayOne = { "Physics", "Chemistry", "Mathematics", "English", "Physical Education" };
        String[] coursesArrayTwo = { "Physics", "Chemistry", "Biology", "English", "Physical Education" };
        Courses courses = new Courses(coursesArrayOne);
        StudentShallow student = new StudentShallow("Giovanni Giorgio", "X", courses);

        StudentShallow studentClone = null;
        try {
            studentClone = (StudentShallow) student.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }

        System.out
                .println("Cloned student courses before change: " + printArray(studentClone.getCourses().getCourses()));
        System.out.println("Student courses before change: " + printArray(student.getCourses().getCourses()));
        studentClone.getCourses().setCourses(coursesArrayTwo);
        System.out.println("----- Courses changed for cloned student -----");
        System.out
                .println("Cloned student courses after change: " + printArray(studentClone.getCourses().getCourses()));
        System.out.println("Student courses after change: " + printArray(student.getCourses().getCourses()));
        /**
         * Cloned student courses before change: [ Physics, Chemistry, Mathematics, English, Physical Education ]
         * Student courses before change: [ Physics, Chemistry, Mathematics, English, Physical Education ]
         * ----- Courses changed for cloned student -----
         * Cloned student courses after change: [ Physics, Chemistry, Biology, English, Physical Education ]
         * Student courses after change: [ Physics, Chemistry, Biology, English, Physical Education ]
         */
    }
}
