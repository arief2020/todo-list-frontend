'use client';
import React, { useState } from "react";
import Link from "next/link";
import { registerApi } from "@/service/auth/auth.service";
import { useRouter } from "next/navigation";
export default function FormRegister() {
    const router = useRouter();
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      fullName: inputValue.fullName,
      email: inputValue.email,
      password: inputValue.password,
      confirmPassword: inputValue.confirmPassword,
      photo: "photo.png",
    }

    try {
        await registerApi(payload);
        router.push('/login');
    } catch (error) {
        console.error(error);
    }

  }
  return (
    <div className="w-full max-w-md p-8">
      <h3 className="text-2xl font-bold mb-4 text-center">Register</h3>

      <form onSubmit={handleSubmit} method="post" className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            onChange={handleChange}
            value={inputValue.fullName}
            type="text"
            name="fullName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            value={inputValue.email}
            type="text"
            name="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            value={inputValue.password}
            type="password"
            name="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            value={inputValue.confirmPassword}
            type="password"
            name="confirmPassword"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
