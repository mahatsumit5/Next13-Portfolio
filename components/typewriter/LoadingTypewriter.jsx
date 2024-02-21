import Typewriter from "typewriter-effect";
import { Black_Ops_One } from "next/font/google";
const Black = Black_Ops_One({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
});
export default function LoadingTypewriter() {
  return (
    <div className={``}>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          pauseFor: 300,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("...")
            .deleteAll()

            .start();
        }}
      />
    </div>
  );
}
