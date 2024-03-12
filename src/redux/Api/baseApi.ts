import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../Store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  // for get cookies
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQeryWithRefreshToken = async (args, api, extraOption) => {
  const result = await baseQuery(args, api, extraOption);

  if (result.error?.status === 401) {
    // send refresh token
    console.log("sending refresh token");
  }
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQeryWithRefreshToken,
  endpoints: () => ({}),
});
