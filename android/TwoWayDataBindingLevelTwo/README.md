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

8. Add an init method and initialize the variable say `sum`.

9. Add the corresponding input variable say `input` and method to manipulate state.

10. Data type of state must be of type `MutableLiveData`.

11. Add `data` to `activity_main.xml` under `layout`.

12. Add the variable `name` and `type`.

13. Display the state value by accessing `sum` in `android:text` of `TextView`.

14. To edit the state value, take an input like `android:text="@={<viewmodel>.input}"` in `EditText`. **'='** is the important part here.

15. Add onClickListener to `Button` view in XML using `android:onClick` and map the lambda function to ViewModel function.

16. Binding for `activity_main.xml` will be `ActivityMainBinding`.

17. Add the corresponding bindings, viewModel in `app` > `src` > `main` > `java` > ... > `*.kt`.

18. Similarly, id for each view will be camelCased. `first_fragment` will be `firstFragment`.

19. Use the methods to manipulate state in the bindings. 