"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Synopsis = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-white py-16 px-6 text-center">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/path-to-faint-texture.jpg')] opacity-10"></div>

      {/* Content Wrapper */}
      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-widest mb-4"
          variants={fadeIn}
        >
          A Love Tested by Fate
        </motion.h2>

        {/* Synopsis Text */}
        <motion.p className="text-lg md:text-xl text-gray-700 leading-relaxed" variants={fadeIn}>
          Since losing her mother, Evelyn has been the glue holding her fractured family together,
          enduring her father’s abusive behavior and dangerous criminal connections. But when Will
          Denver—her smoldering, rich, and protective cowboy friend from the past—returns, sparks
          fly in ways neither of them expected.
        </motion.p>

        <motion.p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed" variants={fadeIn}>
          With danger closing in, Evelyn must decide: risk it all for love and mystery, or sacrifice
          her heart to save her family? ✨ Dive into this gripping cowboy romance filled with
          loyalty, adventure, and redemption!
        </motion.p>

        {/* CTA Button */}
        <motion.div className="mt-8" variants={fadeIn}>
          <motion.a
            href="/buy-now"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-lg md:text-xl px-6 py-3 rounded-full shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Copy Now 📖
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Synopsis;
