import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_API_URL;

if (import.meta.env.DEV) {
  console.log(`Using API Base URL:`, BASE_URL);
}

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});
