import React from 'react'
import Link from "next/link";
import SideMotivation from '../SideMotivation';
export default function RegisterPage() {
  const motivation = {
    title: "Stay Organized, Stay Productive.",
    description:
      "Simplify your tasks and boost your productivity with the top-rated task manager and to-do list app",
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col bg-white shadow-md p-8">
        <h3 className="text-2xl font-bold mb-4">TodoList</h3>
        <SideMotivation
          title={motivation.title}
          description={motivation.description}
        />
      </div>
      <div className="flex-1 flex items-center justify-center bg-blue-50">
        <div className="w-full max-w-md p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Register</h3>
          <form method="post" className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
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
      </div>
    </div>
  );
}
