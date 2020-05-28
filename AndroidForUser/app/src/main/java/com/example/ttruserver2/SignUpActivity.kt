package com.example.ttruserver2

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils
import android.widget.Toast
import com.example.ttruserver2.Retrofit.IMyService
import com.example.ttruserver2.Retrofit.ResponseDTO
import com.example.ttruserver2.Retrofit.RetrofitClient
import kotlinx.android.synthetic.main.activity_sign_up.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class SignUpActivity : AppCompatActivity() {

    lateinit var iMyService: IMyService

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_up)

        // Init API
        val retrofit = RetrofitClient.getInstance()
        iMyService = retrofit.create(IMyService::class.java)

        signup_complete_button.setOnClickListener {
            var userId = signup_email_area.text.toString()
            var password = signup_password_area.text.toString()
            var nickname = signup_nickname_area.text.toString()

            //Check empty
            if(TextUtils.isEmpty(userId)){
                Toast.makeText(this,"Email can not be null or empty", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            if(TextUtils.isEmpty(password)){
                Toast.makeText(this,"Password can not be null or empty", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            if(TextUtils.isEmpty(nickname)){
                Toast.makeText(this,"Name can not be null or empty", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            iMyService.signUpUser(userId, password, nickname).enqueue(object : Callback<ResponseDTO> {
                override fun onFailure(call: Call<ResponseDTO>?, t: Throwable?) {

                }

                override fun onResponse(
                    call: Call<ResponseDTO>?,
                    response: Response<ResponseDTO>?
                ) {
                    Toast.makeText(this@SignUpActivity,response?.body().toString(), Toast.LENGTH_LONG).show()
                    println(response?.body().toString())

                    val intent = Intent(this@SignUpActivity, LogInActivity::class.java)
                    startActivity(intent)
                }
            })

        }
    }
}
