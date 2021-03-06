# View Model Factory

**We use ViewModelFactory when we need to use custom view models with constructor parameters.**

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

8. Add an init method and initialize the variable that is passed to constructor.

9. Add the corresponding state and methods to manipulate state.

10. Add a view model factory class.

11. Inherit from `ViewModelProvider.Factory`.

12. Specify the variable that is to be injected via constructor.

13. Add the boilerplate code similar to below:

    ```
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(MainActivityViewModel::class.java)) {
            return MainActivityViewModel(initNumber) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class");
    }
    ```

14. Binding for `activity_main.xml` will be `ActivityMainBinding`.

15. Add the corresponding bindings, viewModel and viewModelFactory in `app` > `src` > `main` > `java` > ... > `*.kt`.

16. Similarly, id for each view will be camelCased. `first_fragment` will be `firstFragment`.

17. Use the methods to manipulate state in the bindings. 