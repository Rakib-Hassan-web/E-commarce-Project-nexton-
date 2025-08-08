import { createSlice } from '@reduxjs/toolkit'

export const SrcSlice = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
   
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = SrcSlice.actions

export default SrcSlice.reducer