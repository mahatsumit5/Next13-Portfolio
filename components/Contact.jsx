"use client";

import { useRef, useState } from "react";
import SectionTitle from "./SectionTitle.js/SectionTitle";
import Socialcons from "./social/Socialcons";
import emailjs from "@emailjs/browser";
import { openToast } from "../redux/toastSlice";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oh1i721", "template_jmbvhh5", form, {
        publicKey: "HBNbSr2jU8PS2y0hW",
      })
      .then(
        () => {
          openToast({
            variant: "success",
            message: "Message sent.",
          });
          setForm({});
        },
        (error) => {
          openToast({
            variant: "error",
            message: error.message,
          });
        }
      );
  };
  return (
    <div
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] bg-light-bg"
      id="contact"
    >
      <div className="max-w-[1250px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div>
            {/* contact form */}
            <SectionTitle title={"Contact Me"} />

            <p className="text-dark-blue mt-2">
              Wanna work on a project togther.
              <br></br>
              Feel free to contact me.
            </p>
            <p className="text-dark-blue mt-12">Email me at:</p>
            <h4>
              <a href="#" className="text-lg font-semibold text-dark-blue">
                mahatsumit5@gmail.com
              </a>
            </h4>
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5 className="text-dark-blue">Socials</h5>
                <div className="flex gap-5">
                  <Socialcons />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div>
            <form className="w-full mt-2" onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full text-gray-700 border-slate-200 rounded py-4 px-4 mb-4 leading-tight focus:outline-dark-red"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  className="w-full text-gray-700 border-slate-200 rounded py-4 px-4 mb-4 leading-tight focus:outline-dark-red"
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  style={{ resize: "none" }}
                  placeholder="message"
                  className="w-full text-gray-700 border-slate-200 rounded py-4 px-4 mb-4 leading-tight focus:outline-dark-red"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="transition-all duration-150  rounded-lg py-3 px-6 text-white bg-dark-red hover:shadow-lg hover:bg-dark-red/75"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
