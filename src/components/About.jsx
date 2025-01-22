import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-md uppercase md:text-[40px] text-gray-500">
          We Are
        </p>

        <AnimatedTitle
          title="<b>The <b>Pi<b>o</b>neers <b>In<br /> <b>Immersive <b>Property <b>Visual <b>Experiences</b>"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p className="text-gray-500 font-bold">We bring spaces to life like never before.</p>
          <p className="text-gray-500 font-bold">
            From real estate showcases to architectural marvels, our services bridge the gap between vision and reality.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
