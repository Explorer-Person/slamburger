'use client'
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-[--background] text-[--foreground] font-[var(--font-body)]">
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
    <section className="w-full bg-[#FFF4E8] text-[--foreground] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        {/* Left Text */}
        <div className="space-y-6 relative bottom-20 z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[Anton] leading-tight">
            SLAM INTO <br /> FLAVOR!
          </h1>
          <p className="text-xl md:text-3xl font-medium text-[--foreground]">
            Handcrafted Burgers <br /> & Crispy Wings
          </p>
          <a
            href="/menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold text-sm tracking-wide transition"
          >
            SEE OUR MENU
          </a>
        </div>

        {/* Right Burger Image */}
        <div className="relative z-10">
          <Image
            src="/1-landing/1-hero/hero_resim.jpg"
            alt="Burger Hero"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Background squiggle */}
        <img
          src="/1-landing/1-hero/hero_arkaplan.png"
          alt="Background Decorative Squiggle"
          className="absolute bottom-0 left-0 w-[140px] md:w-[180px] translate-x-[-20%]"
        />

      </div>
    </section>
  );
}

function SignatureDishes() {
  return (
    <section className="relative w-full bg-[#FFF4E8] text-[--foreground] px-6 md:px-12 py-20 overflow-hidden">
      {/* Background squiggle image */}
      <img
        src="/1-landing/2-signature/signature_arkaplan.png"
        alt="Signature Section Background"
        className="absolute mx-30"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-[Anton] text-center mb-50 relative">
          SLAM SIGNATURE DISHES
        </h2>


        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dish 1 */}
          <div className="bg-white/20 rounded-xl text-center p-6 shadow-sm">
            <Image
              src="/1-landing/2-signature/signature_resim_1.png"
              alt="Double Slam Burger"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold mt-6 mb-2">Double Slam Burger</h3>
            <p className="text-sm text-gray-700">
              Two smashed patties, melted cheese, lettuce, tomato, on a toasted bun
            </p>
          </div>

          {/* Dish 2 */}
          <div className="bg-white/20 rounded-xl text-center p-6 shadow-sm">
            <Image
              src="/1-landing/2-signature/signature_resim_2.png"
              alt="Spicy Cluck"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold mt-6 mb-2">Spicy Cluck</h3>
            <p className="text-sm text-gray-700">
              Crispy fried chicken, spicy mayo, pickles, served on a brioche bun
            </p>
          </div>

          {/* Dish 3 */}
          <div className="bg-white/20 rounded-xl text-center p-6 shadow-sm">
            <Image
              src="/1-landing/2-signature/signature_resim_3.png"
              alt="Double Smash"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold mt-6 mb-2">Double Smash</h3>
            <p className="text-sm text-gray-700">
              Two beef patties pressed seared, topped with melted cheese
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="relative w-full bg-[#FFF4E8] px-6 md:px-12 py-20 overflow-hidden text-[--foreground]">
      {/* Background squiggle */}
      <Image
        src="/1-landing/3-about/about_arkaplan.png"
        alt="Background Decoration"
        width={140}
        height={140}
        className="absolute bottom-0 left-0 w-[100px] md:w-[140px] opacity-70 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10 relative">
        {/* Left Side: Text */}
        <div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-[Anton] mb-6 mb-20">ABOUT US</h2>
          <p className="text-lg mr-20 leading-relaxed font-semibold text-[--foreground]">
            At <strong>SlamBurger</strong>, we don’t just make burgers — we craft bold, flavor-packed experiences that hit hard and leave a lasting impression. <br />
            Every patty is made from premium cuts, smashed and seared to lock in juices, while our buns are toasted golden for the perfect crunch. <br />
            From sharp cheddar to crispy smoked bacon, fresh lettuce to tangy sauces — every ingredient is chosen with care to elevate your taste buds. <br />
            Whether you’re biting into a juicy double smash burger, sinking your teeth into a spicy fried chicken sandwich, or enjoying a side of loaded wings, we bring passion and quality to every plate. <br />
            SlamBurger isn’t just a meal — it’s a celebration of flavor, fire, and fun.
          </p>


        </div>

        {/* Right Side: Chef Image */}
        <div className="relative">
          <Image
            src="/1-landing/3-about/about_resim.png"
            alt="Chef"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}


function FeaturedItems() {
  return (
    <section className="relative w-full bg-[#FFF4E8] px-6 md:px-12 py-20 overflow-hidden text-[--foreground]">
      {/* Decorative Left Squiggle */}
      <img
        src="/1-landing/4-featured/featured_arkaplan.png"
        alt="Left squiggle"
        className="absolute mx-20 mt-50"
      />


      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-[Anton] text-center mb-16">
          FEATURED ITEMS
        </h2>

        {/* Items Layout */}
        <div className="grid grid-cols-1 gap-12">
          {/* CLASSIC BURGER */}
          <div className="grid grid-cols-3 items-center gap-6">
            <Image
              src="/1-landing/4-featured/4-featured_1.png"
              alt="Classic Burger"
              width={250}
              height={250}
              className="mx-auto"
            />
            <div className="col-span-2">
              <div className="flex justify-between items-start">
                <h3 className="text-5xl font-[Anton]">CLASSIC BURGER</h3>
                <span className="text-3xl font-semibold">$8.99</span>
              </div>
              <p className="text-md mt-5 mt-1">
                Our signature beef burger with cheese, lettuce, and tomato
              </p>
            </div>
          </div>

          {/* BBQ BACON BURGER */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
            {/* Left Chicken Burger */}
            <Image
              src="/1-landing/4-featured/4-featured_4.png"
              alt="Crispy Chicken Sandwich"
              width={250}
              height={250}
              className="mx-auto"
            />

            <div className="col-span-2">
              <div className="flex justify-between items-start">
                <h3 className="text-5xl font-[Anton]">BBQ BACON BURGER</h3>
                <span className="text-3xl font-semibold">$8.99</span>
              </div>
              <p className="text-md mt-5 mt-1">
                Topped with bacon, cheddar and tangy BBQ sauce
              </p>
            </div>


          </div>
          
          {/* CRISPY CHICKEN */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mt-5 text-center md:text-left">
            {/* Left Wings Image */}
            <Image
              src="/1-landing/4-featured/4-featured_3.png"
              alt="Wings Left"
              width={250}
              height={250}
              className="mx-auto"
            />

            <div className="col-span-2">
              <div className="flex justify-between items-start">
                <h3 className="text-5xl font-[Anton]">CRISPY CHICKEN WINGS</h3>
                <span className="text-3xl font-semibold">$8.99</span>
              </div>
              <p className="text-md mt-5 mt-1">
                With a crunchy fried chicken breast and fresh toppings
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function Gallery() {
  return (
    <section className="relative w-full bg-[#FFF4E8] px-6 md:px-12 py-20 overflow-hidden text-[--foreground]">
      {/* Background squiggle */}
      <img
        src="/1-landing/5-gallery/galeri_arkaplan.png"
        alt="Gallery Background Decor"
        className="absolute left-25"
      />

      <div className="max-w-7xl mx-auto relative left-25 z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-[Anton] mb-2">GALLERY</h2>
        <p className="text-3xl text-orange-500 ml-3 font-medium mb-10 uppercase tracking-wide">
          Instagram Wall
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Left Column: Burger + Salad stacked vertically */}
          <div className="flex flex-col gap-4 col-span-2">
            <Image
              src="/1-landing/5-gallery/5-gallery_1.png"
              alt="Burger on Plate"
              width={300}
              height={300}
              className="rounded-xl object-cover w-[100%] max-w-[500px] h-auto"
            />
            <Image
              src="/1-landing/5-gallery/5-gallery_3_redo.png"
              alt="Salad"
              width={300}
              height={300}
              className="rounded-xl object-cover w-[100%] max-w-[500px] h-auto"
            />
          </div>

          {/* Right Column: Wings (top), Burger in Hands (bottom) */}
          <div className="flex flex-col gap-4 col-span-2 ">
            <Image
              src="/1-landing/5-gallery/5-gallery_2.png"
              alt="Wings"
              width={300}
              height={300}
              className="rounded-xl object-cover w-[100%] max-w-[500px] h-auto relative bottom-15 left-15"
            />
            <Image
              src="/1-landing/5-gallery/5-gallery_4_redo.png"
              alt="Burger in Hands"
              width={300}
              height={300}
              className="rounded-xl object-cover w-[100%] max-w-[500px] h-auto relative bottom-20 right-20"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function LocationAndHours() {
  return (
    <section className="relative w-full bg-[#FFF4E8] px-6 md:px-12 py-20 text-[--foreground]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Text */}
        <div className="space-y-4 max-w-md">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-[Anton] w-200">LOCATION & HOURS</h2>
          <p className="text-3xl font-[var(--font-body)]">
            1234 Burger St. <br />
            Cityname, ST 12345
          </p>
          <p className="text-2xl font-[var(--font-body)]">
            Monday — Saturday <br />
            <strong>11:00 AM – 9:00 PM</strong>
          </p>

          <button className="mt-4 bg-[--accent] hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-md transition">
            GET DIRECTIONS
          </button>
        </div>

        {/* Right Side - Map Image */}
        <div className="w-100 max-w-[400px] md:max-w-[400px]">
          <Image
            src="/1-landing/6-location/lokasyon_arkaplan.png"
            alt="Location map"
            width={320}
            height={320}
            className="w-full h-auto mb-20"
          />
        </div>
      </div>
    </section>
  );
}

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section className="relative w-full bg-[#FFF4E8] px-6 md:px-12 py-20 overflow-hidden text-[--foreground]">
      {/* Background Elements */}
      <img
        src="/1-landing/7-contact/iletişim_arkaplan.png"
        alt="Squiggle left"
        className="absolute h-250 left-25 bottom-0"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Text */}
        <div className="space-y-5">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-[Anton]">CONTACT US</h1>
          <p className="text-4xl font-medium leading-relaxed">
            Need to get in touch? <br /> We’d love to hear from you.
          </p>
          <div className="flex items-center gap-4 text-2xl">
            <FaPhoneAlt />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <FaEnvelope />
            <span>hello@slamburger.com</span>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="w-20 h-20 bg-[#F26430] rounded-full text-white flex items-center justify-center text-4xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-20 h-20 bg-[#F26430] rounded-full text-white flex items-center justify-center text-4xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form className="w-full bg-white/5 rounded-xl border/50 shadow-sm p-6 space-y-4 max-w-md ml-auto">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--accent]"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--accent]"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--accent]"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[--accent] hover:bg-orange-600 text-white font-semibold py-3 rounded tracking-wide text-sm"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}
