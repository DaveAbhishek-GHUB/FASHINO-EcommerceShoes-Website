import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [{
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    }],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
            // state.users = [];
        }
    }
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;