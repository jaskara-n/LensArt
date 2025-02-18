"use client";
import Image from "next/image";
import img1jpg from "../../public/img1jpg.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";
import img4 from "../../public/img4.jpg";
import { motion, useScroll } from "motion/react";

function HomePage() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="main-container bg-cover bg-center bg-no-repeat text-primary"
        style={{
          backgroundImage: `url(${img1jpg.src})`,
        }}
      >
        <div className="flex flex-col gap-4 p-8">
          <h1>Photoshoots.</h1>
          <h1>Wedding.</h1>
          <h1>Events.</h1>
        </div>
      </div>

      {/* Image and Video Section */}
      <div className="py-4 px-3">
        <div className="flex flex-row">
          <div className="flex-col w-1/2">
            <div>
              <motion.div style={{ scaleX: scrollYProgress }} />
              <Image src={img3} alt="img3" layout="intrinsic" />
            </div>
            <div>
              <Image src={img4} alt="img4" layout="intrinsic" />
            </div>
          </div>

          <div className="w-1/2">
            <Image src={img2} alt="img2" layout="intrinsic" />
            <h1 className="text-primary text-center flex items-center h-1/2">
              Capturing moments that last a lifetime.
            </h1>
          </div>
        </div>

        <div className="h-screen mt-8 relative">
          <video
            className="w-full h-full object-cover opacity-80"
            src={"/vid1.mp4"}
            autoPlay
            muted
            loop
          ></video>
          <h1 className="absolute inset-0 flex items-center justify-center z-10 ">
            Capturing love from every angle, where every moment feels timeless.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
