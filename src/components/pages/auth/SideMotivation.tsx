import React from 'react'
interface Props {
	title: string;
	description: string;
}
export default function SideMotivation({ title, description } : Props) {
  return (
    <div className="flex flex-col justify-center items-centertext-center grow text-center">
      <h1 className="text-4xl font-bold mb-2">
        {title}
      </h1>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
