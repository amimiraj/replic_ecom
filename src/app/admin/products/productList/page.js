'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2'


const productLlist = () => {

    const [products, setProducts] = useState([]);
    let serial = 0;



    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/admin/products/productList');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchData();
    }, []);





    return (

        <>
            <div className="navbar-right bg-neutral text-neutral-content">
                <button className="btn btn-ghost text-xl ">Admin</button>
            </div>

            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                </p>
            </div>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-slate-200 font-bold'>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>product Price</th>
                            <th>prodcut description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map(product => (
                            <tr key={product.id}>
                                <th>{serial++}</th>
                                <td>{product.product_name}</td>
                                <td>{product.product_price}</td>
                                <td>{product.product_description}</td>
                            </tr>
                        ))}






                    </tbody>
                </table>
            </div>






        </>

    );
};

export default productLlist;
