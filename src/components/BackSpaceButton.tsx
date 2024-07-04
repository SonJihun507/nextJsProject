"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackSpaceButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="border-4 border-green-700 mb-2.5"
      onClick={() => router.push("/")}
    >
      뒤로가기
    </button>
  );
};

export default BackSpaceButton;
