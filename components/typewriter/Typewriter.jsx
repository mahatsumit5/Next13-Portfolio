import Typewriter from "typewriter-effect";

export default function CustomTypewriter() {
  return (
    <div className="h-[100px]">
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
            .start();
        }}
      />
    </div>
  );
}
