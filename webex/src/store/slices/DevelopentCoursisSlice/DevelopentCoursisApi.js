import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getDevCourses = createAsyncThunk(
    'devCourses/getDevCourses',
    async (_, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: "/programming-courses",
          };
          
          const response = await instance(config);
            console.log(response.data,333333333333333);
          return response?.data;
         
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)

