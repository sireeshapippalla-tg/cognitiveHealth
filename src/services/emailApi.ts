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
        url: `${import.meta.env.VITE_GLOBAL_COMMAND_CENTER_API_URL}/sendRcmAiReadinessAssessmentResults`,
        method: 'POST',
        headers: {
          "X-API-TOKEN": import.meta.env.VITE_GLOBAL_COMMAND_CENTER_API_TOKEN,
        },
        body: formData,
      }),
    }),

    // POST /api/email/our-implementation-process-pdf
    sendImplementationProcessPdf: builder.mutation({
      query: (formData) => ({
        url: `${import.meta.env.VITE_GLOBAL_COMMAND_CENTER_API_URL}/sendCognitiveHealthImplementationProcess`,
        method: 'POST',
        headers: {
          "X-API-TOKEN": import.meta.env.VITE_GLOBAL_COMMAND_CENTER_API_TOKEN,
        },
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
