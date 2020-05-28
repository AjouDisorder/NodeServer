package com.example.ttruserver2

import android.graphics.Paint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView

class SearchedMenuAdapter(val menuList: ArrayList<SearchedMenuModel>) : RecyclerView.Adapter<SearchedMenuAdapter.CustomViewHolder>(){

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SearchedMenuAdapter.CustomViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.menu_list_item, parent, false)
        return CustomViewHolder(view).apply {
            itemView.setOnClickListener {
                val curPos : Int = adapterPosition
                val menu : SearchedMenuModel = menuList.get(curPos)
                Toast.makeText(parent.context, "이름 : ${menu.menuTitle}", Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun getItemCount(): Int {
        return menuList.size
    }

    override fun onBindViewHolder(holder: SearchedMenuAdapter.CustomViewHolder, position: Int) {
        holder.menuPicture.setImageResource(menuList.get(position).menuPicture)
        holder.menuTitle.text = menuList.get(position).menuTitle
        holder.startTime.text = menuList.get(position).startTime
        holder.endTime.text = menuList.get(position).endTime
        holder.menuDistance.text = menuList.get(position).menuDistance.toString()
        holder.quantity.text = menuList.get(position).quantity.toString()
        holder.discount.text = menuList.get(position).discount.toString()
        holder.discountedPrice.text = menuList.get(position).discountedPrice.toString()
        holder.originPrice.text = menuList.get(position).originPrice.toString()
        holder.originPrice.setPaintFlags(holder.originPrice.getPaintFlags() or Paint.STRIKE_THRU_TEXT_FLAG)
    }

    class CustomViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val menuPicture = itemView.findViewById<ImageView>(R.id.iv_menuPicture)
        val menuTitle = itemView.findViewById<TextView>(R.id.tv_menuTitle)
        val startTime = itemView.findViewById<TextView>(R.id.tv_startTime)
        val endTime = itemView.findViewById<TextView>(R.id.tv_endTime)
        val menuDistance = itemView.findViewById<TextView>(R.id.tv_menuDistance)
        val quantity = itemView.findViewById<TextView>(R.id.tv_quantity)
        val discount = itemView.findViewById<TextView>(R.id.tv_discount)
        val discountedPrice = itemView.findViewById<TextView>(R.id.tv_discountedPrice)
        val originPrice = itemView.findViewById<TextView>(R.id.tv_originPrice)
    }
}