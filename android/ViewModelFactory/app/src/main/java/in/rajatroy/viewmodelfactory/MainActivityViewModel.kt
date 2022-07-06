package `in`.rajatroy.viewmodelfactory

import androidx.lifecycle.ViewModel

class MainActivityViewModel(initNumber: Int) : ViewModel() {
    private var sum = 0

    init {
        sum = initNumber
    }

    fun getSum(): Int {
        return sum
    }

    fun add(num: Int): String {
        sum += num
        return sum.toString()
    }
}