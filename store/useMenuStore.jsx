import menuReducer from "@/redux/useMenuSlice";
import themeReducer from "@/redux/themeSlice";
import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
const store = configureStore({
  reducer: {
    menuStore: menuReducer,
    themeStore: themeReducer,
  },
});
export { store };
