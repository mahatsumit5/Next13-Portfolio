import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Socialcons = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/sumit-mahat-9421381a3/"
        target="_blank"
        className="social-icon text-white"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/mahatsumit5"
        target="_blank"
        className="social-icon text-white"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.instagram.com/mahatsumit99/"
        target="_blank"
        className="social-icon text-white"
      >
        <AiFillInstagram />
      </a>
    </>
  );
};

export default Socialcons;
