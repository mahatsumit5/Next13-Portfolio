import bcrypt from "bcryptjs";
const salt = 10;
export const hashPassword = (plainPassword) => {
  console.log(plainPassword);
  return bcrypt.hashSync(plainPassword, salt);
};
export const checkPassword = (plainPassword, userPassword) => {
  return bcrypt.compareSync(plainPassword, userPassword);
};
