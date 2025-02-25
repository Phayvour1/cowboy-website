"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const BookLandingPage = () => {
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const bookRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (bookRef.current) {
      gsap.fromTo(
        bookRef.current,
        { opacity: 0, y: 50, rotateY: -10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bookRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <div ref={ctaRef} className="flex flex-col items-center gap-8">
        <button className="bg-red-500 text-white text-2xl font-semibold px-10 py-5 rounded-lg cursor-pointer hover:bg-red-600 transition-all shadow-xl">
          Get Your FREE eBook CLICK HERE NOW!
        </button>

        <div ref={bookRef} className="flex justify-center relative w-full max-w-2xl h-auto overflow-visible">
          <Image
            src="/book-cover.jpg"
            alt="Book Cover"
            width={500}
            height={600}
            className="rounded-md object-cover"
            priority
          />
        </div>

        <button className="bg-red-500 text-white text-2xl font-semibold px-10 py-5 rounded-lg cursor-pointer hover:bg-red-600 transition-all shadow-xl">
          Get Your FREE eBook CLICK HERE NOW!
        </button>
      </div>

      <p className="mt-8 text-xl text-gray-800 text-center max-w-3xl leading-relaxed">
        Share This <span className="font-semibold">Cowboy Love & Romance Novel</span> as a Gift to Your Friends & Family.
        Get a FREE eBook of Dramatic Adventure Now:{" "}
        <a
          href="http://cowboyloveandmystery.com"
          className="text-blue-600 font-bold hover:underline"
        >
          www.cowboyloveandmystery.com
        </a>
      </p>
    </div>
  );
};

export default BookLandingPage;
