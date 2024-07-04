"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackSpaceButton = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/")}>
      뒤로가기
    </button>
  );
};

export default BackSpaceButton;
