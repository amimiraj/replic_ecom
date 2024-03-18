import { NextResponse } from "next/server";
import util from "util";
import db from "../../../../../util/db";

const query = util.promisify(db.query).bind(db);




export const POST = async (req) => {

    const user = await req.json();
    
    try {
        const results = await query(`INSERT INTO users (user_name, phone_number, password) VALUES ('${user.username}', '${user.phoneNumber}', '${user.password}')`);

        if (results) return new NextResponse(user, { status: 201 });

    } catch (error) {
        console.log(error)
        return new NextResponse(error, { status: 400 });
    }


}