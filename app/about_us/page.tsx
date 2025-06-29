'use client'
import Image from 'next/image';
import { getSectionAnim } from "../animation-util";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <main className="flex flex-col items-center w-full bg-[--background] text-[--foreground] font-[var(--font-body)]">
            <AboutSlamburger />
            <OurStory />
            <WhatWeStandFor />
            <OurValues />
            <OurTeam />
            <VisitUs />
        </main>
    );
}


function AboutSlamburger() {
    return (
        <section id="about-slamburger" className="w-full mt-35 max-w-[1600px] mx-auto md:px-8 py-20">
            <div className="relative bg-[#FFF7EA] overflow-hidden py-16 md:py-24 md:px-16">
                {/* Background image - preserved */}
                <img
                    src="/4-about/1-about/arkaplan.png"
                    alt="Decorative background"
                    className="absolute top-0 left-0 w-[700px] md:w-[1600px] pointer-events-none"
                />

                <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="relative z-10 max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 text-center md:text-left">
                    {/* Left: Text content */}
                    <div className="max-w-2xl mb-75 md:ml-15">
                        <h2 className="text-7xl sm:text-7xl lg:text-9xl font-[Anton] text-black tracking-wide leading-tight mb-8">
                            About <span className="block">Slamburger</span>
                        </h2>
                        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-8">
                            Bold flavors. Real ingredients. Made to slam.
                        </p>
                        <button className="bg-[#F44336] hover:bg-red-600 text-white font-semibold text-2xl px-10 py-5 rounded-xl transition">
                            READ OUR STORY
                        </button>
                    </div>

                    {/* Right: Chef Image */}
                    <div className="w-full max-w-[600px] lg:max-w-[800px]">
                        <Image
                            src="/4-about/1-about/1-about_1.png"
                            alt="Chef holding burger"
                            width={900}
                            height={900}
                            className="h-auto"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>

    );
}

function OurStory() {
    return (
        <section id="our-story" className="w-full max-w-[1600px] mx-auto px-2 md:px-8 py-20">
            <div className="relative bg-[#FFF7EA] overflow-hidden py-20 px-2 md:px-16">
                {/* Background image - preserved */}
                <Image
                    src="/4-about/2-story/hikaye_arkaplan.png"
                    alt="Decorative background"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    fill
                    priority
                />

                <div className="relative z-10 max-w-[1500px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 text-center md:text-left">
                    {/* Text content */}
                    <motion.div {...getSectionAnim({ direction: "left", delay: 0.1 })} className="max-w-2xl">
                        <h2 className="text-7xl sm:text-7xl lg:text-9xl tracking-widest font-[Anton] text-black leading-tight mb-8">
                            Our <span className="block">Story</span>
                        </h2>
                        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-8">
                            SLAMBURGER was founded with a simple vision: to put a unique spin on the classic burger.
                            We elevate familiar flavors with a creative touch, always made fresh and crafted with care.
                        </p>
                    </motion.div>

                    {/* Illustration */}
                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.1 })} className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[700px]">
                        <Image
                            src="/4-about/2-story/2-story_1.png"
                            alt="Kitchen scene with chef"
                            width={700}
                            height={700}
                            className="w-full h-auto"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>


    );
}


