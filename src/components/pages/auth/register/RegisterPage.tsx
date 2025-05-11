import React from 'react'
import Link from "next/link";
import SideMotivation from '../SideMotivation';
import FormRegister from './part/FormRegister';
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
        <FormRegister />
      </div>
    </div>
  );
}
