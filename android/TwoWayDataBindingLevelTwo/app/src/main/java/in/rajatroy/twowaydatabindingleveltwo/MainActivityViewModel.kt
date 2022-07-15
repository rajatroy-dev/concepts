package `in`.rajatroy.twowaydatabindingleveltwo

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MainActivityViewModel : ViewModel() {
    var sum = MutableLiveData<Int>()
    var input = MutableLiveData<String>()

    init {
        sum.value = 0
    }

    fun add() {
        val intInput = input.value!!.toInt()
        sum.value = (sum.value)?.plus(intInput)
    }
}