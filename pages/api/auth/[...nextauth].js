import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23li6DRvVQXGjP7yrl',
      clientSecret: 'c0009564f97e0ed4e5c0aebec4f0291e8b1af210',
    }),
  ],
  secret : 'asdlkj9457!!',

  // db어댑터 세팅
  adapter : MongoDBAdapter(connectDB) 
};
export default NextAuth(authOptions); 