package `in`.rajatroy.viewmodel

import androidx.lifecycle.ViewModel

class MainActivityViewModel : ViewModel() {
    private var count = 0;

    fun getCount(): Int {
        return count
    }

    fun incrementCount(): Int {
        return ++count
    }

    fun decrementCount(): Int {
        return --count
    }
}