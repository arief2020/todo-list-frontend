"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TodoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const todoList = [
    { title: "Todo 1", description: "Description 1", dueDate: "2023-01-01" },
    { title: "Todo 2", description: "Description 2", dueDate: "2023-01-02" },
    { title: "Todo 3", description: "Description 3", dueDate: "2023-01-03" },
  ];

  const subTodoList = [
	{ title: "Sub Todo 1" },
	{ title: "Sub Todo 2" },
	{ title: "Sub Todo 3" },
  ]
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-5/6 p-5">
      <h1 className="text-3xl font-bold mb-4">Todo</h1>
      <button
        className="py-2 px-4 bg-blue-600 text-white  rounded-md hover:bg-blue-500"
        onClick={openModal}
      >
        Add new todo
      </button>
      <div>
        {todoList.map((todo) => (
          <div
            key={todo.title}
            className="flex justify-center w-full m-3 items-center border-b-2 pb-3"
          >
            <input
              type="checkbox"
              name="value"
              className="w-8 h-8 rounded-lg mr-4"
            />
            <div className="flex w-full items-center">
              <p className="flex-grow">{todo.title}</p>
              <button className="py-2 px-4 bg-yellow-600 text-white  rounded-md hover:bg-yellow-500 mr-4">
                Edit
              </button>
              <button className="py-2 px-4 bg-red-600 text-white  rounded-md hover:bg-red-500 mr-4">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl mb-4">Add New Todo</h2>
            <form>
              <div className="flex">
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter todo title"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter todo description"
                    ></textarea>
                  </div>
				  <div>
					<p>Sub Todo</p>
					{subTodoList.map((subTodo) => (
						<div key={subTodo.title} className="mb-4">
							<p>{subTodo.title}</p>
						</div>
					))}
				  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Due Date
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter todo title"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Status
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter todo title"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Priority
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter todo title"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-500"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* End Modal */}
    </div>
  );
}
