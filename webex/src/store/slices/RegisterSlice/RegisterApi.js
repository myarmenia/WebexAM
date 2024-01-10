import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "../../../axios";

export const postRegister = createAsyncThunk(
    'register/postregister',

    async (body, thunkAPI) => {
        try {
          const registerData = {
            name: body.name,
            email: body.email,
            phone: body.phone,
            password: body.password,
            password_confirmation: body.confirmPassword
          };
    
          const config = {
            method: "post",
            url: "auth/signup",
            data: registerData,
          };
    
          const response = await customAxios(config);
          sessionStorage.setItem("token", response.data.access_token);
          window.location.href ='/users';
          return true;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)