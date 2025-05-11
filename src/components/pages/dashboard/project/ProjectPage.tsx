'use client';
import React from "react";

export default function ProjectPage() {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
  const projectList = [
    { title: "Project 1", description: "Description 1" },
    { title: "Project 2", description: "Description 2" },
    { title: "Project 3", description: "Description 3" },
  ];
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Project</h1>
      <button className="py-2 px-4 bg-blue-600 text-white  rounded-md hover:bg-blue-500">
        Add New Project
      </button>
      <div className="grid grid-cols-4">
        {projectList.map((project) => (
          <div key={project.title}>
            <div className="p-8 shadow-md">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p>{project.description}</p>
              <div className="pt-5">
                <button className="py-2 px-4 bg-yellow-600 text-white  rounded-md hover:bg-yellow-500 mr-4">
                  Edit
                </button>
                <button className="py-2 px-4 bg-red-600 text-white  rounded-md hover:bg-red-500 mr-4">
                  Delete
                </button>
              </div>
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
