package `in`.rajatroy.livedata

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import java.lang.IllegalArgumentException

class MainActivityModelFactory(private val initNumber: Int) : ViewModelProvider.Factory {
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(MainActivityViewModel::class.java)) {
            return MainActivityViewModel(initNumber) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class");
    }
}