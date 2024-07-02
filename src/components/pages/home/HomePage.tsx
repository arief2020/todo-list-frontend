import React from "react";
import Header from "./parts/Header";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center grow gap-3">
        <h1 className="text-3xl font-bold">
          Organize Your Work and Life, Effortlessly
        </h1>
        <p className="text-xl">
          Simplify life for you and your team. The world&apos;s leading task
          manager and to-do list app.
        </p>
		<button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}
