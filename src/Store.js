import { configureStore } from '@reduxjs/toolkit'
import  SrcSlice  from './components/slice/SrcSlice'
// import  PiChartPieSlice  from 'react-icons/pi'


export default configureStore({
  reducer: {
    product:SrcSlice,
  //  product2:PiChartPieSlice
  },
})