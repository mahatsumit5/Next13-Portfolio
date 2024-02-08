import { loginUser } from "@/lib/axios";

import React, { useState } from "react";

function LoginForm({ setFormToDisplay }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleOnSubmit = async () => {
    const { status, user, message } = await loginUser(form);
    console.log(status, user, message);
    if (user?._id && status === "success") {
      localStorage.setItem("id", JSON.stringify(user._id));
      setFormToDisplay("Projects");
    }
  };
  return (
    <form
      className="flex p-8 gap-5 rounded-lg shadow-md border-2 flex-col w-[350px]"
      action={handleOnSubmit}
    >
      <h1 className="text-2xl"> Login </h1>
      <input
        className="w-full border-2 p-3 rounded-md "
        placeholder="email"
        name="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        className="w-full border-2 p-3 rounded-md "
        placeholder="password"
        name="password"
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />{" "}
      <button
        className="w-full p-2 border-1 rounded-md bg-red-600 disabled:bg-red-300 text-white"
        type="submit"
        disabled={!form.email || !form.password}
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
