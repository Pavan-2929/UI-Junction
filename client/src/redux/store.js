import {configureStore} from '@reduxjs/toolkit'
import copyReducer from './reducers/copySlice'

const store = configureStore({
    reducer: copyReducer
})

export default store