'use client';
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";


const LoginPage = () => {


    const [user, setUser] = useState({ phoneNumber: "", password: "" });


    const handleSubmit = async (e) => {
        e.preventDefault();

        signIn("credentials", {
            phoneNumber: user.phoneNumber,
            password: user.password
        });

    };



    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-200 to-indigo-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-800 font-semibold mb-2">Phone Number</label>
                        <input type="number" id="phoneNumber" name='phoneNumber' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" value={user.phoneNumber} onChange={e => setUser(p => ({ ...p, phoneNumber: e.target.value }))} required placeholder="Bd Phone Number" autoComplete="off" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">Password</label>
                        <input type="password" id="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" value={user.password} onChange={e => setUser(p => ({ ...p, password: e.target.value }))} required placeholder="Password" autoComplete="off" />
                    </div>

                    <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">Login</button>
                </form>


            </div>
        </div>
    );
};

export default LoginPage;