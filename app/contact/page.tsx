'use client'
import { useState } from 'react';
import Image from 'next/image';
import { getSectionAnim } from "../animation-util";
import { motion } from "framer-motion";


export default function Contact() {
    return (
        <main className="bg-[#FFF7EA] text-black font-sans w-full overflow-hidden">
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
            md:mt-65 md:mb-75
            flex flex-col-reverse md:flex-row items-center
            w-[100%] mx-auto px-4 sm:px-6
            py-25 sm:py-52 md:py-25
        "
        >
            {/* Right: Image - absolutely positioned */}
            <motion.div
                {...getSectionAnim({ direction: "", delay: 0.2 })}
                className="
                w-full
                absolute
                max-w-[80%] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]
                top-80
                mx-auto
                lg:absolute lg:right-25 lg:55 lg:-translate-y-1/2
                translate-x-[5%] sm:translate-x-[12%] md:translate-x-0
                sm:top-15 md:top-120
                "
            >
                <Image
                    src="/5-contact/1-cta.png"
                    alt="Burger with Phone"
                    width={1200}
                    height={1200}
                    className="w-full h-auto"
                    priority
                />
            </motion.div>

            {/* Left: Text content */}
            <motion.div
                {...getSectionAnim({ direction: "", delay: 0.1 })}
                className="
                        md:ml-35 md:text-left max-xl z-10
                mt-[150px] sm:mt-[280px] md:mt-0"
            >
                <h2 className="text-7xl sm:text-7xl md:text-7xl lg:text-9xl mb-10 ml-15 tracking-wide font-[Anton] mb-6">
                    GET IN <br /> TOUCH
                </h2>
                <p className="text-lg mt-85 w-75 md:w-150 sm:text-lg md:text-2xl mb-10">
                    We’d love to hear from you—whether it’s feedback, franchise inquiries, or just to say hi.
                </p>
                <button className="bg-[#F44336] text-xl text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition">
                    CONTACT US
                </button>
            </motion.div>
        </section>


    );
}

function ContactOptions() {
    return (
        <section className="relative max-w-8xl mx-auto px-4 sm:px-6 py-16 top-35 mb-45 text-center">
            <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-7xl md:text-7xl lg:text-9xl font-[Anton] mb-6 sm:mb-10">
                CONTACT US
            </motion.h2>

            {/* Background Image (only shown on md+ for layout safety) */}
            <img
                src="/5-contact/2-contact 1 bg.png"
                alt="contact_bg"
                className="sm:hidden md:block absolute md:h-full left-20 w-[200px] md:w-300 md:bottom-10 md:ml-65"
            />

            <motion.p {...getSectionAnim({ direction: "", delay: 0.2 })} className="text-lg mt-45 sm:text-3xl mb-10 sm:mb-12">
                Get in touch with us for any questions or concerns.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-20 sm:mx-25">
                {/* CALL US */}
                <motion.div {...getSectionAnim({ direction: "up", delay: 0.1 })} className="bg-white/30 p-5 sm:p-6 rounded-lg shadow text-center">
                    <Image
                        src="/5-contact/icon 1.png"
                        alt="Phone icon"
                        width={56}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <h3 className="text-2xl sm:text-4xl font-bold mb-1">CALL US</h3>
                    <p className="text-base sm:text-xl">(123) 456-7890</p>
                </motion.div>

                {/* EMAIL US */}
                <motion.div {...getSectionAnim({ direction: "up", delay: 0.2 })} className="bg-white/30 p-5 sm:p-6 rounded-lg shadow text-center">
                    <Image
                        src="/5-contact/icon 2.png"
                        alt="Email icon"
                        width={56}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <h3 className="text-2xl sm:text-4xl font-bold mb-1">EMAIL US</h3>
                    <p className="text-base sm:text-xl">info@example.com</p>
                </motion.div>

                {/* VISIT US */}
                <motion.div {...getSectionAnim({ direction: "up", delay: 0.3 })} className="bg-white/30 p-5 sm:p-6 rounded-lg shadow text-center">
                    <Image
                        src="/5-contact/icon 3.png"
                        alt="Location icon"
                        width={56}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1">VISIT US</h3>
                    <p className="text-base sm:text-xl">
                        1234 Burger St., Suite 567 <br />
                        Springfield, IL 62701
                    </p>
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
        <section className="relative max-w-8xl mx-auto px-4 sm:px-6 py-25 pt-28 flex flex-col md:flex-row items-start gap-12">
            {/* Background squiggle decoration - only on md+ */}
            <img
                src="/5-contact/3-message.png"
                alt="message_bg"
                className="hidden md:block absolute right-10 top-0 w-full h-auto z-0 pointer-events-none"
            />

            {/* Left text section */}
            <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="flex-1 z-10 text-center md:text-left md:ml-45">
                <h2
                    className="text-6xl ml-12 sm:text-4xl md:text-5xl lg:text-9xl font-[Anton] mb-4 tracking-widest"
                    style={{ letterSpacing: '0.1em', lineHeight: '1.4' }}
                >
                    SEND US <br /> A MESSAGE
                </h2>
                <p className="text-xl ml-10 sm:text-xl md:text-5xl">
                    Use the form to get in touch.
                </p>
            </motion.div>

            {/* Contact form */}
            <motion.form
                {...getSectionAnim({ direction: "left", delay: 0.2 })}
                onSubmit={handleSubmit}
                className="flex-1 w-full max-w-lg space-y-6 sm:space-y-8 sm:mr-45 z-10"
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
                        className="w-full p-3 border border-gray-300 rounded"
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
                        className="w-full p-3 border border-gray-300 rounded"
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
                        className="w-full p-3 border border-gray-300 rounded h-32"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-xl bg-[#F44336] text-white py-3 px-6 rounded hover:bg-red-600 transition"
                >
                    SEND MESSAGE
                </button>
            </motion.form>
        </section>

    );
}


function ContactMap() {
    return (
        <section className="relative max-w-8xl mt-20 mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 items-start gap-12 overflow-hidden">
            {/* Background image - hidden on mobile */}
            <img
                src="/5-contact/4-contact_2.png"
                className="hidden md:block absolute w-350 h-full top-20 left-25"
                alt="contact_bg_png"
            />

            {/* Header */}
            <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-center mt-6 sm:mt-12 z-10">
                <h2 className="text-7xl sm:text-6xl lg:text-9xl font-[Anton] mb-5">CONTACT US</h2>
                <p className="text-2xl sm:text-2xl lg:text-5xl">Feel free to get in touch with us.</p>
            </motion.div>

            {/* Contact Info + Map */}
            <div className="flex flex-col md:flex-row items-start gap-10 mt-10 z-10">
                {/* Left Column: Info */}
                <div className="w-full md:w-1/2 space-y-10 md:ml-55">
                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.2 })} className="block text-center md:flex md:items-start md:gap-4">
                        <Image src="/5-contact/icon 1.png" className='ml-42 md:ml-0' alt="Phone" width={60} height={40} />
                        <div className="text-xl sm:text-3xl">
                            <strong className="text-2xl sm:text-4xl">PHONE</strong><br />
                            (123) 456-7890
                        </div>
                    </motion.div>

                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.3 })} className="block text-center md:flex md:items-start md:gap-4">
                        <Image src="/5-contact/icon 2.png" className='ml-42 md:ml-0' alt="Email" width={60} height={40} />
                        <div className="text-xl sm:text-3xl">
                            <strong className="text-2xl sm:text-4xl">EMAIL</strong><br />
                            info@example.com
                        </div>
                    </motion.div>

                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.4 })} className="block text-center md:flex md:items-start md:gap-4">
                        <Image src="/5-contact/icon 3.png" className='ml-42 md:ml-0' alt="Location" width={60} height={40} />
                        <div className="text-xl sm:text-3xl">
                            <strong className="text-2xl sm:text-4xl">VISIT</strong><br />
                            1234 Burger Lane<br />
                            City, State 12345
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Map */}
                <motion.div {...getSectionAnim({ direction: "", delay: 0.5 })} className="w-full md:w-[2050px] h-64 sm:h-80 md:h-[550px] mr-55 rounded overflow-hidden">
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
