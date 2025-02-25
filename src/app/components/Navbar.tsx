"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3B2F2F] text-white shadow-lg w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold tracking-wide">
          Cowboy Romance
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-lg">
          {["Home", "About", "Books", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="hover:text-red-400 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden bg-[#3B2F2F] text-center py-4 space-y-4 text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {["Home", "About", "Books", "Contact"].map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * ["Home", "About", "Books", "Contact"].indexOf(item) }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="block py-2 hover:text-red-400 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
