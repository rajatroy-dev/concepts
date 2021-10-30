package DeepCloningVSShallowCloning;

class Courses implements Cloneable {
    private String[] courses;

    public Courses(String[] courses) {
        this.courses = courses;
    }

    public String[] getCourses() {
        return this.courses;
    }

    public void setCourses(String[] courses) {
        this.courses = courses;
    }

    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
