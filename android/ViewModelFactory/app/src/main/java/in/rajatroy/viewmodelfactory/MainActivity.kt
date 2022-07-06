package `in`.rajatroy.viewmodelfactory

import `in`.rajatroy.viewmodelfactory.databinding.ActivityMainBinding
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.ViewModelProvider

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var viewModel: MainActivityViewModel
    private lateinit var viewModelFactory: MainActivityModelFactory

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
        viewModelFactory = MainActivityModelFactory(20)
        viewModel = ViewModelProvider(this, viewModelFactory)[MainActivityViewModel::class.java]

        binding.textView.text = viewModel.getSum().toString()
        binding.button.setOnClickListener {
            val input =
                if (!binding.editTextNumber.text.isNullOrEmpty()) binding.editTextNumber.text else "0"
            binding.textView.text = viewModel.add(input.toString().toInt())
        }
    }
}