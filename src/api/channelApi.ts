// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const channelApi = createApi({
  reducerPath: "channelApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getChannelList: builder.query<any, string>({
      query: () => `products`,
    }),
    getChannelDetail: builder.query<any, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetChannelListQuery, useGetChannelDetailQuery } = channelApi;
