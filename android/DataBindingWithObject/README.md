# Data Binding with Object

1. Goto `app` > `build.gradle` > `android` and add the following:

```
buildFeatures {
    ...
    dataBinding true
    ...
}
```

2. Add the views to `app` > `src` > `main` > `res` > `layout` > `*.xml`.

3. Binding for `activity_main.xml` will be `ActivityMainBinding`.

4. Add the corresponding bindings in `app` > `src` > `main` > `java` > ... > `*.kt`.

5. Similarly, id for each view will be camelCased. `first_fragment` will be `firstFragment`.

6. Add a data class, with the required fields.

7. Add `<data>` > `variable` tag to the target `xml`.

8. Specify `name` and `type` attributes to `variable` tag.

9. Refer the object variables within views using the `name` attribute and then it's corresponding properties.

10. In corresponding bindings, initiate the object and assign it to binding's object.