'use client';
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchHello = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/hello`
        );
        const data = await response.text(); 
        console.log(data, "ini response nya");
      } catch (error) {
        console.log(error);
      }
    };
    fetchHello();
  }, []);
  return (
    <h1>Hello</h1>
  );
}
