package com.example.ttruserver2

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.ttruserver2.models.SearchedMenuModel
import kotlinx.android.synthetic.main.activity_searched_menu_list.*

class SearchedMenuListActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_searched_menu_list)

        val menuTypeToIcons = hashMapOf( "치킨&피자" to R.drawable.menu_chickenpizza, "족발&보쌈" to R.drawable.menu_jokbal,
            "돈까스&일식" to R.drawable.menu_japan, "세계음식" to R.drawable.menu_nation, "햄버거" to R.drawable.menu_hambur,
            "밥류" to R.drawable.menu_rice, "카페&빵&디저트" to R.drawable.menu_cafe, "육고기" to R.drawable.menu_meat,
            "면" to R.drawable.menu_noodle, "분식&야식" to R.drawable.menu_snack, "찜&탕&찌개" to R.drawable.menu_soup,
            "반찬&과일" to R.drawable.menu_fruit, "떡&기타" to R.drawable.menu_ricecake,
            "샐러드&다이어트" to R.drawable.menu_salad, "편의점" to R.drawable.menu_convstore)

        val menuList = arrayListOf(
            SearchedMenuModel(
                menuTypeToIcons["카페&빵&디저트"] as Int, "어떤 커피", "16:00",
                "18:00", 0.6, 5, 50, 7500, 15000
            ),
            SearchedMenuModel(
                menuTypeToIcons["족발&보쌈"] as Int, "맛있는 족발", "15:00",
                "17:00", 1.2, 30, 70, 6000, 20000
            )
        )

        rv_menuList.layoutManager = LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false)
        rv_menuList.setHasFixedSize(true)
        rv_menuList.adapter = SearchedMenuAdapter(menuList)

    }
}
