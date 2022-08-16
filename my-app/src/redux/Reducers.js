import { createReducer } from "@reduxjs/toolkit";
 
 const  initialState = {}

export const UserReducer = createReducer(initialState, {

    // login
    LoginRequest: (state,) => {
        state.loading = true;
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    LoginFaild: (state, action) => {
        state.loading = false;
        state.user = action.payload
    },

    // Register 
    RigisterRequest: (state,) => {
        state.loding = true
    },
    RigisterSuccess: (state, action) => {
        state.loding = false;
        state.user = action.payload;
    },
    RigisterFaild: (state, action) => {
        state.loding = false;
        state.error = action.payload;
    },


    // loadUser
    LoadeUserRequest: (state,) => {
        state.loading = true;
    },
    LoadeUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    LoadeUserFaild: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

});