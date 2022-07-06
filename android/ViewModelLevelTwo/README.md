# View Model Level 2

**We use ViewModel because we want the data to be consistent even if there is any configuration change such as changing orientation of the screen.**

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

8. Add the corresponding state and methods to manipulate state.

9. Binding for `activity_main.xml` will be `ActivityMainBinding`.

10. Add the corresponding bindings and viewModel in `app` > `src` > `main` > `java` > ... > `*.kt`.

11. Similarly, id for each view will be camelCased. `first_fragment` will be `firstFragment`.

12. Use the methods to manipulate state in the bindings. 