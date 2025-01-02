"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error caught by error page:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#09111f] text-white px-4">
      <div className="max-w-md w-full text-center bg-[#0b1a2b] shadow-lg rounded-lg p-8 border border-[#1e293b]">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Something Went Wrong
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          {"An unexpected error occurred. Please try again later."}
        </p>
      </div>
    </div>
  );
}
