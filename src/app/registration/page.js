'use client';
import Link from "next/link";
import { useState } from "react";


const RegisterPage = () => {

    const [user, setUser] = useState({ username: "", phoneNumber: "", password: "" });


    const registration_submit = async (e) => {

        e.preventDefault();
        if (user) {
            const response = await fetch('/api/auth/register', {
                method: "POST",
                body: JSON.stringify(user)
            });
            return response;
        }
        return null;
    };




    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-400 to-indigo-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>

                <form onSubmit={registration_submit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-800 font-semibold mb-2">Username</label>
                        <input type="text" id="username" name='username' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" value={user.username} onChange={e => setUser(p => ({ ...p, username: e.target.value }))} required placeholder="Write User Name" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Phone Number</label>
                        <input type="number" id="phoneNumber" name='phoneNumber' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" value={user.phoneNumber} onChange={e => setUser(p => ({ ...p, phoneNumber: e.target.value }))} required placeholder="Bd Phone Number" autoComplete="off" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">Password</label>
                        <input type="password" id="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" value={user.password} onChange={e => setUser(p => ({ ...p, password: e.target.value }))} required placeholder="Password" autoComplete="off" />
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">Register</button>
                </form>

            </div>
        </div>
    );
};
export default RegisterPage;