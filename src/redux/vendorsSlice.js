import { createSlice } from '@reduxjs/toolkit';
import { vendors as initialVendors } from '../data';

const vendorsSlice = createSlice({
  name: 'vendors',
  initialState: initialVendors,
  reducers: {
    updateVendor: (state, action) => {
      const { id, changes } = action.payload;
      const index = state.findIndex(vendor => vendor.number === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...changes };
      }
    },
  },
});

export const { updateVendor } = vendorsSlice.actions;
export default vendorsSlice.reducer;
