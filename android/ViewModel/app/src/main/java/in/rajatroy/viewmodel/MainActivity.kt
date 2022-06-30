package `in`.rajatroy.viewmodel

import `in`.rajatroy.viewmodel.databinding.ActivityMainBinding
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.ViewModelProvider

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var viewModel: MainActivityViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
        viewModel = ViewModelProvider(this).get(MainActivityViewModel::class.java)

        binding.counter.text = viewModel.getCount().toString()
        binding.increment.setOnClickListener {
            binding.counter.text = viewModel.incrementCount().toString()
        }
        binding.decrement.setOnClickListener {
            binding.counter.text = viewModel.decrementCount().toString()
        }
    }
}