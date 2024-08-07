import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils";
import { buildUrl } from "../../utils";

export const apiSlice = createApi({ 
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }) => `/products/${id}`,
            providesTags: ['Product'],
        }),
        getProducts: builder.query({
            query: (params) => buildUrl('/products', params),
            providesTags: ['Products'],
        }),
        getCategory: builder.query({
            query: ({categoryId}) => `/categories/${categoryId}`,
            providesTags: 'Category'
        }),
        getCategories: builder.query({
            query: (params) => buildUrl('/categories', params),
            providesTags: ['Categories'],
        }),
    }),
})


export const { useGetProductQuery, useGetProductsQuery, useGetCategoryQuery, useGetCategoriesQuery } = apiSlice