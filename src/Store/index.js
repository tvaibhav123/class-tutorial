import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

// const Auth = {
//     useName: "asda",
//     id:"asdfasd",
// }

// const cart = {
//     products: [],
//     totalAmount: 0
// }


const userSlice = createSlice({
    name: "Users",
    initialState: initialState,
    reducers: {
        adduser(state, action) {
            state.users = [...state.users, action.payload ]
        },
        addBulkUsers  (state, action) {
            state.users = action.payload
        },
        deleteuser (state,action) {
            console.log("FROM DELETE USERS",action.payload)
            state.users = state.users.filter(user => user.username !== action.payload);
        },
        modifyuser () {

        }
    }

})


// userSlice gets two properties : 1) userSlice.reducer 2) userSlice.actions

export const userActions = userSlice.actions;

const store = configureStore({
    reducer: {user : userSlice.reducer}
})

export default store;