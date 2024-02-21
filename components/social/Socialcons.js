import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import LinkedIn from "../../public/linkedin.svg";
import github from "../../public/github.svg";
import instagram from "../../public/instagram.svg";
import Image from "next/image";
const Socialcons = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/sumit-mahat-9421381a3/"
        target="_blank"
        className=""
      >
        <Image src={LinkedIn} alt="image" height={25} width={25} />
      </a>
      <a
        href="https://github.com/mahatsumit5"
        target="_blank"
        className="dark:bg-white dark:rounded-full"
      >
        <Image src={github} alt="image" height={25} width={25} />
      </a>
      <a
        href="https://www.instagram.com/mahatsumit99/"
        target="_blank"
        className=""
      >
        <Image src={instagram} alt="image" height={25} width={25} />
      </a>
    </>
  );
};

export default Socialcons;
