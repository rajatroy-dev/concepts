# Two Way Data Binding

**We use Two Way Data Binding so that we can directly display and change the value of state in view(xml). We don't need to write seperate handler methods in ViewModel class. Also, this is useful if we want to both show data and get user input over the same widget.**

---

1. Goto `app` > `build.gradle` > `android` and add the following:

```
buildFeatures {
    ...
    dataBinding true
    ...
}
```

2. Goto https://developer.android.com/jetpack/androidx/releases/lifecycle .

3. Add the following dependencies to `app` > `build.gradle` > `dependencies`. Change the version accordingly.

    ```
    def lifecycle_version = "2.6.0-alpha01"
    // ViewModel
    implementation "androidx.lifecycle:lifecycle-viewmodel-ktx:$lifecycle_version"
    // ViewModel utilities for Compose
    implementation "androidx.lifecycle:lifecycle-viewmodel-compose:$lifecycle_version"
    // LiveData
    implementation "androidx.lifecycle:lifecycle-livedata-ktx:$lifecycle_version"
    ```

4. Add the views to `app` > `src` > `main` > `res` > `layout` > `*.xml`.

5. Wrap everything in `activity_main.xml` except `<?xml version="1.0" encoding="utf-8"?>` inside `<layout></layout>`

6. Move the following from opening `<androidx.constraintlayout.widget.ConstraintLayout>` to opening `<layout>` tag.

    ```
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    ```

7. Add a view model class that inherits `ViewModel`.

8. Add an init method and initialize the variable.

9. Add the corresponding state.

10. Data type of state must be of type `MutableLiveData`.

11. Add `data` to `activity_main.xml` under `layout`.

12. Add the variable `name` and `type`.

13. Display the state value by accessing the state variable in `android:text` of `TextView`.

14. To edit the state value from an input do `android:text="@={<viewmodel>.<state>}"` in `EditText`. **'='** is the important part here.

15. Binding for `activity_main.xml` will be `ActivityMainBinding`.

16. Add the corresponding bindings, viewModel and observer in `app` > `src` > `main` > `java` > ... > `*.kt`.

17. Similarly, id for each view will be camelCased. `first_fragment` will be `firstFragment`.

18. Use the methods to manipulate state in the bindings. 