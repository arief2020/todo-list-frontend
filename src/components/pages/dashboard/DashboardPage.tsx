import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex w-full h-screen">
      {/* sidebar */}
      <div className="w-1/6 p-5 bg-slate-500 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-white">Todo List</h3>
        <div className="flex justify-center flex-col items-center flex-grow">
          <div className="flex justify-center">
            <Image
              className="rounded-full w-32 h-32 my-5"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="photo"
              width={150}
              height={150}
            />
          </div>
          <p className="text-white">Full Name</p>
          <nav className="text-white mt-5 w-full text-center flex-grow">
            <ul>
              <Link href="/dasboard/todo">
                <li className="p-5 border-y-2 hover:bg-slate-700 cursor-pointer">Todo</li>
              </Link>
              <Link href="/dashboard/project">
                <li className="p-5 border-y-2 hover:bg-slate-700 cursor-pointer">Project</li>
              </Link>
            </ul>
          </nav>
          <p className="text-white mt-5">Logout</p>
        </div>
      </div>
      {/* end sidebar */}
      {/* content */}
      <div className="w-5/6 p-5">ini content</div>
      {/* end content */}
    </div>
  );
}
