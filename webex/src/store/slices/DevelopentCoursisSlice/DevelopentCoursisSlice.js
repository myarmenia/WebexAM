import { createSlice } from "@reduxjs/toolkit";
import { getDevCourses } from './DevelopentCoursisApi';

const initialState = {
  data: {},
  loading: 'pending',
   error: null,
   };

const devCoursesSlice = createSlice({
    name: 'devCourses',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(getDevCourses.pending, (state) => {

          })
          .addCase(getDevCourses.fulfilled, (state, action) => {
            state.loading = 'fulfilled'
            state.data = action.payload
          })
          .addCase(getDevCourses.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = 'rejected'
          });
    },
 });
 

export const selectDevCourses = (state) => state.devCourses
export const selectDevCoursesData= (state) => state.devCourses.data.data
export const selectDevCoursesLoading= (state) => state.devCourses.loading

 export const {} = devCoursesSlice.actions

export const devCoursesReducer =  devCoursesSlice.reducer