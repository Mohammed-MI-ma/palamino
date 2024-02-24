import { configureStore } from "@reduxjs/toolkit";
//import authReducer from "./authService/authSlice";
import applicationReducer from "./reducers/applicationService/applicationSlice";

//import { authApi } from "./authService/authService";

const store = configureStore({
  reducer: {
    //auth: authReducer,
    application: applicationReducer,
    //[authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  //.concat(authApi.middleware),
});

export default store;
