import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
  reducerPath: 'data',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => '/character',
    }),
  }),
})

export const { useGetCharactersQuery } = dataApi


