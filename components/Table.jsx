import React, { useEffect, useState } from "react";
import { deleteProject, getProjects } from "../lib/axios";
import Image from "next/image";
import Chrome from "../public/chrome.svg";
import git from "../public/github.svg";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "@/redux/useMenuSlice";
import Modal from "./modal/Modal";
import ProjectForm from "./form/ProjectForm";
import DeleteConfirmation from "./modal/DeleteConfirmation";
import ProjectView from "./modal/ProjectView";
import { getProjectsAction } from "../actions/projects.actions";

export default function CustomTable() {
  const dispatch = useDispatch();
  const { editModal, deleteModal, viewModal } = useSelector(
    (store) => store.menuStore
  );
  const { projects } = useSelector((store) => store.projectStore);

  useEffect(() => {
    async function getData() {
      dispatch(getProjectsAction());
    }
    getData();
  }, []);

  function handleModelOpen(item, type) {
    switch (type) {
      case "edit":
        dispatch(
          setModal({
            show: true,
            type,
            ...item,
          })
        );
        return;
      case "view":
        dispatch(
          setModal({
            show: true,
            type,
            ...item,
          })
        );
      case "delete":
        dispatch(
          setModal({
            show: true,
            type,
            ...item,
          })
        );
      default:
        break;
    }
  }

  return (
    <div className=" p-2 overflow-x-auto relative ">
      <table className="   max-w-6xl  bg-white dark:bg-slate-950 shadow-xl table-fixed overflow-scroll ">
        <thead className="bg-slate-300 text-left sticky top-0 z-10">
          <tr className="border-2">
            <th className="p-5 w-[80px] border-2">Status</th>
            <th className="p-5 w-[80px] border-2">Project Name</th>
            <th className="w-36 border-2">Image</th>
            <th className="border-2 w-24"> URL</th>
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
                      item.status === "Active"
                        ? " p-2 rounded-md bg-green-600 text-white"
                        : "p-2 rounded-md bg-red-600 text-white"
                    }
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-2">{item.name}</td>
                <td className=" p-2 relative w-[100px] h-[100px] ">
                  <div className="relative w-[100px] h-[100px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover overflow-hidden"
                      sizes="1024px"
                    />
                  </div>
                </td>

                <td className=" w-24">
                  <div className="w-24 flex justify-center items-start space-x-2 py-2">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      className="text-dark-blue p-1 rounded-full text-xl"
                    >
                      <Image
                        src={git}
                        alt="Github Link"
                        height={24}
                        width={24}
                      />
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
                        className="pt-1"
                      />
                    </a>
                  </div>
                </td>
                <td>1961</td>
                <td className="">{item.description}</td>
                <td className="p-2 flex gap-2 flex-col">
                  <button
                    className="p-2 rounded-lg bg-purple-500 text-white font-bold"
                    onClick={() => {
                      handleModelOpen(item, "view");
                    }}
                  >
                    View
                  </button>
                  <button
                    className="p-2 rounded-lg bg-green-300 text-black font-bold"
                    onClick={() => {
                      handleModelOpen(item, "edit");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="p-2 rounded-lg bg-red-600 text-white font-bold"
                    onClick={() => {
                      handleModelOpen(item, "delete");
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
      {deleteModal && (
        <Modal>
          <DeleteConfirmation />
        </Modal>
      )}
      {editModal && (
        <Modal>
          <ProjectForm title={"Edit project"} />
        </Modal>
      )}
      {viewModal && (
        <Modal>
          <ProjectView />
        </Modal>
      )}
    </div>
  );
}
