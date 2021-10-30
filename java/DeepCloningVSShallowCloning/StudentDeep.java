package DeepCloningVSShallowCloning;

class StudentDeep implements Cloneable {
    private String name;
    private String inClass;
    private Courses courses;

    public StudentDeep(String name, String inClass, Courses courses) {
        this.name = name;
        this.inClass = inClass;
        this.courses = courses;
    }

    public String getName() {
        return this.name;
    }

    public String getInClass() {
        return this.inClass;
    }

    public Courses getCourses() {
        return this.courses;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setInClass(String inClass) {
        this.inClass = inClass;
    }

    public void setCourses(Courses courses) {
        this.courses = courses;
    }

    public Object clone() throws CloneNotSupportedException {
        StudentDeep student = (StudentDeep) super.clone();
        student.setCourses((Courses) this.courses.clone());

        return student;
    }
}
