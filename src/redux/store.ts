import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { productListAPI } from "./API/ProductListApi";
export const store = configureStore({
  reducer: {
    [productListAPI.reducerPath]: productListAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productListAPI.middleware]),
});

type RootStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootStore>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
