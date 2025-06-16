'use client'
import { useState } from 'react';
import Image from 'next/image';

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
            md:mt-75 md:mb-75
            flex flex-col-reverse md:flex-row items-center
            w-[95%] mx-auto px-4 sm:px-6
            py-25 sm:py-52 md:py-16
            gap-6
        "
        >
            {/* Right: Image - absolutely positioned */}
            <div
                className="
                w-full
                absolute
                mr-50
                max-w-[80%] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px]
                mx-auto
                lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2
                translate-x-[10%] sm:translate-x-[12%] md:translate-x-0
                top-8 sm:top-15 md:top-auto
                "
            >
                <Image
                    src="/5-contact/1-cta.png"
                    alt="Burger with Phone"
                    width={1800}
                    height={1800}
                    className="w-full h-auto"
                    priority
                />
            </div>

            {/* Left: Text content */}
            <div
                className="
                text-center md:ml-75 md:text-left max-w-xl z-10
                mt-[150px] sm:mt-[280px] md:mt-0
                "
            >
                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[Anton] mb-6">
                    GET IN TOUCH
                </h2>
                <p className="text-base sm:text-lg mb-6">
                    We’d love to hear from you—whether it’s feedback, franchise inquiries, or just to say hi.
                </p>
                <button className="bg-[#F44336] text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition">
                    CONTACT US
                </button>
            </div>
        </section>


    );
}

function ContactOptions() {
    return (
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-[Anton] mb-6 sm:mb-10">
                CONTACT US
            </h2>

            {/* Background Image (only shown on md+ for layout safety) */}
            <img
                src="/5-contact/2-contact 1 bg.png"
                alt="contact_bg"
                className="hidden md:block absolute top-24 left-20 w-[200px] md:w-[300px] pointer-events-none"
            />

            <p className="text-lg sm:text-2xl mb-10 sm:mb-12">
                Get in touch with us for any questions or concerns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {/* CALL US */}
                <div className="bg-white/30 p-5 sm:p-6 rounded-lg shadow text-center">
                    <Image
                        src="/5-contact/icon 1.png"
                        alt="Phone icon"
                        width={36}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1">CALL US</h3>
                    <p className="text-base sm:text-lg">(123) 456-7890</p>
                </div>

                {/* EMAIL US */}
                <div className="bg-white/30 p-5 sm:p-6 rounded-lg shadow text-center">
                    <Image
                        src="/5-contact/icon 2.png"
                        alt="Email icon"
                        width={36}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1">EMAIL US</h3>
                    <p className="text-base sm:text-lg">info@example.com</p>
                </div>

                {/* VISIT US */}
                <div className="bg-white/30 p-5 sm:p-6 rounded-lg shadow text-center">
                    <Image
                        src="/5-contact/icon 3.png"
                        alt="Location icon"
                        width={36}
                        height={36}
                        className="mx-auto mb-3"
                    />
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1">VISIT US</h3>
                    <p className="text-base sm:text-lg">
                        1234 Burger St., Suite 567 <br />
                        Springfield, IL 62701
                    </p>
                </div>
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
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-25 pt-28 flex flex-col md:flex-row items-start gap-12">
            {/* Background squiggle decoration - only on md+ */}
            <img
                src="/5-contact/3-message.png"
                alt="message_bg"
                className="hidden md:block absolute right-10 top-0 w-full h-auto z-0 pointer-events-none"
            />

            {/* Left text section */}
            <div className="flex-1 z-10 text-center md:text-left">
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Anton] mb-4 tracking-widest"
                    style={{ letterSpacing: '0.1em', lineHeight: '1.4' }}
                >
                    SEND US <br /> A MESSAGE
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl">
                    Use the form to get in touch.
                </p>
            </div>

            {/* Contact form */}
            <form
                onSubmit={handleSubmit}
                className="flex-1 w-full max-w-lg space-y-6 sm:space-y-8 z-10"
            >
                <div className="text-left">
                    <label className="block mb-1 text-base font-bold" htmlFor="name">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                </div>

                <div className="text-left">
                    <label className="block mb-1 text-base font-bold" htmlFor="email">
                        Mail
                    </label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                </div>

                <div className="text-left">
                    <label className="block mb-1 text-base font-bold" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded h-32"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#F44336] text-white py-3 px-6 rounded hover:bg-red-600 transition"
                >
                    SEND MESSAGE
                </button>
            </form>
        </section>

    );
}


function ContactMap() {
    return (
        <section className="relative max-w-6xl mt-20 mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 items-start gap-12 overflow-hidden">
            {/* Background image - hidden on mobile */}
            <img
                src="/5-contact/4-contact_2.png"
                className="hidden md:block absolute left-0 top-0 w-[300px] h-auto pointer-events-none z-0"
                alt="contact_bg_png"
            />

            {/* Header */}
            <div className="text-center mt-6 sm:mt-12 z-10">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-[Anton] mb-5">CONTACT US</h2>
                <p className="text-xl sm:text-2xl lg:text-3xl">Feel free to get in touch with us.</p>
            </div>

            {/* Contact Info + Map */}
            <div className="flex flex-col md:flex-row items-start gap-10 mt-10 z-10">
                {/* Left Column: Info */}
                <div className="w-full md:w-1/2 space-y-10">
                    <div className="flex items-start gap-4">
                        <Image src="/5-contact/icon 1.png" alt="Phone" width={40} height={40} />
                        <div className="text-xl sm:text-2xl">
                            <strong className="text-2xl sm:text-3xl">PHONE</strong><br />
                            (123) 456-7890
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Image src="/5-contact/icon 2.png" alt="Email" width={40} height={40} />
                        <div className="text-xl sm:text-2xl">
                            <strong className="text-2xl sm:text-3xl">EMAIL</strong><br />
                            info@example.com
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Image src="/5-contact/icon 3.png" alt="Location" width={40} height={40} />
                        <div className="text-xl sm:text-2xl">
                            <strong className="text-2xl sm:text-3xl">VISIT</strong><br />
                            1234 Burger Lane<br />
                            City, State 12345
                        </div>
                    </div>
                </div>

                {/* Right Column: Map */}
                <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[450px] rounded overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=1234+Burger+Lane&output=embed"
                        className="w-full h-full rounded shadow"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>

    );
}
