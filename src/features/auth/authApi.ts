import { api } from '../../services/api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string; user: { id: string; email: string } }, { email: string; password: string }>({
      query: (payload) => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
