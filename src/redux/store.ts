import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import { baseApi } from "./api/baseApi";
import authReducer from "./features/auth/authSlice";

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "auth",
    storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        [baseApi.reducerPath] : baseApi.reducer
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware({serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },}).concat(baseApi.middleware);
    }
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch