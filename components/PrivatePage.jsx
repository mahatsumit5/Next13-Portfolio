"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PrivatePage = ({ children }) => {
  const router = useRouter();
  const id = localStorage.getItem("id");
  console.log(id);

  if (!id) {
    return router.push("/");
  }
  return <div>{children}</div>;
};

export default PrivatePage;
