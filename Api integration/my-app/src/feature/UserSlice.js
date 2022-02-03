import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            
            users: []
             
        },
        reducers: {
            /*login: (state, action) => {
                state.user = action.payload;
            },
            logout: (state) => {
                state.user = null;
            },*/

            //dispatch(userslice.rempoveEmployee("emp2"))
            employer: (state, action) => {
                
                    state.user = action.payload
                
            
            },
            addEmployers: (state, action) =>{
                state.users.push(action.payload)
            },
            removeEmployee: (state, action) => {
                let AllEmployees = [...state.users]
                AllEmployees.filter((employee) => employee.name !== action.payload)
            

        }
    }
    }
);
export const { login, logout, employer,addEmployers} = userSlice.actions;
export const selectUser = (state) => state.user.users;
export default userSlice.reducer;