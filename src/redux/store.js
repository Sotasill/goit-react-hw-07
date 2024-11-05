import { configureStore } from "@reduxjs/toolkit";
// Добавьте импорт persistStore
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Убедитесь, что здесь правильное имя
    filters: filtersReducer,
  },
});


