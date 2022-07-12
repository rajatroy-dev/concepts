package `in`.rajatroy.livedatawithdatabinding

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MainActivityViewModel : ViewModel() {
    private var sum = MutableLiveData<Int>()
    val getSum: LiveData<Int>
        get() = sum

    init {
        sum.value = 0
    }

    fun add() {
        sum.value = (sum.value)?.plus(1)
    }
}