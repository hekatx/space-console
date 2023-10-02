import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { listenerMiddleware } from "../middlewares/listener";

type State = {
	token?: string | null;
};

const initialState: State = {
	token:
		"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiUVVFQjFOIiwidmVyc2lvbiI6InYyIiwicmVzZXRfZGF0ZSI6IjIwMjMtMDktMzAiLCJpYXQiOjE2OTYyODE5OTQsInN1YiI6ImFnZW50LXRva2VuIn0.YWK2YMHxikJ48GVKfyRrj9APUUPHfd0bKwGYH9hxJ3wOKXgjTK9jnbt7Q4GZJPicCwii2o2g6gRdAbei3Bb0i2yk4C1PjpKdrQ5CnU7MREPxk_-N9TIBScxfmoc5NdbGCUFh8A84Mk3VPrGJsRxnXSmIQDCa-xZBTnoAyz5c118RQ33UcpIN4uqVtmbwJ2hR6_Z6ER1TdSYVlAyZ3DeXt9mEDpsUM2cuShkVit9KKdwFlXIS7tG2ubLPKavRGG3963lUgasEPVSPZ5MMAuva3HrsPE9LN6G8tCdVur8eG39drZYDgCuLZwOBB-y9JWHP6CUSPHggnezOM9qb1qr4Qw",
};

export const authSlice = createSlice({
	name: "authentication",
	initialState,
	reducers: {
		authenticate: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
	},
});

listenerMiddleware.startListening({
	actionCreator: authSlice.actions.authenticate,
	effect: (action) => {
		localStorage.setItem("accessToken", action.payload);
	},
});
