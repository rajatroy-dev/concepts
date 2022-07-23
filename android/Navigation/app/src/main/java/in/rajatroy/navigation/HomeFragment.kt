package `in`.rajatroy.navigation

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import `in`.rajatroy.navigation.databinding.FragmentHomeBinding
import android.text.TextUtils
import android.widget.Toast
import androidx.core.os.bundleOf
import androidx.databinding.DataBindingUtil
import androidx.navigation.findNavController

class HomeFragment : Fragment() {
    private lateinit var binding: FragmentHomeBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        // Inflate the layout for this fragment
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_home, container, false)
        binding.button.setOnClickListener {
            if (!TextUtils.isEmpty(binding.editTextTextPersonName.text.toString())) {
                val bundle = bundleOf("email" to binding.editTextTextPersonName.text.toString())
                it.findNavController().navigate(R.id.action_homeFragment_to_second, bundle)
            } else {
                Toast.makeText(activity, "Invalid input!", Toast.LENGTH_LONG).show()
            }
        }

        return binding.root
    }
}