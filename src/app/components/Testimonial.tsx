"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I finished reading and the time flew by – I’m already on the second one! I’m a fan for sure! Exciting and fun – clean romance!",
    name: "Michelle Green",
    role: "Stay-at-home mom",
  },
  {
    text: "Great CLEAN and SUSPENSEFUL story! I enjoyed it so much! I’ve lent it to my teenage daughter! – She loves it too!",
    name: "Leanne Davey",
  },
  {
    text: "Wow! I love reading about a strong female lead with a rugged man at her side – overcoming major obstacles and finding love! I want more!",
    name: "Stacey L",
  },
  {
    text: "A captivating blend of romance and suspense! The cowboy charm and thrilling plot twists kept me hooked from start to finish.",
    name: "Emily Sanders",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Testimonials
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
              <p className="mt-4 font-semibold text-gray-900">{testimonial.name}</p>
              {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
            </motion.div>
          ))}
        </div>

        {/* Description Text Below */}
        <motion.div
          className="mt-12 text-gray-700 max-w-2xl mx-auto text-center leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-4xl text-red-600 mb-4">📖</div>
          <p className="text-lg">
            Discover the thrill of Western mystery novels and the passion of cowboy romance book
            series with our mystery romance books that will keep you turning pages late into the
            night. Whether you love Western romance novels, short love stories to read, or clean
            historical Western romance, these captivating tales of rugged cowboys and heartfelt love
            offer the perfect escape. From romantic short fiction to cowboy ménage romance books,
            our collection features the best cowboy romance novels crafted by the best Western
            romance authors. If you’re looking for Western romance reads filled with adventure,
            passion, and timeless love, dive into our Western romance stories today!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
