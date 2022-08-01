import {configureStore, createSlice} from '@reduxjs/toolkit'

const signInSlice = createSlice({
    name: "signIn",
    initialState : {
        logIn:false,
        name: ""
    },
    reducers: {
        authentification: (state, action) => {
            const newLog = {
                logIn: true,
                name: action.payload
            }

            state.push(newLog)
        }
    }
})

export const authentification = signInSlice.actions;

export const store = configureStore({
    reducer: {
        authentification: signInSlice.reducer
    }
})
