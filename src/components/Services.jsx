import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import VrGlass from '../assets/virtual-reality-glasses.png'
import camera from '../assets/camera.png'
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="What Services we offer"
          text="Step into the future of property listings with our cutting-edge virtual tour services."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img src="/assets/vrImage.jpeg"/>
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto text-black text-col font-bold">
              <h4 className="h4 mb-4">Immersive Property Visuals</h4>
              <p className="body-2 mb-[3rem] text-black text-col font-bold">
                Bring unbuilt concepts to life with stunning 3D visualizations. Using advanced tech, we create hyper-realistic 3D models and videos of properties, allowing clients to see what their future space could look like.
              </p>
              <ul className="body-3">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-1 border-t font-bold border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Professional Photography and Videography</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Our team of professional photographers and videographers specializes in capturing properties in their best light. From detailed shots of interiors to captivating videos of exterior spaces, we ensure every angle highlights the property's unique features.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Virtual Tour Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Using advanced technology, we create interactive, 360-degree walkthroughs that allow potential buyers or renters to explore properties from anywhere in the world.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={VrGlass}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
