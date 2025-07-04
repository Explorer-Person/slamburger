"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Image from 'next/image';
import { getSectionAnim } from "../animation-util";
import { motion } from "framer-motion";


export default function Contact() {
    return (
        <main className="font-sans w-full overflow-hidden">
            <CallToAction />
            <ContactOptions />
            <MessageForm />
            <ContactMap />
        </main>
    );
}


function CallToAction() {
    return (
        <section
            className="
            relative
            w-full
            md:mt-65 md:mb-0 md:pt-25
            w-[100%] md:w-[%50] mx-auto px-4  
        "
        >
            {/* Right: Image - absolutely positioned */}
            <motion.div
                {...getSectionAnim({ direction: "", delay: 0.2 })}
                className="
                w-full
                absolute
                max-w-[80%] md:max-w-[500px]
                top-35
                mx-auto
                md:absolute md:right-75 lg:-translate-y-1/2
                translate-x-[5%] sm:translate-x-[12%] md:translate-x-0
                sm:top-15 md:top-45
                "
            >
                <Image
                    src="/5-contact/1-cta.png"
                    alt="Burger with Phone"
                    width={800}
                    height={800}
                    className="h-auto mx-5"
                    priority
                />
            </motion.div>

            {/* Left: Text content */}
            <motion.div
                {...getSectionAnim({ direction: "", delay: 0.1 })}
                className="
                        text-center
                        md:ml-55 md:text-left max-xl
                mt-[140px] md:relative md:bottom-90"
            >
                <h2 className="text-7xl md:text-8xl mb-0 tracking-wide font-[Anton]">
                    GET IN <br /> TOUCH
                </h2>
                <p className="text-lg mt-95 mb-10 md:w-125 md:text-2xl md:mt-10">
                    We’d love to hear from you—whether it’s feedback, franchise inquiries, or just to say hi.
                </p>
                <button className="bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition">
                    CONTACT US
                </button>
            </motion.div>
        </section>


    );
}

function ContactOptions() {
    return (
        <section className="relative w-full px-4 md:px-6 top-20 md:mb-45 text-center">
            <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-7xl md:text-8xl font-[Anton] mb-6 sm:mb-10">
                CONTACT US
            </motion.h2>



            <motion.p {...getSectionAnim({ direction: "", delay: 0.2 })} className="text-lg md:mt-15 md:text-3xl mb-10 md:mb-25">
                Get in touch with us for any questions or concerns.
            </motion.p>
            {/* Background Image (only shown on md+ for layout safety) */}
            <img
                src="/5-contact/2-contact 1 bg.png"
                alt="contact_bg"
                className="hidden md:block absolute md:h-full left-20 w-[250px] md:w-300 md:h-400 md:top-12 md:ml-35"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 md:mx-25 md:relative md:top-10">
                {/* CALL US */}
                <motion.div
                    {...getSectionAnim({ direction: "up", delay: 0.1 })}
                    className="
                    bg-white/30 p-5 md:p-6 rounded-lg shadow text-center 
                    flex flex-col items-center 
                    min-h-[210px] md:min-h-[250px]
                    "
                >
                    <Image
                        src="/5-contact/icon 1.png"
                        alt="Phone icon"
                        width={56}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <div className="flex-1 w-full flex flex-col items-center md:absolute md:bottom-10">
                        {/* Use min-h to pin headings, mb to space title and text */}
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 mt-3 min-h-[36px] flex items-center justify-center w-full">
                            CALL US
                        </h3>
                        <p className="text-base md:text-xl md:font-bold min-h-[36px] flex items-center justify-center w-full">
                            (123) 456-7890
                        </p>
                    </div>
                </motion.div>

                {/* EMAIL US */}
                <motion.div
                    {...getSectionAnim({ direction: "up", delay: 0.2 })}
                    className="
                    bg-white/30 p-5 md:p-6 rounded-lg shadow text-center 
                    flex flex-col items-center 
                    min-h-[210px] md:min-h-[250px]
                    "
                >
                    <Image
                        src="/5-contact/icon 2.png"
                        alt="Email icon"
                        width={56}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <div className="flex-1 w-full flex flex-col items-center md:absolute md:bottom-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 mt-3 min-h-[36px] flex items-center justify-center w-full">
                            EMAIL US
                        </h3>
                        <p className="text-base md:text-xl md:font-bold min-h-[36px] flex items-center justify-center w-full">
                            info@example.com
                        </p>
                    </div>
                </motion.div>

                {/* VISIT US */}
                <motion.div
                    {...getSectionAnim({ direction: "up", delay: 0.3 })}
                    className="
                        bg-white/30 p-5 md:p-6 rounded-lg shadow text-center 
                        flex flex-col items-center 
                        min-h-[210px] md:min-h-[225px]
                        "
                >
                    <Image
                        src="/5-contact/icon 3.png"
                        alt="Location icon"
                        width={56}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <div className="flex-1 w-full flex flex-col items-center md:absolute md:bottom-5 md:mt-0">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 mt-3 min-h-[36px] flex items-center justify-center w-full">
                            VISIT US
                        </h3>
                        <p className="text-base md:text-xl md:font-bold min-h-[36px] flex items-center justify-center w-full">
                            1234 Burger St., Suite 567 <br />
                            Springfield, IL 62701
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>

    );
}


function MessageForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert("Message sent!");
    };

    return (
        <section className="relative w-full text-center px-4 sm:px-6 top-35 flex flex-col md:flex-row items-start gap-12">
            {/* Background squiggle decoration - only on md+ */}
            <img
                src="/5-contact/3-message.png"
                alt="message_bg"
                className="hidden md:block absolute right-10 top-0 w-full h-auto z-0 pointer-events-none"
            />

            {/* Left text section */}
            <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="flex-1 w-full z-10 text-center md:mt-15 md:text-left md:relative md:bottom-0 md:ml-35">
                <h2
                    className="text-6xl md:ml-9 md:text-8xl md:text-start text-center font-[Anton] mb-4 tracking-wide"
                    style={{ lineHeight: '1.4' }}
                >
                    SEND US <br /> A MESSAGE
                </h2>
                <p className="text-xl md:ml-10 md:text-3xl mt-6">
                    Use the form to get in touch.
                </p>
            </motion.div>

            {/* Contact form */}
            <motion.form
                {...getSectionAnim({ direction: "left", delay: 0.2 })}
                onSubmit={handleSubmit}
                className="flex-1 w-full sm:w-75 space-y-6 sm:space-y-8 sm:mr-45 sm:mt-15 z-10"
            >
                <div className="text-left">
                    <label className="block mb-1 text-base text-xl font-bold" htmlFor="name">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Enter your name and surname'
                        className="w-full p-3 border border-gray-300 rounded-xl"
                    />
                </div>

                <div className="text-left">
                    <label className="block mb-1 text-base text-xl font-bold" htmlFor="email">
                        Mail
                    </label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder='sample@gmail.com'
                        className="w-full p-3 border border-gray-300 rounded-xl"
                    />
                </div>

                <div className="text-left">
                    <label className="block mb-1 text-base text-xl font-bold" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder='Write your message here...'
                        className="w-full p-3 border border-gray-300 rounded-xl h-32"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-xl bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] py-3 px-6 rounded hover:bg-red-600 transition"
                >
                    SEND MESSAGE
                </button>
            </motion.form>
        </section>

    );
}


function ContactMap() {
    return (
        <section className="relative w-full top-50 pb-16 px-4 sm:px-0  grid grid-cols-1 items-start gap-12 overflow-hidden">
            {/* Background image - hidden on mobile */}
            <img
                src="/5-contact/4-contact_2.png"
                className="hidden md:block absolute w-350 h-full top-20 left-25"
                alt="contact_bg_png"
            />

            {/* Header */}
            <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-center mt-6 sm:mt-12 z-10">
                <h2 className="text-7xl md:text-8xl font-[Anton] mb-5">CONTACT US</h2>
                <p className="text-2xl md:text-3xl">Feel free to get in touch with us.</p>
            </motion.div>

            {/* Contact Info + Map */}
            <div className="flex flex-col md:flex-row items-start gap-10 mt-0 z-10">
                {/* Left Column: Info */}
                <div className="w-full md:w-200 space-y-15 md:ml-35 md:relative">
                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.2 })} className="block text-center md:w[200px] md:flex md:items-start md:gap-4">
                        <Image src="/5-contact/icon 1.png" className='ml-35 md:ml-0' alt="Phone" width={60} height={40} />
                        <div className="text-xl sm:text-2xl sm:absolute sm:right-0 sm:w-full">
                            <strong className="text-2xl sm:text-3xl">PHONE</strong><br />
                            (123) 456-7890
                        </div>
                    </motion.div>

                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.3 })} className="block text-center md:w[200px] md:flex md:items-start md:gap-4">
                        <Image src="/5-contact/icon 2.png" className='ml-35 md:ml-0' alt="Email" width={60} height={40} />
                        <div className="text-xl sm:text-2xl sm:absolute sm:right-0 sm:w-full">
                            <strong className="text-2xl sm:text-3xl">EMAIL</strong><br />
                            info@example.com
                        </div>
                    </motion.div>

                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.4 })} className="block text-center md:w[200px] md:flex md:items-start md:gap-4">
                        <Image src="/5-contact/icon 3.png" className='ml-35 md:ml-0' alt="Location" width={60} height={40} />
                        <div className="text-xl sm:text-2xl sm:absolute sm:right-0 sm:w-full">
                            <strong className="text-2xl sm:text-3xl">VISIT</strong><br />
                            1234 Burger Lane<br />
                            City, State 12345
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Map */}
                <motion.div {...getSectionAnim({ direction: "", delay: 0.5 })} className="w-full md:w-full h-64 h-100 md:h-[350px] mr-35 rounded overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=1234+Burger+Lane&output=embed"
                        className="w-full h-full rounded shadow"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </motion.div>
            </div>
        </section>

    );
}
