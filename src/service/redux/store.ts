import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthSlice from "./slices/AuthSlice";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector as useReduxSelector,
} from "react-redux";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
    },
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

