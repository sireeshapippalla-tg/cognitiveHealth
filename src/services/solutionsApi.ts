import { api } from './api';

export const solutionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // GET /api/solutions
    getSolutions: builder.query({
      query: (tabName) => {
        if (tabName) {
          return `/solutions?tab=${encodeURIComponent(tabName)}`;
        }
        return '/solutions';
      },
      providesTags: ['Solutions'],
    }),
  }),
});

export const { useGetSolutionsQuery } = solutionsApi;
