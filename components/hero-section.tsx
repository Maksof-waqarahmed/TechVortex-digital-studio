"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cover } from "./ui/cover";
import logo from "../assets/images/pixelperfect.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import { HireUSButton } from "./hire-us-button";

export const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <header className="relative z-10 py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link
                href="#"
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <Image
                  className="w-auto h-10"
                  src={logo || "/placeholder.svg"}
                  alt="TechVortex Logo"
                />
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:space-x-10">
              <NavLinks />
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-900 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden mt-4">
              <NavLinks mobile />
            </nav>
          )}
        </div>
      </header>
      <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="absolute bottom-0 right-0 overflow-hidden">
          <img
            className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-poppins">
                <Cover>
                  TechVortex <br /> digital studio
                </Cover>
              </h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                We build beautiful products with the latest technologies and
                frameworks. We are a team of passionate developers and designers
                that love to build amazing products.
              </p>

              <Link
                href="#"
                title=""
                className="inline-flex md:mt-10 mt-10 font-poppins"
                role="button"
              >
                <HireUSButton />
              </Link>

              <Testimonial />
            </div>

            <div className=" hidden md:block xl:col-span-1">
              <img
                className="w-full mx-auto"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const NavLinks = ({ mobile = false }) => {
  const linkClass = `text-base font-semibold font-poppins hover:text-gray-700 transition-colors duration-200 ${
    mobile ? "block py-2" : ""
  }`;

  return (
    <>
      <Link href="#" className={linkClass}>
        HOME
      </Link>
      <Link href="#" className={linkClass}>
        SERVICES
      </Link>
      <Link href="#" className={linkClass}>
        INDUSTRIES
      </Link>
      <Link href="#" className={linkClass}>
        CASE STUDIES
      </Link>
      <Link href="#" className={linkClass}>
        CONTACT US
      </Link>
    </>
  );
};

const Testimonial = () => (
  <div className="mt-8 sm:mt-16">
    <div className="flex items-center justify-center lg:justify-start">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>

    <blockquote className="mt-6">
      <p className="text-lg font-bold text-gray-900 font-poppins">
        Best software house in the market!
      </p>
      <p className="mt-3 text-base leading-7 text-gray-600 font-inter">
        TechVortex developed an exceptional software solution that aligns
        perfectly with our needs. Their team’s technical expertise and attention
        to detail went beyond our expectations, delivering a product that truly
        stands out.
      </p>
    </blockquote>

    <div className="flex items-center justify-center mt-3 lg:justify-start">
      <img
        className="flex-shrink-0 object-cover w-10 h-10 overflow-hidden rounded-full"
        src="https://img.freepik.com/free-photo/portrait-handsome-attractive-stylish-bearded-man-brown_285396-4617.jpg?t=st=1737466491~exp=1737470091~hmac=80c009dc32778d7ed862abe3e988c39cb3a47c5a1c7d0b5ca2f53254504b1b0a&w=1380"
        alt="Denny Jones"
      />
      <p className="ml-2 text-base font-bold text-gray-900 font-poppins">
        Hudson
      </p>
    </div>
  </div>
);
