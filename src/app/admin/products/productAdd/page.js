'use client';
import { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2'


const Dashboard = () => {



    const [productName, setProductName] = useState('');
    const [productImageLink, setProductImageLink] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');



    const productCreate = async (e) => {
        e.preventDefault();

        const product = {
            productName,
            productImageLink,
            productPrice,
            productDescription
        }

        if (product) {
            const response = await fetch('/api/admin/products/productAdd', {
                method: "POST",
                body: JSON.stringify(product)
            });

            if (response.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "The Product has been added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            return response;
        }

        return null;
    };

    return (

        <>
            <div className="navbar-right bg-neutral text-neutral-content">
                <button className="btn btn-ghost text-xl ">Admin</button>
            </div>

            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                </p>
            </div>

            {/* <div className="navbar bg-base-300 text-base-100 flex justify-between">
                <div></div>
                <button className="btn btn-ghost text-neutral-400 btn-outline">Product List</button>
            </div> */}




            <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-6">Add Product</h2>


                <form onSubmit={productCreate}>

                    <div className="mb-4">
                        <label htmlFor="productName" className="block text-gray-700 font-semibold mb-2">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="productImageLink" className="block text-gray-700 font-semibold mb-2">Product Image Link</label>
                        <input
                            type="text"
                            id="productImageLink"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            value={productImageLink}
                            onChange={(e) => setProductImageLink(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="productPrice" className="block text-gray-700 font-semibold mb-2">Product Price</label>
                        <input
                            type="number"
                            id="productPrice"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="productDescription" className="block text-gray-700 font-semibold mb-2">Product Description</label>
                        <textarea
                            id="productDescription"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </>



    );
};

export default Dashboard;
