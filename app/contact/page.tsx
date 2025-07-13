"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Image from 'next/image';
import { getSectionAnim } from "../animation-util";
import { motion } from "framer-motion";


export default function Contact() {
    return (
        <main className="flex flex-col items-center md:w-[100%] pt-25 md:pt-35 md:relative space-y-20 md:space-y-35 font-[var(--font-body)] md:overflow-hidden">
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
            w-[100%] 
        "
        >
            <div className='flex flex-col md:flex-row items-center text-center md:text-start justify-center w-[90%] mx-[5%] md:w-[80%] md:mx-[10%]'>

                {/* Left: Text content */}
                <motion.div
                    {...getSectionAnim({ direction: "", delay: 0.1 })}
                >
                    <h2 className="text-6xl md:text-8xl mb-0 tracking-wide font-[Anton]">
                        GET IN <br /> TOUCH
                    </h2>
                    <p className="text-lg mb-10 md:text-2xl md:mt-10">
                        We’d love to hear from you—whether it’s feedback, franchise inquiries, or just to say hi.
                    </p>
                    <button className="bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition">
                        CONTACT US
                    </button>
                </motion.div>
                {/* Right: Image - absolutely positioned */}
                <motion.div
                    {...getSectionAnim({ direction: "", delay: 0.2 })}
                >
                    <Image
                        src="/5-contact/1-cta.png"
                        alt="Burger with Phone"
                        width={800}
                        height={800}
                        priority
                    />
                </motion.div>
            </div>

        </section>


    );
}

function ContactOptions() {
    return (
        <section className="relative
            w-[100%] ">
            {/* Background Image (only shown on md+ for layout safety) */}
            <div className='hidden md:block md:h-full md:w-full md:absolute md:bottom-35'>
                <img
                    src="/5-contact/2-contact 1 bg.png"
                    alt="contact_bg"
                    className="w-[250px] md:w-300 md:ml-35"
                />
            </div>

            <div className='text-center mb-15'>
                <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-6xl md:text-8xl font-[Anton]">
                    CONTACT US
                </motion.h2>

                <motion.p {...getSectionAnim({ direction: "", delay: 0.2 })} className="text-lg  md:mt-15 md:text-3xl">
                    Get in touch with us for any questions or concerns.
                </motion.p>
            </div>



            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-[90%] mx-[5%] md:w-[80%] md:mx-[10%]">
                {/* CALL US */}
                <motion.div
                    {...getSectionAnim({ direction: "up", delay: 0.1 })}
                    className="
                    bg-white/30 p-5 rounded-lg shadow text-center 
                    w-[100%]
                    h-[250px]
                    "
                >
                    <Image
                        src="/5-contact/icon 1.png"
                        alt="Phone icon"
                        width={46}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <div className="">
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
                    bg-white/30 p-5 rounded-lg shadow text-center 
                    w-[100%]
                    h-[250px]
                    "
                >
                    <Image
                        src="/5-contact/icon 2.png"
                        alt="Email icon"
                        width={46}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <div className="">
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
                        bg-white/30 p-5 rounded-lg shadow text-center 
                    w-[100%]
                    h-[250px]
                        "
                >
                    <Image
                        src="/5-contact/icon 3.png"
                        alt="Location icon"
                        width={46}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <div className="">
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
        <section className="relative
            w-[100%] ">
            {/* Background squiggle decoration - only on md+ */}
            <div className='hidden md:block absolute h-full w-350 bottom-35 right-25'>
                <img
                    src="/5-contact/3-message.png"
                    alt="message_bg"
                    className=" w-full pointer-events-none"
                />
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-start w-[90%] mx-[5%] md:w-[80%] md:mx-[10%]'>
                {/* Left text section */}
                <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="w-[100%] relative bottom-10 md:bottom-25">
                    <h2
                        className="text-6xl md:text-8xl font-[Anton] mb-4 tracking-wide"
                        style={{ lineHeight: '1.4' }}
                    >
                        SEND US <br /> A MESSAGE
                    </h2>
                    <p className="text-xl md:text-3xl mt-6">
                        Use the form to get in touch.
                    </p>
                </motion.div>

                {/* Contact form */}
                <motion.form
                    {...getSectionAnim({ direction: "left", delay: 0.2 })}
                    onSubmit={handleSubmit}
                    className="w-[90%] mx-[5%] md:w-[100%] space-y-10"
                >
                    <div className="text-center md:text-left">
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

                    <div className="text-center md:text-left">
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

                    <div className="text-center md:text-left">
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
            </div>


        </section>

    );
}


function ContactMap() {
    return (
        <section className="relative
            w-[100%] ">
            {/* Background image - hidden on mobile */}
            <div className='hidden md:block md:absolute md:w-full md:top-5 md:left-65'>
                <img
                    src="/5-contact/4-contact_2.png"
                    className='w-300'
                    alt="contact_bg_png"
                />
            </div>


            {/* Header */}
            <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-center w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] my-12 sm:mt-12 z-10">
                <h2 className="text-6xl md:text-8xl font-[Anton] mb-5">CONTACT US</h2>
                <p className="text-2xl md:text-3xl">Feel free to get in touch with us.</p>
            </motion.div>

            {/* Contact Info + Map */}
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-center w-[90%] mx-[5%] md:w-[80%] md:mx-[10%]">
                {/* Left Column: Info */}
                <div className="w-[100%] space-y-15 md:relative">
                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.2 })} className="block w-[100%] text-center md:text-start md:flex md:items-start md:gap-4">
                        <Image src="/5-contact/icon 1.png" className=' md:mx-0 mx-[42.5%] w-[15%] md:w-[10%] md:ml-0' alt="Phone" width={60} height={40} />
                        <div className="text-xl md:text-2xl md:relative md:right">
                            <strong className="text-2xl sm:text-3xl">PHONE</strong><br />
                            (123) 456-7890
                        </div>
                    </motion.div>

                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.3 })} className="block w-[100%] text-center md:text-start md:flex md:items-start md:gap-4">
                        <Image src="/5-contact/icon 2.png" className=' md:mx-0 mx-[42.5%] w-[15%] md:w-[10%] md:ml-0' alt="Email" width={60} height={40} />
                        <div className="text-xl sm:text-2xl ">
                            <strong className="text-2xl sm:text-3xl">EMAIL</strong><br />
                            info@example.com
                        </div>
                    </motion.div>

                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.4 })} className="block w-[100%] text-center md:text-start md:flex md:items-start md:gap-4">
                        <Image src="/5-contact/icon 3.png" className=' md:mx-0 mx-[42.5%] w-[15%] md:w-[10%] md:ml-0' alt="Location" width={60} height={40} />
                        <div className="text-xl sm:text-2xl">
                            <strong className="text-2xl sm:text-3xl">VISIT</strong><br />
                            1234 Burger Lane<br />
                            City, State 12345
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Map */}
                <motion.div {...getSectionAnim({ direction: "", delay: 0.5 })} className="w-[100%] h-100 rounded">
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
