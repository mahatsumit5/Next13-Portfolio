import S3 from "aws-sdk/clients/s3.js";
import fs from "fs";

//upload file to s3
const uploadFile = (file) => {
  const bucketName = process.env.AWS_BUCKET_NAME;
  const region = process.env.AWS_REGION;
  const accessKey = process.env.AWSACCESS_KEY;
  const secretKey = process.env.AWSSECRET_KEY;

  const s3 = new S3({
    region,
    accessKey,
    secretKey,
  });
  try {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: `${new Date()}-${file.name}`,
    };
    return s3.upload(uploadParams).promise();
  } catch (error) {
    console.log(error);
  }
};

export const deleteFile = (file) => {
  console.log(file, "coming from delete function");
  const bucketName = process.env.AWS_BUCKET_NAME;
  const region = process.env.AWS_REGION;
  const accessKey = process.env.AWS_ACCESS_KEY;
  const secretKey = process.env.AWS_SECRET_KEY;

  const s3 = new S3({
    region,
    accessKey,
    secretKey,
  });
  try {
    const deleteParams = {
      Bucket: bucketName,
      Key: file,
    };
    return s3.deleteObject(deleteParams, function (err, data) {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
export default uploadFile;
// download a file from s3
