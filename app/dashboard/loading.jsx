import React from "react";
import Spinner from "../../components/Spinner";

export default function Loading() {
  return (
    <div className="fixed z-50 h-[100vh] w-[100vw] bg-black/60 flex justify-center items-center">
      <Spinner />
    </div>
  );
}
