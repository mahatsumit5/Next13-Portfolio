import { useRouter } from "next/navigation";
import React from "react";

const PrivatePage = (children) => {
  const router = useRouter();
  return <div>{children}</div>;
};

export default PrivatePage;
