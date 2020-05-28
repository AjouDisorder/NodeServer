package com.example.ttruserver2.Retrofit

import retrofit2.Call
import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.POST

data class ResponseDTO(var userId:String? = null, var result:String? = null)

//data class Data(val data: Accepted)
//data class Accepted(val accepted: HashMap<String, Friend>)
//data class Friend(val success: Boolean, val message: String)
//data class ResponseDTO()

interface IMyService{
    /*
    @FormUrlEncoded
    @POST("boss/signup")
    fun joinBoss(@Field("bossId") bossId: String,
                 @Field("password") password: String,
                 @Field("name") name: String
                 //@Field("age") age: String,
                 //@Field("sex") sex: String,
                 //@Field("phone") phone: String
    ): Call<ResponseDTO>

    @FormUrlEncoded
    @POST("boss/login")
    fun loginBoss(@Field("bossId") email: String,
                  @Field("password") password: String): Call<ResponseDTO>
*/
    @FormUrlEncoded
    @POST("user/signup")
    fun signUpUser(@Field("userId") userId: String,
                 @Field("password") password: String,
                 @Field("nickname") nickname: String
        //@Field("age") age: String,
        //@Field("sex") sex: String,
        //@Field("phone") phone: String
    ): Call<ResponseDTO>

    @FormUrlEncoded
    @POST("user/login")
    fun loginUser(@Field("userId") email: String,
                  @Field("password") password: String): Call<ResponseDTO>



}