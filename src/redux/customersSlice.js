import { createSlice } from '@reduxjs/toolkit';
import { customers as initialCustomers } from '../data';

const customersSlice = createSlice({
  name: 'customers',
  initialState: initialCustomers,
  reducers: {
    updateCustomer: (state, action) => {
      const { id, changes } = action.payload;
      const index = state.findIndex(customer => customer.number === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...changes };
      }
    },
  },
});

export const { updateCustomer } = customersSlice.actions;
export default customersSlice.reducer;
