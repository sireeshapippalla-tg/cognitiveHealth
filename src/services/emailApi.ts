import { api } from './api';

export const emailApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // POST /api/email/send-results-pdf
    sendResultsPdf: builder.mutation({
      query: (formData) => ({
        url: '/email/send-results-pdf',
        method: 'POST',
        body: formData,
      }),
    }),

    // POST /api/email/send-assessment-email
    sendAssessmentEmail: builder.mutation({
      query: (formData) => ({
        url: '/email/send-assessment-email',
        method: 'POST',
        body: formData,
      }),
    }),

    // POST /api/email/our-implementation-process-pdf
    sendImplementationProcessPdf: builder.mutation({
      query: (formData) => ({
        url: '/email/our-implementation-process-pdf',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const {
  useSendResultsPdfMutation,
  useSendAssessmentEmailMutation,
  useSendImplementationProcessPdfMutation,
} = emailApi;
