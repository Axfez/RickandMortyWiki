import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
  reducerPath: 'characterdata',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character',
  }),
  endpoints: (builder) => ({
    // getCharacters: builder.query({
    //   query: () => '/character',
    // }),
    // getCharacterData: builder.query({
    //   query: (search) => `/character/?name=${search}`,
    // }),
    getCharacter: builder.mutation({
      query: ({ query, status, gender, page }) => {
        return {
          url: `/?page=${page}&name=${query}&status=${status}&gender=${gender}`,
          method: 'get',
        }
      },
    }),
  }),
})

export const {
  // useGetCharactersQuery,
  // useGetCharacterDataQuery,
  useGetCharacterMutation,
} = dataApi
