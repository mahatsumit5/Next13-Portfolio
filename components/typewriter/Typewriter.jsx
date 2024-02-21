import Typewriter from "typewriter-effect";
import { Black_Ops_One } from "next/font/google";
const Black = Black_Ops_One({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
});
export default function CustomTypewriter() {
  return (
    <div className={``}>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          pauseFor: 1000,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("a Software Developer")
            .deleteAll()
            .typeString(" a FullStack Developer")
            .deleteAll()
            .typeString(" a MERN stack Developer")
            .deleteAll()
            .typeString(" a NEXT.JS Developer")
            .start();
        }}
      />
    </div>
  );
}
