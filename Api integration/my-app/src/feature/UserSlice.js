import {createSlice}from '@reduxjs/toolkit';
export const userSlice=createSlice(
    {
        name:'user',
        initialState:{
            user:{
                skill:null
            }
        },
        reducers:{
            /*login:(state,action)=>{
                state.user=action.payload;
            },
            logout:(state)=>{
                state.user=null;
            },*/
            employer:(state,action)=>{
                    
                    state.user=action.payload
                 
                    
                    
                
                
            }
            
        },
    }
);
export const{login,logout,employer}=userSlice.actions;
export const selectUser=(state)=>state.user.user;
export default userSlice.reducer;