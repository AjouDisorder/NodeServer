package com.example.ttruserver2.models

import com.bumptech.glide.load.resource.drawable.GlideDrawable
import com.bumptech.glide.request.target.Target

class SearchedRestaurantModel(
    val restaurantPicture: Int,
    val restaurantTitle: String,
    val restaurantGrade: Double,
    val restaurantDistance: Double,
    val restaurantType: String,
    val restaurantOnSale: Boolean
)

