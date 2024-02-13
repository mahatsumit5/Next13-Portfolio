"use server";
import multer, { diskStorage } from "multer";
const imgFolderPath = "public/assets/skills";
const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, imgFolderPath);
  },
  filename: (req, file, cb) => {
    console.log("fileName");
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

export const upload = multer({ storage });
