import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dblApi = createApi({
    reducerPath: 'dblApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/'
    }),
    endpoints: () => ({})
});