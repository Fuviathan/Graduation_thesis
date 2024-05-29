import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'
import { API_BASE_URL } from "@/config/apiConfig";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        usernameOrEmail: { label: 'Username or Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(`${API_BASE_URL}api/auth/login`, {
            usernameOrEmail: credentials.usernameOrEmail,
            password: credentials.password,
          }, {
            headers: {
              accept: '*/*',
              'Content-Type': 'application/json'
            }
          });
          const { accessToken, refreshToken, tokenType } = response.data;
          console.log(response.data)
          if (accessToken) {
            return {
              accessToken,
              refreshToken,
              tokenType,
            }
          }
          return null;
        } catch (error) {
          console.log(error.response?.data?.message || 'Login failed');
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          redirect_uri: `oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect`
        }
      }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    jwt: true
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.tokenType = user.tokenType;
      }
      return token
    },
    async session(session, token) {
      if (token.accessToken1) {
        session.accessToken2 = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.tokenType = token.tokenType;
        try {
          const userResponse = await axios.get(`${API_BASE_URL}api/auth/profile`, {
            headers: {
              Authorization: `Bearer ${token.accessToken2}`,
            }
          });
          session.user = userResponse.data;
        } catch (error) {
          console.error("Failed to fetch user:", error.response?.data || error.message);
        }
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
})
