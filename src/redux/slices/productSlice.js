import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsThunk=createAsyncThunk("products/fetchProductsThunk",async()=>{
  const response=await axios.get("https://dummyjson.com/products")
  sessionStorage.setItem("apiData",JSON.stringify(response.data.products))
  
  return response
})

const productSlice=createSlice({
  name:"products",
  initialState:{
    products:[],
    loading:false,
    error:"",
    productsDupe:[],
    currentPage:1,
    productsPerPage:10
  },
  reducers:{
    search(state,action){
      if(action.payload.length>0){
        state.products=state.productsDupe.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
      }
    },
    previousPage(state){
      state.currentPage-=1
    },
    nextPage(state){
      state.currentPage+=1
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProductsThunk.fulfilled,(state,action)=>{
      state.products=action.payload.data.products
      state.productsDupe=action.payload.data.products
      state.loading=false
      state.error=""
    }),
    builder.addCase(fetchProductsThunk.pending,(state,action)=>{
      state.products=[]
      state.loading=true
      state.error=""
    }),
    builder.addCase(fetchProductsThunk.rejected,(state,action)=>{
      state.products=[]
      state.loading=false
      state.error="Api Call Failed"
    })
  }
})

export const {search,previousPage,nextPage}=productSlice.actions
export default productSlice.reducer