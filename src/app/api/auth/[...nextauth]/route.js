import { NextResponse } from "next/server";
import util from "util";
import db from "../../../../../util/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const query = util.promisify(db.query).bind(db);


export const authOption = {
    session: {
        strategy: 'jwt'
    },

    providers: [
        CredentialsProvider({

            async authorize(credentials) {

                if (!credentials?.phoneNumber || !credentials?.password) {
                    return null;
                }

                let user = await query(`SELECT * FROM users WHERE phone_number = '${credentials.phoneNumber}'`);

                user = user[0];

                if (!user) {
                    return null;
                }

                if (user.password) {
                    return user.password === credentials.password ? user : null;
                }

            }
        })
    ],


    secret: 'secret'
}

const handler = NextAuth(authOption);


export {handler as GET , handler as POST}