function WhatWeStandFor() {
    return (
        <section
            id="what-we-stand-for"
            className="w-screen min-h-[700px] px-0 py-24 relative left-1/2 right-1/2 -mx-[50vw] max-w-none"
            style={{ transform: 'translateX(-50%)' }}
        >
            <div className="relative bg-[#FFF7EA] overflow-hidden py-24 px-2 sm:px-8">
                {/* Background shapes (untouched) */}
                <img
                    src="/4-about/3-features/3-features_bg_shapes.png"
                    alt="Background shapes"
                    className="absolute left-0 top-20 w-full object-cover"
                />

                <div className="relative z-10 max-w-[1600px] mx-auto text-center">
                    <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-7xl sm:text-7xl lg:text-8xl font-[Anton] mb-16 text-black">
                        WHAT WE STAND FOR
                    </motion.h2>

                    {/* Grid of icons and texts */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 text-center items-stretch">
                        {/* Block 1 */}
                        <motion.div {...getSectionAnim({ direction: "up", delay: 0.2 })} className="flex flex-col items-center text-center space-y-6 shadow-md p-10 rounded-[3rem] bg-white/20">
                            <Image
                                src="/4-about/3-features/3-features_icon_1.png"
                                alt="Quality icon"
                                width={120}
                                height={120}
                                className="mx-auto w-[68px] sm:w-[88px] lg:w-[120px]"
                            />
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Quality</h3>
                            <p className="text-gray-800 text-base sm:text-xl lg:text-2xl font-medium">
                                We are committed to providing top-notch food and service.
                            </p>
                        </motion.div>
                        {/* Block 2 */}
                        <motion.div {...getSectionAnim({ direction: "up", delay: 0.3 })} className="flex flex-col items-center text-center space-y-6 shadow-md p-10 rounded-[3rem] bg-white/20">
                            <Image
                                src="/4-about/3-features/3-features_icon_2.png"
                                alt="Freshness icon"
                                width={120}
                                height={120}
                                className="mx-auto w-[68px] sm:w-[88px] lg:w-[120px]"
                            />
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Freshness</h3>
                            <p className="text-gray-800 text-base sm:text-xl lg:text-2xl font-medium">
                                We use only the freshest, locally sourced ingredients.
                            </p>
                        </motion.div>
                        {/* Block 3 */}
                        <motion.div {...getSectionAnim({ direction: "up", delay: 0.4 })} className="flex flex-col items-center text-center space-y-6 shadow-md p-10 rounded-[3rem] bg-white/20">
                            <Image
                                src="/4-about/3-features/3-features_icon_3.png"
                                alt="Community icon"
                                width={120}
                                height={120}
                                className="mx-auto w-[68px] sm:w-[88px] lg:w-[120px]"
                            />
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Community</h3>
                            <p className="text-gray-800 text-base sm:text-xl lg:text-2xl font-medium">
                                We strive to make a positive impact in our neighborhood.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

    );
}

function OurValues() {
    return (
        <section id="our-values" className="w-full max-w-[1600px] mx-auto px-2 md:px-8 py-20">
            <div className="relative bg-[#FFF7EA] overflow-hidden py-24 px-2 md:px-16">
                <div className="relative z-10 max-w-[1500px] mx-auto text-center">
                    <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-7xl sm:text-7xl lg:text-8xl font-[Anton] mb-16 text-black">
                        OUR VALUES
                    </motion.h2>

                    <div className="w-full mb-5">
                        {/* Value Block 1 */}
                        <motion.div {...getSectionAnim({ direction: "up", delay: 0.2 })} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                            <div className="flex flex-col items-center text-center px-4 py-8 bg-white bg-opacity-80 rounded-[2rem] shadow-xl border border-orange-100 transition hover:shadow-2xl hover:-translate-y-1">
                                <Image
                                    src="/4-about/4-values/4-values_1.png"
                                    alt="Quality icon"
                                    width={120}
                                    height={120}
                                    className="mb-6"
                                />
                                <h3 className="text-3xl sm:text-4xl font-bold mb-2">QUALITY</h3>
                                <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl">
                                    We use only the freshest ingredients in every dish.
                                </p>
                            </div>

                            {/* Value Block 2 */}
                            <motion.div {...getSectionAnim({ direction: "up", delay: 0.3 })} className="flex flex-col items-center text-center px-4 py-8 bg-white bg-opacity-80 rounded-[2rem] shadow-xl border border-orange-100 transition hover:shadow-2xl hover:-translate-y-1">
                                <Image
                                    src="/4-about/4-values/4-values_4.png"
                                    alt="Service icon"
                                    width={120}
                                    height={120}
                                    className="mb-6"
                                />
                                <h3 className="text-3xl sm:text-4xl font-bold mb-2">SERVICE</h3>
                                <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl">
                                    We go the extra mile to serve our customers.
                                </p>
                            </motion.div>

                            {/* Value Block 3 */}
                            <motion.div {...getSectionAnim({ direction: "up", delay: 0.4 })} className="flex flex-col items-center text-center px-4 py-8 bg-white bg-opacity-80 rounded-[2rem] shadow-xl border border-orange-100 transition hover:shadow-2xl hover:-translate-y-1">
                                <Image
                                    src="/4-about/4-values/4-values_2.png"
                                    alt="Service icon"
                                    width={120}
                                    height={120}
                                    className="mb-6"
                                />
                                <h3 className="text-3xl sm:text-4xl font-bold mb-2">SERVICE</h3>
                                <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl">
                                    We go the extra mile to serve our customers.
                                </p>
                            </motion.div>
                        </motion.div>


                        <div className="w-full mt-10 grid md:grid-cols-2 gap-10">
                            {/* PASSION Card */}
                            <motion.div {...getSectionAnim({ direction: "up", delay: 0.5 })} className="flex flex-col items-center text-center px-4 py-8 bg-white bg-opacity-80 rounded-[2rem] shadow-xl border border-orange-100 transition hover:shadow-2xl hover:-translate-y-1">
                                <Image
                                    src="/4-about/4-values/4-values_5.png"
                                    alt="Passion icon"
                                    width={120}
                                    height={120}
                                    className="mb-6"
                                />
                                <h3 className="text-3xl sm:text-4xl font-bold mb-2">PASSION</h3>
                                <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl">
                                    We love what we do, and it shows in our food.
                                </p>
                            </motion.div>

                            {/* COMMUNITY Card */}
                            <motion.div {...getSectionAnim({ direction: "up", delay: 0.6 })} className="flex flex-col items-center gap-6 px-4 py-8 bg-white bg-opacity-90 rounded-[2rem] shadow-xl border border-orange-100 transition hover:shadow-2xl hover:-translate-y-1">
                                <Image
                                    src="/4-about/4-values/4-values_3.png"
                                    alt="Community icon"
                                    width={120}
                                    height={120}
                                />
                                <div className="text-center">
                                    <h3 className="text-3xl sm:text-4xl font-bold mb-2">COMMUNITY</h3>
                                    <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl">
                                        We care about our community and give back.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

function OurTeam() {
    return (
        <section
            id="our-team"
            className="w-screen min-h-[600px] px-0 py-20 relative left-1/2 right-1/2 -mx-[50vw] max-w-none"
            style={{ transform: "translateX(-50%)" }}
        >
            <div className="relative bg-[#FFF7EA] overflow-hidden py-16 px-2 md:px-8 lg:px-12">
                {/* Decorative background */}
                <img
                    src="/4-about/5-team/5-team_bg_shapes.png"
                    alt="Background decoration"
                    className="absolute left-25 object-cover pointer-events-none"
                />

                {/* EXPANDED CONTAINER */}
                <div className="relative z-10 max-w-[1800px] mx-auto text-center">
                    <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-7xl sm:text-5xl lg:text-9xl tracking-wide font-[Anton] mb-20 text-black">
                        MEET THE TEAM
                    </motion.h2>

                    <div className="flex flex-col gap-24 max-w-5xl mx-auto">
                        {/* Row 1 */}
                        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center sm:items-end">
                            {/* Melis */}
                            <motion.div {...getSectionAnim({ direction: "", delay: 0.2 })} className="flex flex-col items-center flex-1 text-center">
                                <Image
                                    src="/4-about/5-team/5-team_1.png"
                                    alt="Melis"
                                    width={300}
                                    height={300}
                                    className="mx-auto mb-4"
                                />
                                <h3 className="text-2xl sm:text-5xl font-extrabold text-[#F44336] mb-1">
                                    MELIS
                                </h3>
                                <p className="text-gray-800 text-base sm:text-2xl">
                                    Head of Burger R&amp;D
                                </p>
                            </motion.div>
                            {/* Kyle */}
                            <motion.div {...getSectionAnim({ direction: "", delay: 0.3 })} className="flex flex-col items-center flex-1 text-center">
                                <Image
                                    src="/4-about/5-team/5-team_2.png"
                                    alt="Kyle"
                                    width={300}
                                    height={300}
                                    className="mx-auto mb-4"
                                />
                                <h3 className="text-2xl sm:text-5xl font-extrabold text-[#F44336] mb-1">
                                    KYLE
                                </h3>
                                <p className="text-gray-800 text-base sm:text-2xl">
                                    General Manager
                                </p>
                            </motion.div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center sm:items-end">
                            {/* Omar */}
                            <motion.div {...getSectionAnim({ direction: "", delay: 0.4 })} className="flex flex-col items-center flex-1 text-center">
                                <Image
                                    src="/4-about/5-team/5-team_3.png"
                                    alt="Omar"
                                    width={300}
                                    height={240}
                                    className="mx-auto mb-4"
                                />
                                <h3 className="text-2xl sm:text-5xl font-extrabold text-[#F44336] mb-1">
                                    OMAR
                                </h3>
                                <p className="text-gray-800 text-base sm:text-2xl">
                                    Customer Experience Lead
                                </p>
                            </motion.div>
                            {/* Ava */}
                            <motion.div {...getSectionAnim({ direction: "", delay: 0.5 })} className="flex flex-col items-center flex-1 text-center">
                                <Image
                                    src="/4-about/5-team/5-team_4.png"
                                    alt="Ava"
                                    width={300}
                                    height={240}
                                    className="mx-auto mb-4"
                                />
                                <h3 className="text-2xl sm:text-5xl font-extrabold text-[#F44336] mb-1">
                                    AVA
                                </h3>
                                <p className="text-gray-800 text-base sm:text-2xl">
                                    Marketing Specialist
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

function VisitUs() {
    return (
        <section id='visit-us' className="w-full h-full max-w-8xl mx-auto px-6 py-6">
            <div className="relative bg-[#FFF7EA] overflow-hidden py-16 px-6 sm:px-12 w-full min-h-[700px]">
                {/* Decorative background */}
                <img
                    src="/4-about/6-visit/bg_shapes.png"
                    alt="Decorative background"
                    className="absolute h-175 w-275 top-0 left-75 pointer-events-none"

                />

                <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    {/* Left: Text */}
                    <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-center md:text-left max-w-xl">
                        <h2 className="text-7xl md:text-9xl tracking-wide font-[Anton] text-black mb-6">
                            VISIT US
                        </h2>
                        <p className="text-2xl text-gray-800 mb-8">
                            Experience our delicious handcrafted burgers and welcoming atmosphere in person.
                        </p>
                        <button className="bg-[#F44336] hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg text-xl transition">
                            FIND A SLAMBURGER
                        </button>
                    </motion.div>

                    {/* Right: Burger image */}
                    <motion.div {...getSectionAnim({ direction: "left", delay: 0.2 })} className="w-full max-w-sm">
                        <Image
                            src="/4-about/6-visit/burger.png"
                            alt="SlamBurger"
                            width={500}
                            height={500}
                            className="w-full h-auto"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


