import { NextResponse } from "next/server";
import util from "util";
import db from "../../../../../../util/db";

const query = util.promisify(db.query).bind(db);

export const GET = async (req, res) => {

    try {
        const results = await query(`SELECT * FROM products`);

        console.log(results);
        return NextResponse.json(results, { status: 200 });
    } catch (error) {
        console.log(error)
        return new NextResponse(error, { status: 400 });
    }

}

  

