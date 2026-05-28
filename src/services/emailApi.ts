import { api } from './api';

export const emailApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // POST /sendCognitiveHealthResultsPackage
    sendResultsPdf: builder.mutation({
      query: (formData) => ({
        url: `${import.meta.env.VITE_API_URL}/sendCognitiveHealthResultsPackage`,
        method: 'POST',
        headers: {
          "X-API-TOKEN": import.meta.env.VITE_TOKEN,
        },
        body: formData,
      }),
    }),

    // POST /api/email/send-assessment-email
    sendAssessmentEmail: builder.mutation({
      query: (formData) => ({
        url: `${import.meta.env.VITE_API_URL}/sendRcmAiReadinessAssessmentResults`,
        method: 'POST',
        headers: {
          "X-API-TOKEN": import.meta.env.VITE_TOKEN,
        },
        body: formData,
      }),
    }),

    // POST /api/email/our-implementation-process-pdf
    sendImplementationProcessPdf: builder.mutation({
      query: (formData) => ({
        url: `${import.meta.env.VITE_API_URL}/sendCognitiveHealthImplementationProcess`,
        method: 'POST',
        headers: {
          "X-API-TOKEN": import.meta.env.VITE_TOKEN,
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
