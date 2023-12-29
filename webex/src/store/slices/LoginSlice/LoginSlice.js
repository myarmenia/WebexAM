import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./LoginApi";

const initialState = {
   rockets: [],
   status: 'idle',
   error: null,
   };

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postLogin.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postLogin.fulfilled, (state, action) => {
            state.rockets.push(action.payload)
             state.status = 'succes';
          })
          .addCase(postLogin.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectLogin = (state) => state.login

 export const {setLogin} = loginSlice.actions

export const loginReducer =  loginSlice.reducer