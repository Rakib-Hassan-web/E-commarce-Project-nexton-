import { configureStore } from '@reduxjs/toolkit'
import  SrcSlice  from './components/slice/SrcSlice'
import  CartSlice from './components/slice/CartSlice'

export default configureStore({
  reducer: {
    product:SrcSlice,
    Product2:CartSlice,

  },
})