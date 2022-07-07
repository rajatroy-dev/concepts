package `in`.rajatroy.livedata

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MainActivityViewModel(initNumber: Int) : ViewModel() {
    private var sum = MutableLiveData<Int>()
    val getSum: LiveData<Int>
    get() = sum

    init {
        sum.value = initNumber
    }

    fun add(num: Int) {
        sum.value = (sum.value)?.plus(num)
    }
}