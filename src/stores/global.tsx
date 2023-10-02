import { spaceTradersApi } from "@/services/space-traders";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";

export const globalStore = configureStore({
	reducer: {
		[spaceTradersApi.reducerPath]: spaceTradersApi.reducer,
		auth: authSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(spaceTradersApi.middleware),
});
