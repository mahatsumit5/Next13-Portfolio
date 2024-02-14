import React, { useEffect, useState } from "react";
import { deleteProject, getProjects } from "../lib/axios";
import Image from "next/image";
import Chrome from "../public/chrome.svg";
import git from "../public/github.svg";
import { useDispatch } from "react-redux";
import { setModal } from "@/redux/useMenuSlice";

export default function CustomTable() {
  const theme = localStorage.getItem("theme");
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function getData() {
      const { projects } = await getProjects();

      setProjects(projects);
    }
    getData();
  }, []);

  function handleModelOpen(item) {
    dispatch(
      setModal({
        show: true,
        ...item,
      })
    );
  }

  async function handleDelete(id) {
    await deleteProject(id);
  }
  return (
    <div className=" relative overflow-x-auto ">
      <table className="   w-[1220px]  bg-white dark:bg-slate-950 shadow-xl table-fixed overflow-scroll ">
        <thead className="bg-slate-300 text-left">
          <tr className="border-2">
            <th className="p-5 w-[80px] border-2">Status</th>
            <th className="p-5 w-[80px] border-2">Project Name</th>
            <th className="w-28 border-2">Image</th>
            <th className="border-2 w-1/12"> URL</th>
            <th className="w-2/12 border-2">Technologies Used</th>
            <th className="w-3/12 border-2">Description</th>
            <th className="w-2/12">Actions</th>
          </tr>
        </thead>
        <tbody className="p-4 border-2 rounded-md divide-y-2 divide-solid divide-gray-200 text-center overflow-scroll">
          {projects.map((item) => {
            return (
              <tr key={item._id}>
                <td className="p-2">
                  <span
                    className={
                      true
                        ? " p-2 rounded-md bg-green-600 text-white"
                        : "p-2 rounded-md bg-red-600 text-white"
                    }
                  >
                    {true ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="p-2">{item.name}</td>
                <td className=" p-2 relative w-[100px] h-[100px] ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </td>

                <td className="flex gap-2 text-center items-center justify-around py-6 px-4 ">
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    className="text-dark-blue p-1 rounded-full text-xl"
                  >
                    <Image src={git} alt="Github Link" height={25} width={25} />
                  </a>

                  <a
                    href={item.chrome}
                    target="_blank"
                    className="text-dark-blue hover:underline text-2xl"
                  >
                    <Image
                      src={Chrome}
                      alt="chrome.svg"
                      height={24}
                      width={24}
                    />
                  </a>
                </td>
                <td>1961</td>
                <td className="">{item.description}</td>
                <td className="p-2 flex gap-2 flex-col">
                  <button
                    className="p-2 rounded-lg bg-purple-500 text-white font-bold"
                    onClick={() => {
                      handleModelOpen(item);
                    }}
                  >
                    View
                  </button>
                  <button className="p-2 rounded-lg bg-green-300 text-black font-bold">
                    Edit
                  </button>
                  <button
                    className="p-2 rounded-lg bg-red-600 text-white font-bold"
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
