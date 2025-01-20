// "use client";
// import React from "react";
// import { AuroraBackground } from "./ui/aurora-background";
// import { motion } from "motion/react";
// import { Cover } from "./ui/cover";
// const HeroSection = () => {
//   return (
//     <div className="relative">
//       <AuroraBackground>
//         <motion.div
//           initial={{ opacity: 0.0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="relative flex flex-col gap-4 items-center justify-center px-4"
//         >
//           <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
//             Empowering Your Digital Presence with <br /> <br />{" "}
//             <Cover>Waqsof Digital Studio</Cover>
//           </h1>
//           <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
//             Transforming Ideas into Seamless Digital Experiences
//           </div>
//           <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
//             At Waqsof Digital Studio, we specialize in bringing your ideas to
//             life with innovative web development, stunning designs, and custom
//             software solutions. Let's build something extraordinary together!{" "}
//             <br /> Ready to make your mark in the digital world?
//           </div>
//           <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
//             Get Started Today
//           </button>
//         </motion.div>
//       </AuroraBackground>
//     </div>
//   );
// };

// export default HeroSection;

"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

import moonbeam from "../assets/images/moonbeam.png";
import cursor from "../assets/images/cursor.png";
import rogue from "../assets/images/rogue.png";
import editorially from "../assets/images/editorially.png";
import editrix from "../assets/images/editrix.png";
import pixelperfect from "../assets/images/pixelperfect.png";
import algochurn from "../assets/images/algochurn.png";
import aceternityui from "../assets/images/aceternityui.png";
import tailwindmasterkit from "../assets/images/tailwindmasterkit.png";
import smartbridge from "../assets/images/smartbridge.png";
import renderwork from "../assets/images/renderwork.png";

export function HeroSection() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: moonbeam,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: cursor,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: rogue,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: editorially,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: editrix,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: pixelperfect,
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: algochurn,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: aceternityui,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: tailwindmasterkit,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: smartbridge,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: renderwork,
  },

];
