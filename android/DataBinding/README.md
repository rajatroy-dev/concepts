# Data Binding

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