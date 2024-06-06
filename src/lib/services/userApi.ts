import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userPostData, UserData } from "@/types/userTypes";


// Define el API con todas las consultas y mutaciones
export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    // Consulta para obtener todos los usuarios
    getAllUsers: builder.query<UserData[], null>({
      query: () => "users",
    }),
    // Mutación para crear un nuevo usuario
    postUser: builder.mutation<UserData, userPostData>({
      query: (newUser) => ({
        url: "auth/signIn",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

// Exporta los hooks generados automáticamente para las consultas y mutaciones
export const { useGetAllUsersQuery, usePostUserMutation } = userApi;
