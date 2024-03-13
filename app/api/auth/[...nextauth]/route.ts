import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

interface HandlerOptions {
  clientId: string;
  clientSecret: string;
}

const handler: NextApiHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    } as HandlerOptions),
  ],
});

export { handler as GET, handler as POST };
