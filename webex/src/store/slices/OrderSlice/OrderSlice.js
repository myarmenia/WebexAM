import { createSlice } from "@reduxjs/toolkit";
import { postOrder } from "./OrderApi";

const initialState = {
   data: {
      success: false,
      message: ""
   },
   status: 'idle',
   error: null,
   };

const ordertSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postOrder.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postOrder.fulfilled, (state, action) => {
            state.data = action.payload
            // console.log(state.data);
             state.status = 'succes';
          })
          .addCase(postOrder.rejected, (state, action) => {
            state.status = 'failed';
            if(action.payload){
               state.data.message = action.payload
              } 
          });
    },
 });
 

export const selectOrder = (state) => state.order

 export const {} = ordertSlice.actions

export const orderReducer =  ordertSlice.reducer