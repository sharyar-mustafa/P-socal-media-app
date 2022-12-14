import { createReducer } from "@reduxjs/toolkit";
 
 const  initialState = {
    // isAuthenticated : false
 }

export const UserReducer = createReducer(initialState, {

    // login
    LoginRequest: (state,) => {
        state.loading = true;
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated= true
    },
    LoginFaild: (state, action) => {
        state.loading = false;
        state.user = action.payload
        state.isAuthenticated= false
    },

    // Register 
    RigisterRequest: (state,) => {
        state.loding = true
    },
    RigisterSuccess: (state, action) => {
        state.loding = false;
        state.user = action.payload;
        state.isAuthenticated= true
    },
    RigisterFaild: (state, action) => {
        state.loding = false;
        state.error = action.payload;
       state.isAuthenticated= false
    },


    // loadUser
    LoadeUserRequest: (state,) => {
        state.loading = true;
    },
    LoadeUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated= true
    },
    LoadeUserFaild: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated= false
    },

});


