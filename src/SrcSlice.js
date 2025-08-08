import { createSlice } from '@reduxjs/toolkit'

export const SrcSlice = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
   
    PorductNamereducer: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { PorductNamereducer } = SrcSlice.actions

export default SrcSlice.reducer