import { SupabaseAdapter } from '@auth/supabase-adapter';
import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from 'next-auth';


interface HandlerOptions {
  clientId: string;
  clientSecret: string;
}

const authOptions: NextAuthOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    } as HandlerOptions),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  }) as Adapter,
});
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };
