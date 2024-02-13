import { NextResponse } from "next/server";
import multer, { diskStorage } from "multer";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const data = await req.formData();
  const file = data.get("image");
  console.log(file);

  const imgFolderPath = "public/assets/projects";
  const storage = diskStorage({
    destination: (req, file, cb) => {
      cb(null, imgFolderPath);
    },
    filename: (req, file, cb) => {
      const fileName = Date.now() + "-" + file.originalname;
      cb(null, fileName);
    },
  });

  const upload = multer({ storage });
  const files = upload.single("image")(req, null, (err) => {});
  console.log(files);
  // Handle any errors that occurred:

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/projects",
};
