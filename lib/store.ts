import { useDispatch } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "@/lib/features/products/productSlice";
import themeReducer from "@/lib/features/ui/themeSlice";
import sidebarReducer from "@/lib/features/ui/sidebarSlice";
import ordersReducer from "@/lib/features/orders/orderSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  products: productReducer,
  sidebar: sidebarReducer,
  orders: ordersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "theme", "orders"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
