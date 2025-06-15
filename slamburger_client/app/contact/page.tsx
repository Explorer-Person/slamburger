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
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-12">
            <div className="text-center md:text-left max-w-xl">
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-[Anton] mb-6">GET IN TOUCH</h2>
                <p className="text-lg mb-6">
                    We’d love to hear from you—whether it’s feedback, franchise inquiries, or just to say hi.
                </p>
                <button className="bg-[#F44336] text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition">
                    CONTACT US
                </button>
            </div>

            <div className="relative w-[1200px]">
                <Image src="/5-contact/1-cta.png" alt="Burger with Phone" width={1200} height={1200} className="w-full" />
            </div>
        </section>
    );
}

function ContactOptions() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-[Anton] mb-4 mb-25">CONTACT US</h2>
            <img src="/5-contact/2-contact 1 bg.png" alt="contact_bg" className='absolute top-100 left-20' />
            <p className="text-2xl mb-12">Get in touch with us for any questions or concerns.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Call */}
                <div className="bg-white/30 p-6 rounded-lg shadow text-center">
                    <Image src="/5-contact/icon 1.png" alt="Phone icon" width={36} height={36} className="mx-auto mb-2" />
                    <h3 className="text-3xl font-bold mb-1">CALL US</h3>
                    <p className='text-lg'>(123) 456-7890</p>
                </div>

                {/* Email */}
                <div className="bg-white/30 p-6 rounded-lg shadow text-center">
                    <Image src="/5-contact/icon 2.png" alt="Email icon" width={36} height={36} className="mx-auto mb-2" />
                    <h3 className="text-3xl font-bold mb-1">EMAIL US</h3>
                    <p className='text-lg'>info@example.com</p>
                </div>

                {/* Visit */}
                <div className="bg-white/30 p-6 rounded-lg shadow text-center">
                    <Image src="/5-contact/icon 3.png" alt="Location icon" width={36} height={36} className="mx-auto mb-2" />
                    <h3 className="text-3xl font-bold mb-1">VISIT US</h3>
                    <p className='text-lg'>1234 Burger St., Suite 567<br />Springfield, IL 62701</p>
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
        <section className="relative max-w-6xl mx-auto px-6 py-25 pt-35 flex flex-col md:flex-row items-start gap-12">
            {/* Background squiggle decoration */}
            <img
                src="/5-contact/3-message.png"
                alt="message_bg"
                className="absolute right-35 top-0 w-full h-auto z-0"
            />

            {/* Left text section */}
            <div className="flex-1 z-10">
                <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-[Anton] mb-4 tracking-widest"
                    style={{ letterSpacing: '0.1em', lineHeight: '1.4' }}
                >
                    SEND US <br /> A MESSAGE
                </h2>
                <p className="text-2xl">
                    Use the form to get in touch.
                </p>
            </div>

            {/* Contact form */}
            <form
                onSubmit={handleSubmit}
                className="flex-1 space-y-10 w-full max-w-lg z-10"
            >
                <label className='text-lg font-bold' htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                />
                <label className='text-lg font-bold' htmlFor="email">Mail</label>
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                />
                <label className='text-lg font-bold' htmlFor="message">Message</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded h-32"
                />
                <button
                    type="submit"
                    className="bg-[#F44336] text-white py-3 px-6 rounded hover:bg-red-600 transition"
                >
                    SEND MESSAGE
                </button>
            </form>
        </section>
    );
}


function ContactMap() {
    return (
        <section className="max-w-6xl mt-20 mx-auto px-6 py-16 grid grid-cols-1 items-start gap-12">
            <img src="/5-contact/4-contact_2.png" className='absolute left-0' alt="contact_bg_png" />
            <div className='text-center mb-12 my-25'>
                <h2 className="lg:text-7xl  font-[Anton] mb-5">CONTACT US</h2>
                <p className="text-3xl">Feel free to get in touch with us.</p>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-12 my-5 mb-55">
                {/* Left Column: Contact Info */}
                <div className="w-full md:w-1/3 space-y-8">
                    <div className="space-y-20">
                        <div className="flex items-start gap-4">
                            <Image src="/5-contact/icon 1.png" alt="Phone" width={40} height={40} />
                            <div className="text-2xl">
                                <strong className="text-3xl">PHONE</strong><br />
                                (123) 456-7890
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Image src="/5-contact/icon 2.png" alt="Email" width={40} height={40} />
                            <div className="text-2xl">
                                <strong className="text-3xl">EMAIL</strong><br />
                                info@example.com
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Image src="/5-contact/icon 3.png" alt="Location" width={40} height={40} />
                            <div className="text-2xl">
                                <strong className="text-3xl">VISIT</strong><br />
                                1234 Burger Lane<br />
                                City, State 12345
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Map */}
                <div className="w-full md:w-3/3 h-64 md:h-150 rounded overflow-hidden">
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
