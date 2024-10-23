import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'user',
    initialState: {
        name: "",
        email: "",
        address: "",
        password: "",
    },
    reducers: {
        updateUser: (state, action) => {
            console.log(`Try to Login here ${action.payload.name}`);
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.address = action.payload.address;
            state.password = action.payload.password;
        },
    },
});

export const { updateUser } = todoSlice.actions;
export default todoSlice.reducer;
