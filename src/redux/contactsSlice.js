import { createSlice } from '@reduxjs/toolkit';
import { contacts as initialContacts } from '../data';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    updateContact: (state, action) => {
      const { id, changes } = action.payload;
      const index = state.findIndex(contact => contact.number === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...changes };
      }
    },
  },
});

export const { updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;
