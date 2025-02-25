"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="bg-[#3B2F2F] text-white py-6 text-center">
      <motion.div
        className="flex flex-col items-center text-center space-y-6 py-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Animated "Join Us!" */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 border-2 border-white px-4 py-2"
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1, 1.2, 1],
            textShadow: [
              "0px 0px 10px rgba(255, 255, 255, 1)",
              "0px 0px 30px rgba(255, 255, 255, 1)",
              "0px 0px 10px rgba(255, 255, 255, 1)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Join Us!
        </motion.h2>

        <motion.p className="text-lg md:text-xl lg:text-2xl font-semibold" variants={fadeIn}>
          Get Your Next eBook And View The SERIES
        </motion.p>

        {/* Social Icons */}
        <motion.div className="flex space-x-6 mt-6" variants={fadeIn}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-red-600 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </a>
        </motion.div>

        <motion.p className="text-blue-700 font-bold text-lg md:text-xl" variants={fadeIn}>
          @romanceshortbooks
        </motion.p>

        <motion.p
          className="text-xs md:text-sm lg:text-base text-gray-500 max-w-md mt-4 leading-relaxed"
          variants={fadeIn}
        >
          <a href="https://cowboyloveandmystery.com" className="text-red-500 italic">
            cowboyloveandmystery.com
          </a>{" "}
          is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
          program designed to provide a means for sites to earn advertising fees by advertising and
          linking to Amazon.
        </motion.p>
      </motion.div>

      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p className="text-lg font-semibold" variants={fadeIn}>
          Cowboy Romance
        </motion.p>
        <motion.div className="flex justify-center gap-4 my-2" variants={fadeIn}>
          <Link href="https://facebook.com" className="hover:text-red-400">
            Facebook
          </Link>
          <Link href="https://twitter.com" className="hover:text-red-400">
            Twitter
          </Link>
          <Link href="https://instagram.com" className="hover:text-red-400">
            Instagram
          </Link>
        </motion.div>
        <motion.p className="text-sm opacity-75" variants={fadeIn}>
          © {new Date().getFullYear()} Cowboy Romance. All Rights Reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
