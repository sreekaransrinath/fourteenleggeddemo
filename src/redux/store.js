import { configureStore } from '@reduxjs/toolkit';
import vendorsReducer from './vendorsSlice';
import customersReducer from './customersSlice';
import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: {
    vendors: vendorsReducer,
    customers: customersReducer,
    contacts: contactsReducer,
  },
});

export default store;
