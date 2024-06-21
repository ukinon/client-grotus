import React from "react";

export default function LoadingPage() {
  return (
    <div className="fixed top-0 h-screen w-screen z-[9999999]">
      <div className="relative  w-screen h-screen overflow-hidden">
        <div className="flex items-center justify-center h-screen space-x-2 bg-white dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-4 w-4 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-4 w-4 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 rounded-full bg-primary-500 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
