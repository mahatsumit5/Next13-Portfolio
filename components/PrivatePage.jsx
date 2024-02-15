"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const PrivatePage = ({ children }) => {
  const [id, setId] = useState(null);
  console.log(id);
  const router = useRouter();
  useEffect(() => {
    const id = localStorage.getItem("id");
    setId(id);
  }, []);

  return id ? children : router.push("/");
};

export default PrivatePage;
