import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type RawProductList = {
  title: string;
  products: [];
};

export const productListAPI = createApi({
  reducerPath: "productListAPI",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://raw.githubusercontent.com/kp2103/blinkit_data/refs/heads/main",
  }),
  endpoints: (builder) => ({
    getAllProductList: builder.query<RawProductList[], string>({
      query: (query) => {
        console.log("Fetching Query:", query);
        return {
          url: "/products.json",
        };
      },
    }),
  }),
});

export const { useGetAllProductListQuery } = productListAPI;
