import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
interface IFeaturedImage {
  /**
   * image source url
   */
  src: string;
  /**
   * text content to be displayed on top of image,
   * for instance (1 of 3)
   */
  before: string;
}
function FeaturedImage({ src, before }: IFeaturedImage) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
      viewport={{ amount: 0.5 }}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      className="py-8 featured-img group relative col-span-3 aspect-[4/3]"
      data-before-content={before}
    >
      <Image
        src={src}
        alt=""
        className="object-cover group-hover:grayscale group-hover:scale-[0.96] duration-150 ease-in group-hover:rounded-xl"
        fill={true}
      />

      {/* Card Text */}

      {/* <AnimatePresence>
        {showOverlay && (
          <motion.div
            onFocus={() => setShowOverlay(true)}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 0.96,
              backgroundColor: "rgba(0,0,0,0.8)",
              borderRadius: 11,
            }}
            transition={{ type: "tween", ease: "easeIn", duration: 0.15 }}
            className="absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center"
          >
            <h3 className="text-4xl font-semibold leadin-loose text-primary uppercase tracking-widest">
              Project Title
            </h3>
            <p className="font-medium text-white leadin-loose">
              description Lorem ipsum dolor sit amet.
            </p>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.div>
  );
}

export default FeaturedImage;
