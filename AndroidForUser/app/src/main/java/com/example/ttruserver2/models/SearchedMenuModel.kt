package com.example.ttruserver2.models

class SearchedMenuModel(
    val menuPicture: Int,
    val menuTitle: String,
    val startTime: String,
    val endTime: String,
    val menuDistance: Double,
    val quantity: Int,
    val discount: Int,
    val discountedPrice: Int,
    val originPrice: Int
)