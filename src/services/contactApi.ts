import { api } from './api';

export const contactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // POST /api/contact
    saveContact: builder.mutation({
      query: (contactData) => ({
        url: '/contact',
        method: 'POST',
        body: contactData,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useSaveContactMutation } = contactApi;
