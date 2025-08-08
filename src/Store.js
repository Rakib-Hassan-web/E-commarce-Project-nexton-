import { configureStore } from '@reduxjs/toolkit'
import  SrcSlice  from './SrcSlice'

export default configureStore({
  reducer: {
    product:SrcSlice
  },
})