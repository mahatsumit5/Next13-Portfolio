import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetModal } from "../../redux/useMenuSlice";
import { deleteProject, deleteSkill } from "../../lib/axios";
import { openToast } from "../../redux/toastSlice";
import {
  getActiveProjectsAction,
  getProjectsAction,
} from "../../actions/projects.actions";
import {
  getActiveSkillsAction,
  getAllSkillsAction,
} from "../../actions/skills.action";
const DeleteConfirmation = () => {
  const dispatch = useDispatch();
  const { currentProject, deleteModal, currentSkill } = useSelector(
    (store) => store.menuStore
  );
  async function handleDelete() {
    const response =
      deleteModal.type === "delete project"
        ? await deleteProject(currentProject._id)
        : await deleteSkill(currentSkill._id);
    console.log(response);
    dispatch(resetModal());
    dispatch(
      openToast({
        variant: "success",
        message: "Your project has been deleted.",
      })
    );
    switch (deleteModal.type) {
      case "delete project":
        dispatch(getProjectsAction());
        dispatch(getActiveProjectsAction());

      case "delete skill":
        dispatch(getAllSkillsAction());
        dispatch(getActiveSkillsAction());
    }
  }
  if (!deleteModal.isOpen) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-md font-bold">
        Are you sure want to delete this item?{" "}
      </h1>
      <p className="font-sans text-sm text-gray-400">
        This action cannot be undone{" "}
      </p>
      <span className="flex gap-2 w-full justify-start">
        <button
          className="p-2 border-2 rounded-lg  text-black bg-slate-300 hover:bg-slate-200 font-bold"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="p-2 border-2 rounded-lg bg-red-500 hover:bg-red-700 text-white font-bold"
          onClick={() => {
            dispatch(resetModal());
          }}
        >
          Cancel
        </button>
      </span>
    </div>
  );
};

export default DeleteConfirmation;
