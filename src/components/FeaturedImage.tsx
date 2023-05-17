import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      className="py-8 featured-img relative col-span-3 aspect-[4/3]"
      data-before-content={before}
    >
      <Image
        src={src}
        alt=""
        className="object-cover hover:grayscale hover:scale-[0.96] duration-150 ease-in hover:rounded-xl"
        fill={true}
      />
    </motion.div>
  );
}

export default FeaturedImage;
