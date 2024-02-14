"use client";
import LoginForm from "@/components/form/LoginForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();

  // Redirect to login if user is already logged in
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      return;
    }
    router.push("/dashboard");
  }, []);

  return (
    <div className="flex justify-start  flex-col gap-2 items-center min-h-full bg-admin-svg">
      <div className="flex justify-start w-full gap-3 p-5 ">
        <button
          className="p-1 border-2  border-red-300 text-red-600 rounded-md hover:bg-red-400 hover:text-white"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
      </div>
      <LoginForm router={router} />
    </div>
  );
};

export default page;
