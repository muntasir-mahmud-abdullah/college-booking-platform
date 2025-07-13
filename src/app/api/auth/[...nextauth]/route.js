import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';

const handler = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other social media providers here if needed (e.g., GitHub, Twitter)
  ],
  pages: {
    signIn: '/login', // Custom login page
  },
  // Database configuration (optional for MongoDB)
  database: process.env.MONGODB_URI,
});

export { handler as GET, handler as POST };