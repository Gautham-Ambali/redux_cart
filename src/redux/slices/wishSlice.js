import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
  name:"wishlist",
  initialState:{
    wishlist:[]
    
  },
  reducers:{
    addtoWishList(state,action){
      const existing=state.wishlist.find(item=>item.id==action.payload.id)
      if(existing){
        alert("Product already in the wishlist")
      }else{
        state.wishlist.push(action.payload)
        alert("Product Added to the wishlist")
      }
    },
    removeFromWishlist(state,action){
      state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
      alert("Item Removed")
    }
  }
})

export const {addtoWishList,removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer