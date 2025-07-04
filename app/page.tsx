/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from "framer-motion";
import { getSectionAnim } from "./animation-util";

export default function Home() {


  return (
    <main className="flex flex-col items-center w-full font-[var(--font-body)]">
      <Hero />
      <SignatureDishes />
      <AboutUs />
      <FeaturedItems />
      <Gallery />
      <LocationAndHours />
      <ContactUs />
    </main>
  );
}

function Hero() {

  return (
    <section
      id='hero'
      className="w-full md:mt-0 md:min-h-[600px] md:pt-25 overflow-hidden md:relative"

    >
      <div className="w-full mx-auto mt-15 px-4 md:px-6 py-16 md:h-[600px] md:relative md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 items-center relative">

        {/* Left Text */}
        <div
          className="
      space-y-8
      text-center md:text-left
      px-2 md:px-0 md:left-50
      relative
      md:absolute md:left-0 md:top-55 md:-translate-y-1/2
      md:bottom-auto
      z-10
    "
        >
          <motion.h1 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-6xl md:text-8xl font-[Anton] leading-tight tracking-wide">
            SLAM INTO <br /> FLAVOR!
          </motion.h1>
          <motion.p {...getSectionAnim({ direction: "", delay: 0.15 })} className="text-xl md:text-3xl font-medium text-[--foreground]">
            Handcrafted Burgers <br /> & Crispy Wings
          </motion.p>
          <motion.a
            {...getSectionAnim({ direction: "", delay: 0.20 })}
            href="/menu"
            className="inline-block bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] px-5 py-3 rounded-md font-semibold text-xl tracking-wide transition"
          >
            SEE OUR MENU
          </motion.a>
        </div>

        {/* Right Burger Image */}
        <motion.div
          {...getSectionAnim({ direction: "", delay: 0.25 })}
          className="
      w-full
      max-w-[480px] mx-auto
      md:max-w-[600px]
      md:absolute md:right-35 md:top-0 md:w-auto
      z-10
    "
        >
          <img
            src="/1-landing/1-hero/hero_resim.png"
            alt="Burger Hero"
            className="h-auto object-contain"
            loading="eager"
            draggable={false}
          />
        </motion.div>

        {/* Background squiggle */}
        <img
          src="/1-landing/1-hero/hero_arkaplan.png"
          alt="Background Decorative Squiggle"
          className="absolute bottom-0 left-0 w-[100px] md:w-[180px] translate-x-[-20%]"
        />
      </div>
    </section>

  );
}

function SignatureDishes() {
  return (
    <section id='signature' className="relative w-full px-4 md:px-12 py-16 md:py-20 overflow-hidden">
      {/* Background squiggle image (position altered only on mobile) */}
      <img
        src="/1-landing/2-signature/signature_arkaplan.png"
        alt="Signature Section Background"
        className="absolute top-0 left-0 w-[90px] md:w-auto -translate-x-4 md:translate-x-0 pointer-events-none"
        style={{ maxWidth: '100%' }}
      />

      <div className="max-w-7xl mx-auto relative mt-10 z-10">
        {/* Heading */}
        <motion.h2 {...getSectionAnim({ direction: "up", delay: 0.2 })} className="text-6xl md:text-8xl font-[Anton] text-center mb-6 md:mb-20 relative">
          SLAM SIGNATURE DISHES
        </motion.h2>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Dish 1 */}
          <motion.div {...getSectionAnim({ direction: "up", delay: 0.3 })} className="bg-white/20 rounded-xl md:w-100 md:relative text-center p-5 md:p-0 shadow-sm w-full max-w-sm mx-auto">
            <Image
              src="/1-landing/2-signature/signature_resim_1.png"
              alt="Double Slam Burger"
              width={225}
              height={225}
              className="mx-auto md:mt-8"
            />
            <div className='md:absolute md:bottom-0 md:mb-5 md:mx-5 md:w-90'>
              <h3 className="text-2xl w-full font-semibold mb-2">Double Slam Burger</h3>
              <p className="text-md text-gray-700">
                Two smashed patties, lettuce, tomato, on a toasted bun
              </p>
            </div>

          </motion.div>

          {/* Dish 2 */}
          <motion.div {...getSectionAnim({ direction: "down", delay: 0.4 })} className="bg-white/20 md:relative rounded-xl md:w-100 text-center p-5 shadow-sm w-full max-w-sm mx-auto">
            <Image
              src="/1-landing/2-signature/signature_resim_2.png"
              alt="Spicy Cluck"
              width={210}
              height={210}
              className="mx-auto"
            />
            <div className='md:absolute md:bottom-0 md:mb-5 md:mx-0 md:w-90'>
              <h3 className="text-2xl font-semibold mt-6 mb-2">Spicy Cluck</h3>
              <p className="text-md text-gray-700">
                Crispy fried chicken, spicy mayo, pickles, served on a brioche bun
              </p>
            </div>

          </motion.div>

          {/* Dish 3 */}
          <motion.div {...getSectionAnim({ direction: "up", delay: 0.5 })} className="bg-white/20 md:relative rounded-xl md:w-100 md:h-[320px] text-center p-5 shadow-sm w-full max-w-sm mx-auto">
            <Image
              src="/1-landing/2-signature/signature_resim_3.png"
              alt="Double Smash"
              width={210}
              height={225}
              className="mx-auto"
            />
            <div className='md:absolute md:bottom-0 md:mb-5 md:mx-0 md:w-90'>
              <h3 className="text-2xl font-semibold mt-6 mb-2">Double Smash</h3>
              <p className="text-md text-gray-700">
                Two beef patties pressed seared, topped with melted cheese
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>

  );
}

function AboutUs() {
  const [open, setOpen] = useState(false);

  const aboutText = (
    <>
      At <strong>SlamBurger</strong>, we don’t just make burgers — we craft bold, flavor-packed experiences that hit hard and leave a lasting impression. <br />
      Every patty is made from premium cuts, smashed and seared to lock in juices, while our buns are toasted golden for the perfect crunch. <br />
      From sharp cheddar to crispy smoked bacon, fresh lettuce to tangy sauces — every ingredient is chosen with care to elevate your taste buds. <br />
    </>
  );

  // Short preview for mobile toggle
  const mobilePreview = (
    <>
      At <strong>SlamBurger</strong>, we don’t just make burgers — we craft bold, flavor-packed experiences that hit hard and leave a lasting impression. <br />
      Every patty is made from premium cuts, smashed and seared to lock in juices, while our buns are toasted golden for the perfect crunch.
    </>
  );
  return (
    <section id='about' className="relative w-full px-4 md:px-12 py-0 md:py-20 overflow-hidden">
      {/* Background squiggle */}
      <Image
        src="/1-landing/3-about/about_arkaplan.png"
        alt="Background Decoration"
        width={140}
        height={140}
        className="absolute bottom-0 left-0 w-[80px] md:w-[140px] opacity-70 pointer-events-none -translate-x-2 md:translate-x-0"
        style={{ maxWidth: '100%' }}
      />

      <div className="max-w-8xl mx-auto grid md:relative md:w-[%100] grid-cols-1 md:flex gap-5 items-center md:mx-25 z-10 relative">
        {/* Left Side: Text */}
        <motion.div
          {...getSectionAnim({ direction: "", delay: 0.1 })}
          className="
    px-4 md:px-0
    mt-8 md:mt-0
    md:mb-25
    w-full md:w-150
    md:ml-25
    relative
  "
        >
          <h2 className="
    text-6xl tracking-wide
    md:text-8xl
    font-[Anton]
    mb-8 md:mb-10
    text-center md:text-left
  ">
            ABOUT US
          </h2>
          <div>
            {/* On md+ screens always show full text, on mobile show toggle */}
            <p className="
            text-base md:text-xl
            leading-relaxed
            text-[--foreground]
            text-justify md:text-left
            mt-4 md:mt-0
            md:mr-20
            ">
              <span className="block md:hidden">
                {open ? aboutText : mobilePreview}
              </span>
              <span className="hidden md:block">
                {aboutText}
              </span>
            </p>
            {/* Toggle button only on mobile */}
            <button
              className="
              md:hidden
              mt-4
              px-5 py-2
              rounded-full
              bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] 
              font-bold
              shadow-lg
              hover:from-red-500 hover:to-yellow-300 hover:scale-105 hover:text-white
              active:scale-95
              transition-all duration-200
              text-base tracking-wide
              outline-none
              mx-auto block
            "
              onClick={() => setOpen(!open)}
            >
              {open ? "Daha Az Göster" : "Daha Fazla"}
            </button>
          </div>
        </motion.div>

        {/* Right Side: Chef Image */}
        <motion.div {...getSectionAnim({ direction: "right", delay: 0.1 })} className="relative md:relative md:right-0 w-full max-w-[400px] md:w-[500px] mx-auto md:mx-0">
          <Image
            src="/1-landing/3-about/about_resim.png"
            alt="Chef"
            width={400}
            height={350}
            className="w-full md:w-100 md:relative md:right-0 md:bottom-15"
          />
        </motion.div>
      </div>
    </section>

  );
}


function FeaturedItems() {
  return (
    <section id='featured' className="relative w-full px-0 md:px-6 py-16 md:py-20 overflow-hidden">
      {/* Decorative Left Squiggle (unchanged) */}
      <img
        src="/1-landing/4-featured/featured_arkaplan.png"
        alt="Left squiggle"
        className="hidden md:block absolute w-360 mx-5 top-175"
      />

      <div className="md:max-w-8xl md:mx-15 md:relative md:z-10">

        {/* Items Layout */}
        <div className="max-w-8xl md:px-0 relative z-10">
          <motion.h2
            {...getSectionAnim({ direction: "", delay: 0.1 })}
            className="text-6xl md:text-8xl tracking-wide font-[Anton] text-center mb-8 md:mb-16"
          >
            FEATURED ITEMS
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {/* CLASSIC BURGER */}
            <motion.div
              {...getSectionAnim({ direction: "up", delay: 0.1 })}
              className="md:grid md:grid-cols-3 md:w-[%80] md:mx-10 items-center gap-6 text-center md:text-left shadow-md p-4 md:p-2 md:px-5 rounded-2xl"
            >
              <Image
                src="/1-landing/4-featured/classic_burger.png"
                alt="Classic Burger"
                width={300}
                height={250}
                className='mx-3'
              />
              <div className="col-span-2 px-0 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2">
                  <h3 className="text-4xl md:text-6xl font-[Anton]">CLASSIC BURGER</h3>
                  <span className="text-2xl md:text-4xl font-semibold flex items-center">
                    <span className="text-3xl md:text-6xl mr-2 md:mr-5">$</span>
                    8.99
                  </span>
                </div>
                <p className="text-base sm:text-xl mt-2 md:mt-5">
                  Our signature beef burger with cheese, lettuce, and tomato
                </p>
              </div>
            </motion.div>

            {/* CRISPY GARLIC TRUFFLE */}
            <motion.div
              {...getSectionAnim({ direction: "up", delay: 0.2 })}
              className="grid grid-cols-1 md:grid-cols-3 md:w-[%80] md:mx-10 items-center gap-6 text-center md:text-left shadow-md p-4 md:p-2 md:px-5 rounded-2xl"
            >
              <Image
                src="/1-landing/4-featured/Extra-Cripy-Garlic-Truffle-Fries-1.png"
                alt="Crispy Garlic Truffle"
                width={300}
                height={250}
                className='mx-3'
              />
              <div className="col-span-2 px-0 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2">
                  <h3 className="text-4xl md:text-6xl font-[Anton]">Crispy Garlic Truffle</h3>
                  <span className="text-2xl md:text-4xl font-semibold flex items-center">
                    <span className="text-3xl md:text-6xl mr-2 md:mr-5">$</span>
                    8.99
                  </span>
                </div>
                <p className="text-base sm:text-xl mt-2 md:mt-5">
                  Topped with bacon, cheddar and tangy BBQ sauce
                </p>
              </div>
            </motion.div>

            {/* CRISPY CHICKEN WINGS */}
            <motion.div
              {...getSectionAnim({ direction: "up", delay: 0.3 })}
              className="grid grid-cols-1 md:grid-cols-3 md:w-[%80] md:mx-10 items-center gap-6 text-center md:text-left shadow-md p-4 md:p-2 md:px-5 rounded-2xl"
            >
              <img
                src="/1-landing/4-featured/close-up-fried-chicken-drumsticks.png"
                alt="Crispy Chicken Wings"
                width={300}
                height={250}
                className='mx-3'
              />
              <div className="col-span-2 px-0 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2">
                  <h3 className="text-4xl md:text-6xl font-[Anton]">CRISPY CHICKEN </h3>
                  <span className="text-2xl md:text-4xl font-semibold flex items-center">
                    <span className="text-3xl md:text-6xl mr-2 md:mr-5">$</span>
                    8.99
                  </span>
                </div>
                <p className="text-base sm:text-xl mt-2 md:mt-5">
                  With a crunchy fried chicken breast and fresh toppings
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>

  );
}


function Gallery() {
  return (
    <section id='gallery' className="relative w-full px-4 md:px-12 py-0 md:py-20 overflow-hidden">
      {/* Background squiggle */}
      <img
        src="/1-landing/5-gallery/galeri_arkaplan.png"
        alt="Gallery Background Decor"
        className="absolute  w-450 right-30 top-30"
      />

      <div className="max-w-8xl  md:mx-30 relative z-10 px-2 md:px-0">
        {/* Title */}
        <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-6xl md:text-8xl tracking-wide font-[Anton] mb-4 md:mb-2 text-center md:text-left">
          GALLERY
        </motion.h2>
        <p className="text-3xl md:text-3xl text-orange-500 ml-0 md:ml-3 font-medium mb-8 md:mb-10 uppercase tracking-wide text-center md:text-left">
          Instagram Wall
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Left Column: Burger + Salad stacked vertically */}
          <div className="flex flex-col gap-4 col-span-1 sm:col-span-2">
            <motion.img
              src="/1-landing/5-gallery/5-gallery_1.png"
              alt="Burger on Plate"
              {...getSectionAnim({ direction: "down", delay: 0.2 })}
              className="rounded-xl object-cover w-full max-w-[400px] h-auto mx-auto"
            />
            <motion.img
              src="/1-landing/5-gallery/5-gallery_3_redo.png"
              alt="Salad"
              {...getSectionAnim({ direction: "right", delay: 0.2 })}
              className="rounded-xl object-cover w-full max-w-[400px] h-auto mx-auto"
            />
          </div>

          {/* Right Column: Wings + Burger in Hands */}
          <div className="flex flex-col gap-4 col-span-1 sm:col-span-2">
            <motion.img
              src="/1-landing/5-gallery/5-gallery_2.png"
              alt="Wings"
              {...getSectionAnim({ direction: "left", delay: 0.2 })}
              className="rounded-xl object-cover w-full max-w-[400px] h-auto mx-auto md:relative md:bottom-15 md:left-15"
            />
            <motion.img
              src="/1-landing/5-gallery/5-gallery_4_redo.png"
              alt="Burger in Hands"
              {...getSectionAnim({ direction: "up", delay: 0.2 })}
              className="rounded-xl object-cover w-full max-w-[400px] h-auto mx-auto md:relative md:bottom-20 md:right-20"
            />
          </div>
        </div>
      </div>
    </section>

  );
}

function LocationAndHours() {
  return (
    <section id='location' className="relative w-full px-4 md:px-12 py-16 md:py-20 text-[--foreground]">
      <div className="max-w-8xl md:mx-40 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

        {/* Left Side - Text */}
        <div className="space-y-7 max-w-md mt-10 text-center md:text-left px-2 md:px-0">
          <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-6xl md:text-8xl tracking-wide font-[Anton]">LOCATION <br /> & HOURS</motion.h2>

          <motion.p {...getSectionAnim({ direction: "up", delay: 0.1 })} className="text-2xl md:text-3xl font-[var(--font-body)]">
            1234 Burger St. <br />
            Cityname, ST 12345
          </motion.p>

          <motion.p {...getSectionAnim({ direction: "up", delay: 0.1 })} className="text-xl md:text-2xl font-[var(--font-body)]">
            Monday — Saturday <br />
            <strong>11:00 AM – 9:00 PM</strong>
          </motion.p>

          <motion.button {...getSectionAnim({ direction: "up", delay: 0.1 })} className="mt-4 bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] font-semibold text-xl cursor-pointer px-6 py-3 rounded-md transition">
            GET DIRECTIONS
          </motion.button>
        </div>

        {/* Right Side - Map Image */}
        <div className="w-full max-w-[700px] bottom-50">
          <Image
            src="/1-landing/6-location/lokasyon_arkaplan.png"
            alt="Location map"
            width={490}
            height={320}
            className="h-auto mb-10 md:mb-20 md:ml-50 md:bottom-20"
          />
        </div>
      </div>
    </section>
  );
}

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id='contact' className="relative w-full md:px-12 py-0 md:py-20 overflow-hidden">
      {/* Background Elements — UNTOUCHED */}
      <img
        src="/1-landing/7-contact/iletişim_arkaplan.png"
        alt="Squiggle left"
        className="hidden md:block absolute h-200 w-350 left-10 top-5"
      />


      <div className="max-w-8xl md:mx-30 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start relative z-10">
        {/* Left Text */}
        <div className="space-y-9 text-center md:text-left px-2 md:px-0">
          <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-6xl md:text-8xl font-[Anton]">CONTACT US</motion.h2>
          <motion.p {...getSectionAnim({ direction: "left", delay: 0.1 })} className="text-2xl md:text-3xl font-medium leading-relaxed">
            Need to get in touch? <br /> We’d love to hear from you.
          </motion.p>

          <motion.div {...getSectionAnim({ direction: "left", delay: 0.1 })} className="flex flex-col font-bold md:font-bold md:flex-row items-center md:items-start justify-center md:justify-start gap-2 md:gap-4 text-xl md:text-2xl">
            <FaPhoneAlt />
            <span>(123) 456-7890</span>
          </motion.div>

          <motion.div {...getSectionAnim({ direction: "left", delay: 0.1 })} className="flex flex-col font-bold md:font-bold md:flex-row items-center md:items-start justify-center md:justify-start gap-2 md:gap-4 text-xl md:text-2xl">
            <FaEnvelope />
            <span>hello@slamburger.com</span>
          </motion.div>

          <motion.div {...getSectionAnim({ direction: "up", delay: 0.1 })} className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="#"
              className="w-16 h-16 md:w-20 md:h-20 bg-[#F26430] rounded-full text-white flex items-center justify-center text-3xl md:text-4xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-16 h-16 md:w-20 md:h-20 bg-[#F26430] rounded-full text-white flex items-center justify-center text-3xl md:text-4xl"
            >
              <FaFacebook />
            </a>
          </motion.div>
        </div>

        {/* Right Form */}
        <motion.form {...getSectionAnim({ direction: "up", delay: 0.1 })} className="w-full md:w-100 md:ml-25 md:h-[500px] md:relative  md:space-y-5 bg-[var(--layout-bg)] rounded-xl border/50 shadow-md p-4 md:p-6 space-y-6 ">
          <div>
            <label className="block mb-1 font-medium text-xl text-left">Name</label>
            <input
              type="text"
              className="w-full h-10 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--accent]"
              value={form.name}
              placeholder='Your Name and Surname'
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-xl text-left">Email</label>
            <input
              type="email"
              className="w-full h-10 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--accent]"
              value={form.email}
              placeholder='sample@gmail.com'
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 text-xl font-medium text-left">Message</label>
            <textarea
              rows={4}
              className="w-full h-40 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--accent]"
              placeholder='Type your message here...'
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] font-semibold py-3 rounded tracking-wide text-xl"
          >
            SEND MESSAGE
          </button>
        </motion.form>
      </div>
    </section>

  );
}
