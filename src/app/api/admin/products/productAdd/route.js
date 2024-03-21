import { NextResponse } from "next/server";
import util from "util";
import db from "../../../../..///../util/db";

const query = util.promisify(db.query).bind(db);


export const POST = async (req) => {

    const product = await req.json();

    try {
        const results = await query(`INSERT INTO  products (product_name, product_image_link, product_price, product_description) VALUES ('${product.productName}',
             '${product.productImageLink}', ${product.productPrice},'${product.productDescription}')`);
        if (results) return new NextResponse(product, { status: 201 });
    } catch (error) {
        console.log(error)
        return new NextResponse(error, { status: 400 });
    }


}