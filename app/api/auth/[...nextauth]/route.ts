import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  debug: true, // Enable debug logs
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('Sign in callback', { user, account, profile })
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect callback', { url, baseUrl })
      return baseUrl
    },
    async session({ session, token, user }) {
      console.log('Session callback', { session, token, user })
      return session
    },
    async jwt({ token, account, profile }) {
      console.log('JWT callback', { token, account, profile })
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    }
  }
})

export { handler as GET, handler as POST } 