import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
  reducerPath: 'characterdata',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character',
  }),
  endpoints: (builder) => ({
    getCharacter: builder.mutation({
      query: ({ query, status, gender, page }) => {
        return {
          url: `/?page=${page}&name=${query}&status=${status}&gender=${gender}`,
          method: 'get',
        }
      },
    }),
    getId: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/${id}`,
          method: 'get',
        }
      },
    }),
  }),
})

export const { useGetCharacterMutation, useGetIdMutation } = dataApi
