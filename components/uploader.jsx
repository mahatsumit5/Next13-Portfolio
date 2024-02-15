import { UploadButton, UploadDropzone } from "@uploadthing/react";
import { useDispatch } from "react-redux";
import { openToast } from "../redux/toastSlice";

export const OurUploadButton = ({ setForm, form, dispatch }) => (
  <UploadDropzone
    className="bg-slate-200 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      // Do something with the response
      console.log("File link ", res[0].url);
      setForm({ ...form, image: res[0].url });
      dispatch(
        openToast({
          variant: "success",
          message: "Your image has been uploaded.",
        })
      );
    }}
    onUploadError={(error) => {
      // Do something with the error.
      alert(`ERROR! ${error.message}`);
    }}
    onBeforeUploadBegin={(files) => {
      // Preprocess files before uploading (e.g. rename them)
      return files.map(
        (f) => new File([f], new Date() + f.name, { type: f.type })
      );
    }}
    onUploadBegin={(name) => {
      // Do something once upload begins
      console.log("Uploading: ", name);
    }}
  />
);
