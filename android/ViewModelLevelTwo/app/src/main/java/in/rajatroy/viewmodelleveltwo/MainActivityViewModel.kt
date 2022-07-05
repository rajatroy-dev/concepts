package `in`.rajatroy.viewmodelleveltwo

import androidx.lifecycle.ViewModel

class MainActivityViewModel : ViewModel() {
    private var sum = 0

    fun getSum(): Int {
        return sum
    }

    fun add(num: Int): String {
        sum += num
        return sum.toString()
    }
}