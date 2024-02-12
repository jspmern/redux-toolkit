 
import {configureStore} from '@reduxjs/toolkit'
import TodoSlice from './store/slice/userSlice'
import countSlice from './store/slice/countSlice'
import getDataSlice from './store/slice/getDataSlice'
 import {thunk} from 'redux-thunk'
 

let store= configureStore({
   reducer:{todo: TodoSlice.reducer,count:countSlice.reducer,fetch:getDataSlice.reducer},
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(thunk),
   devTools:true
});
 

export default store