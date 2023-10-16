import menuReducer from "@/redux/useMenuSlice";
import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
const store = configureStore({
  reducer: {
    menuStore: menuReducer,
  },
});
export { store };
