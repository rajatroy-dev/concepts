package `in`.rajatroy.twowaydatabinding

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MainActivityViewModel : ViewModel() {
    var nameInput = MutableLiveData<String>()

    init {
        nameInput.value = "Android"
    }
}