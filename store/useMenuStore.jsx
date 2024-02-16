import menuReducer from "@/redux/useMenuSlice";
import themeReducer from "@/redux/themeSlice";
import toastReducer from "@/redux/toastSlice";
import projectReducer from "@/redux/projectSlice";
import dataReducer from "@/redux/dataSlice";
import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
const store = configureStore({
  reducer: {
    menuStore: menuReducer,
    themeStore: themeReducer,
    toastStore: toastReducer,
    projectStore: projectReducer,
    dataStore: dataReducer,
  },
});
export { store };
