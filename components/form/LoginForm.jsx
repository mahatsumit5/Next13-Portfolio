import { loginUser } from "@/lib/axios";

import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { useCookies } from "react-cookie";
function LoginForm({ router }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies?.token) {
      return;
    } else {
      router.push("/dashboard");
    }
  }, []);
  const handleOnSubmit = async () => {
    setLoading(true);
    const pending = loginUser(form);
    const { status, user, message } = await pending;
    setLoading(false);

    if (user?._id && status === "success") {
      setCookies("token", user._id, { path: "/" });
      router.push("/dashboard");
    }
  };
  return (
    <form
      className="flex p-8 gap-2 rounded-lg shadow-md  flex-col w-[350px] bg-black/30 backdrop-blur-md"
      action={handleOnSubmit}
    >
      <h1 className="text-2xl text-ellipsis font-bold"> Welcome Back </h1>
      <p className="font-thin text-sm text-white">
        Enter your credentails to access your account.
      </p>
      <label>Email</label>
      <input
        className="w-full border-2 p-3 rounded-md focus:outline-dark-red "
        placeholder="johnsmith@gmail.com"
        name="email"
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />{" "}
      <label>Password</label>
      <input
        className="w-full border-2 p-3 rounded-md focus:outline-dark-red "
        placeholder="password"
        name="password"
        required
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />{" "}
      <button
        className="w-full p-2 border-1 rounded-md bg-red-600 disabled:bg-red-300 text-white hover:bg-red-500"
        type="submit"
        disabled={!form.email || !form.password}
      >
        {loading ? <Spinner /> : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;
