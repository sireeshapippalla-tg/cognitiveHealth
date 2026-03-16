import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base API slice using RTK Query
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  // Tag types are used for cache invalidation if needed later
  tagTypes: ['Leads', 'Contact', 'Solutions'],
  endpoints: (builder) => ({
    
    // 1. POST /api/contact
    saveContact: builder.mutation({
      query: (contactData) => ({
        url: '/contact',
        method: 'POST',
        body: contactData,
      }),
    }),

    // 3. GET /api/solutions
    // Optionally accepts a tab name to filter
    getSolutions: builder.query({
      query: (tabName) => {
        if (tabName) {
          return `/solutions?tab=${encodeURIComponent(tabName)}`;
        }
        return '/solutions';
      },
      providesTags: ['Solutions'],
    }),

    // 4. POST /api/email/send-results-pdf
    sendResultsPdf: builder.mutation({
      query: (formData) => ({
        url: '/email/send-results-pdf',
        method: 'POST',
        body: formData,
        // FormData should not have Content-Type set manually (browser sets boundary)
      }),
    }),

    // 5. POST /api/email/send-assessment-email
    sendAssessmentEmail: builder.mutation({
      query: (formData) => ({
        url: '/email/send-assessment-email',
        method: 'POST',
        body: formData,
      }),
    }),

  }),
});

// Export hooks for usage in functional components
export const {
  useSaveContactMutation,
  useGetSolutionsQuery,
  useSendResultsPdfMutation,
  useSendAssessmentEmailMutation,
} = apiSlice;
