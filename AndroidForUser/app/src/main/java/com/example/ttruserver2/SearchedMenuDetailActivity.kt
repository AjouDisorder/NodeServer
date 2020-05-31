package com.example.ttruserver2;

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentTransaction;

import android.graphics.Color;
import android.net.Uri
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import com.example.ttruserver2.detailRestaurant.InfoFragment
import com.example.ttruserver2.detailRestaurant.MenuFragment
import com.example.ttruserver2.detailRestaurant.ReviewFragment

import kotlinx.android.synthetic.main.activity_searched_menu_detail.*

class SearchedMenuDetailActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState : Bundle?){
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_searched_menu_detail)
        println("!")
        //page init
        supportFragmentManager.beginTransaction()
            .replace(R.id.fl_detailMenu, MenuFragment())
            .commit()
        //restaurant data assign
        tv_restaurantTitle.text = "민석 치킨"
        var bundle = Bundle()
        bundle.putString("description", "가게정보는 다음과 같음")
        bundle.putString("address", "가게주소는 다음과 같음")
        tv_rating.text = (3.5).toString();  ratingBar.rating = 3.5F;
        tv_favoriteCount.text = (100).toString();   var favoriteCount = 100
        tv_distance.text = (0.6).toString()
        btn_dial.setOnClickListener{
            var intent = Intent(Intent.ACTION_DIAL)
            intent.data = Uri.parse("tel:0102708932")
            if(intent.resolveActivity(packageManager) != null){
                startActivity(intent)
            }
        }
        //즐겨찾기 추가 되어있는지..ㄷ
        var isFavorite : Boolean = false
        if (isFavorite){
            iv_isFavorite.setImageResource(R.drawable.fillheart)
        }else{
            iv_isFavorite.setImageResource(R.drawable.emptyheart)
        }

        //즐겨찾기 버튼
        btn_setFavorite.setOnClickListener{
            if (isFavorite){    //즐겨찾기 해제
                isFavorite = false
                favoriteCount -= 1
                tv_favoriteCount.text = favoriteCount.toString()
                iv_isFavorite.setImageResource(R.drawable.emptyheart)
            }else{  //즐겨찾기 추가
                isFavorite = true
                favoriteCount += 1
                tv_favoriteCount.text = favoriteCount.toString()
                iv_isFavorite.setImageResource(R.drawable.fillheart)
            }
        }

        //아래는 버튼(메뉴, 정보, 리뷰) 처리
        btn_detailMenu_menu.setOnTouchListener(object : View.OnTouchListener{
            override fun onTouch(v: View?, motionEvent: MotionEvent?) :Boolean{
                when (motionEvent?.action) {
                    MotionEvent.ACTION_DOWN -> {
                        btn_detailMenu_menu.setBackgroundColor(Color.TRANSPARENT)
                    }
                    MotionEvent.ACTION_UP -> {
                        btn_detailMenu_menu.setBackgroundColor(Color.rgb(142, 137, 137));
                        btn_detailMenu_info.setBackgroundColor(Color.rgb(205, 199, 199));
                        btn_detailMenu_review.setBackgroundColor(Color.rgb(205, 199, 199));
                    }
                }

                val transaction : FragmentTransaction = supportFragmentManager.beginTransaction()
                val fragmentMenu = MenuFragment();
                transaction.replace(R.id.fl_detailMenu, fragmentMenu);
                transaction.commit();
                return false;
            }
        })
        btn_detailMenu_info.setOnTouchListener(object : View.OnTouchListener{
            override fun onTouch(v: View?, motionEvent: MotionEvent?) :Boolean{
                when (motionEvent?.action) {
                    MotionEvent.ACTION_DOWN -> {
                        btn_detailMenu_info.setBackgroundColor(Color.TRANSPARENT);
                    }
                    MotionEvent.ACTION_UP -> {
                        btn_detailMenu_info.setBackgroundColor(Color.rgb(142, 137, 137));
                        btn_detailMenu_menu.setBackgroundColor(Color.rgb(205, 199, 199));
                        btn_detailMenu_review.setBackgroundColor(Color.rgb(205, 199, 199));
                    }
                }

                val transaction : FragmentTransaction = supportFragmentManager.beginTransaction()
                val fragmentInfo = InfoFragment()
                fragmentInfo.arguments = bundle
                transaction.replace(R.id.fl_detailMenu, fragmentInfo)
                transaction.commit();
                return false;
            }
        })
        btn_detailMenu_review.setOnTouchListener(object : View.OnTouchListener{
            override fun onTouch(v: View?, motionEvent: MotionEvent?) :Boolean{
                when (motionEvent?.action) {
                    MotionEvent.ACTION_DOWN -> {
                        btn_detailMenu_review.setBackgroundColor(Color.TRANSPARENT)
                    }
                    MotionEvent.ACTION_UP -> {
                        btn_detailMenu_review.setBackgroundColor(Color.rgb(142, 137, 137));
                        btn_detailMenu_menu.setBackgroundColor(Color.rgb(205, 199, 199));
                        btn_detailMenu_info.setBackgroundColor(Color.rgb(205, 199, 199));
                    }
                }

                val transaction : FragmentTransaction = supportFragmentManager.beginTransaction()
                val fragmentReview = ReviewFragment()
                transaction.replace(R.id.fl_detailMenu, fragmentReview)
                transaction.commit();
                return false;
            }
        })
    }
}
