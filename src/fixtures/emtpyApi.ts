// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptyApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.spacetraders.io/v2",
		prepareHeaders: (headers, api) => {
			const state = api.getState() as { token?: string };

			let token: string | null | undefined = state?.token;

			if (!token) {
				const tokenCache = localStorage.getItem("accessToken");

				if (tokenCache) {
					token = tokenCache;
				}
			}

			if (!headers.get("Authorization") && token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
		},
	}),
	endpoints: () => ({}),
});
