package com.example.ttruserver2

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.activity_searched_restaurant_list.*

class SearchedRestaurantListActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_searched_restaurant_list)

        val restaurantTypeToIcons = hashMapOf("뷔페&샐러드" to R.drawable.store_buffet, "술집" to R.drawable.store_drink,
            "편의점" to R.drawable.store_convstore, "한식" to R.drawable.store_korean, "치킨" to R.drawable.store_chicken, "피자" to R.drawable.store_pizza,
            "족발&보쌈" to R.drawable.store_jokbal, "돈까스&일식&회" to R.drawable.store_japan, "양식&아시안" to R.drawable.store_american,
            "패스트푸드" to R.drawable.store_fastfood, "분식" to R.drawable.store_snack, "카페&디저트" to R.drawable.store_dessert,
            "찜&탕&찌개" to R.drawable.store_soup, "도시락" to R.drawable.store_dosirak, "중국집" to R.drawable.store_china)

        val restaurantList = arrayListOf(
            SearchedRestaurantModel(restaurantTypeToIcons["술집"] as Int, "김형건 술집", 4.8,
                1.5, "술집", true),
            SearchedRestaurantModel(restaurantTypeToIcons["패스트푸드"] as Int, "맥도날드 수원 아주대점",
                3.9, 0.7, "패스트푸드", false)
        )

        rv_restaurantList.layoutManager = LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false)
        rv_restaurantList.setHasFixedSize(true)
        rv_restaurantList.adapter = SearchedRestaurantAdapter(restaurantList)
    }
}
