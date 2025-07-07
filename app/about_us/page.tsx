/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image';
import { getSectionAnim } from "../animation-util";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <main className="flex flex-col space-y-12 md:space-y-35 items-center w-full font-[var(--font-body)]">
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
        <section id="about-slamburger" className="w-full pt-25 mx-auto md:px-8">
            <div className="relative overflow-hidden md:pt-30 md:px-16">
                {/* Background image - preserved */}
                <img
                    src="/4-about/1-about/arkaplan.png"
                    alt="Decorative background"
                    className="hidden md:block md:absolute md:left-25 md:bottom-0 md:w-[700px] md:w-[1200px] pointer-events-none"
                />

                <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="relative z-10 max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row md:w-[%50] md:mx-25 items-center justify-between gap-16 text-center md:text-left">
                    {/* Left: Text content */}
                    <div className="max-w-2xl mb-15 md:mb-50 md:ml-15">
                        <h2 className="text-6xl md:text-8xl lg:tracking-wide font-[Anton] text-black tracking-wide leading-tight mb-8">
                            ABOUT <span className="block">SLAMBURGER</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-800 mb-8">
                            Bold flavors. Real ingredients. Made to slam.
                        </p>
                        <button className="bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] font-semibold text-xl px-10 py-5 rounded-xl transition">
                            READ OUR STORY
                        </button>
                    </div>

                    {/* Right: Chef Image */}
                    <div className="w-full md:block md:max-w-[500px] md:relative md:bottom-15">
                        <Image
                            src="/4-about/1-about/1-about_1.png"
                            alt="Chef holding burger"
                            width={400}
                            height={500}
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
        <section id="our-story" className="w-full px-2 md:px-8">
            <div className="relative overflow-hidden md:py-20 px-2 md:px-16">
                {/* Background image - preserved */}
                <img
                    src="/4-about/2-story/hikaye_arkaplan.png"
                    alt="Decorative background"
                    className="hidden md:block md:absolute md:inset-0 md:pointer-events-none"

                />

                <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row md:w-[%70] md:ml-25 items-center justify-between gap-16 text-center md:text-left md:mt-20">
                    {/* Text content */}
                    <motion.div {...getSectionAnim({ direction: "left", delay: 0.1 })} className="w-90 md:w-125">
                        <h2 className="text-6xl md:text-8xl tracking-wide font-[Anton] text-black leading-tight mb-8">
                            OUR <span className="block">STORY</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-800 mb-8">
                            SLAMBURGER was founded with a simple vision: to put a unique spin on the classic burger.
                            We elevate familiar flavors with a creative touch, always made fresh and crafted with care.
                        </p>
                    </motion.div>

                    {/* Illustration */}
                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.1 })} className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
                        <Image
                            src="/4-about/2-story/2-story_1.png"
                            alt="Kitchen scene with chef"
                            width={500}
                            height={550}
                            className=" h-auto"
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
            className="relative w-full px-0 md:pt-5 left-1/2 right-1/2  "
            style={{ transform: 'translateX(-50%)' }}
        >
            <div className="relative overflow-hidden px-2 pb-5 sm:pb-45 sm:px-8">
                {/* Background shapes (untouched) */}
                <img
                    src="/4-about/3-features/3-features_bg_shapes.png"
                    alt="Background shapes"
                    className="hidden md:block md:absolute md:bottom-0 md:w-250"
                />

                <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                    <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-6xl md:text-8xl font-[Anton] mb-16 text-black">
                        WHAT WE STAND FOR
                    </motion.h2>

                    {/* Grid of icons and texts */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 text-center items-stretch">
                        {/* Block 1 */}
                        <motion.div {...getSectionAnim({ direction: "up", delay: 0.2 })} className="relative flex flex-col items-center text-center h-[225px] md:h-[280px] space-y-6 shadow-md p-10 rounded-[3rem] bg-white/20">
                            <Image
                                src="/4-about/3-features/3-features_icon_1.png"
                                alt="Quality icon"
                                width={90}
                                height={90}
                                className="mx-auto w-[68px] md:w-[78px]"
                            />
                            <div className="absolute bottom-0 left-0 w-full px-6 pb-6">
                                <h3 className="text-2xl md:text-4xl md:mb-5 font-bold">Quality</h3>
                                <p className="text-gray-800 text-base md:text-xl font-medium">
                                    We are committed to providing top-notch food and service.
                                </p>
                            </div>

                        </motion.div>
                        {/* Block 2 */}
                        <motion.div {...getSectionAnim({ direction: "up", delay: 0.3 })} className="relative flex flex-col items-center text-center h-[225px] md:h-[280px] space-y-6 shadow-md p-10 rounded-[3rem] bg-white/20">
                            <Image
                                src="/4-about/3-features/3-features_icon_2.png"
                                alt="Freshness icon"
                                width={120}
                                height={120}
                                className="mx-auto w-[68px] md:w-[78px]"
                            />
                            <div className="absolute bottom-0 left-0 w-full px-6 pb-6">
                                <h3 className="text-2xl sm:text-4xl lg:mb-5 font-bold">Freshness</h3>
                                <p className="text-gray-800 text-base md:text-xl font-medium">
                                    We use only the freshest, locally sourced ingredients.
                                </p>
                            </div>

                        </motion.div>
                        {/* Block 3 */}
                        <motion.div {...getSectionAnim({ direction: "up", delay: 0.4 })} className="relative flex flex-col items-center text-center h-[225px] md:h-[280px] space-y-6 shadow-md p-10 rounded-[3rem] bg-white/20">
                            <Image
                                src="/4-about/3-features/3-features_icon_3.png"
                                alt="Community icon"
                                width={120}
                                height={120}
                                className="mx-auto w-[68px] sm:w-[88px] lg:w-[120px]"
                            />
                            <div className="absolute bottom-0 left-0 w-full px-6 pb-6">
                                <h3 className="text-2xl md:text-4xl lg:mb-5 font-bold">Community</h3>
                                <p className="text-gray-800 text-base md:text-xl font-medium">
                                    We strive to make a positive impact in our neighborhood.
                                </p>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

    );
}

function OurValues() {
    return (
        <section id="our-values" className="w-full px-2 md:px-8 ">
            <div className="relative overflow-hidden px-2 md:px-12">
                <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                    <motion.h2
                        {...getSectionAnim({ direction: "", delay: 0.1 })}
                        className="text-6xl md:text-8xl font-[Anton] mb-10 text-black"
                    >
                        OUR VALUES
                    </motion.h2>

                    <div className="w-full mb-4">
                        {/* Value Block 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6">
                            <motion.div
                                {...getSectionAnim({ direction: "up", delay: 0.2 })}
                                className="flex flex-col bg-white/50 items-center text-center px-3 py-6 rounded-2xl shadow-lg border border-orange-100 transition hover:shadow-xl hover:-translate-y-1"
                            >
                                <Image
                                    src="/4-about/4-values/4-values_1.png"
                                    alt="Quality icon"
                                    width={90}
                                    height={90}
                                    className="mb-4"
                                />
                                <h3 className="text-2xl md:text-3xl font-bold mb-1">QUALITY</h3>
                                <p className="text-gray-800 text-base md:text-lg">
                                    We use only the freshest ingredients in every dish.
                                </p>
                            </motion.div>

                            {/* Value Block 2 */}
                            <motion.div
                                {...getSectionAnim({ direction: "up", delay: 0.3 })}
                                className="flex flex-col bg-white/50 items-center text-center px-3 py-6 rounded-2xl shadow-lg border border-orange-100 transition hover:shadow-xl hover:-translate-y-1"
                            >
                                <Image
                                    src="/4-about/4-values/4-values_4.png"
                                    alt="Service icon"
                                    width={90}
                                    height={90}
                                    className="mb-4"
                                />
                                <h3 className="text-2xl md:text-3xl font-bold mb-1">SERVICE</h3>
                                <p className="text-gray-800 text-base md:text-lg">
                                    We go the extra mile to serve our customers.
                                </p>
                            </motion.div>

                            {/* Value Block 3 */}
                            <motion.div
                                {...getSectionAnim({ direction: "up", delay: 0.4 })}
                                className="flex flex-col bg-white/50 items-center text-center px-3 py-6 rounded-2xl shadow-lg border border-orange-100 transition hover:shadow-xl hover:-translate-y-1"
                            >
                                <Image
                                    src="/4-about/4-values/4-values_2.png"
                                    alt="Velocity icon"
                                    width={90}
                                    height={90}
                                    className="mb-4"
                                />
                                <h3 className="text-2xl md:text-3xl font-bold mb-1">VELOCITY</h3>
                                <p className="text-gray-800 text-base md:text-lg">
                                    We go the extra mile to serve our customers.
                                </p>
                            </motion.div>
                        </div>

                        <div className="w-full mt-6 grid md:grid-cols-2 gap-6">
                            {/* PASSION Card */}
                            <motion.div
                                {...getSectionAnim({ direction: "up", delay: 0.5 })}
                                className="flex flex-col bg-white/50 items-center text-center px-3 py-6 rounded-2xl shadow-lg border border-orange-100 transition hover:shadow-xl hover:-translate-y-1"
                            >
                                <Image
                                    src="/4-about/4-values/4-values_5.png"
                                    alt="Passion icon"
                                    width={90}
                                    height={90}
                                    className="mb-4"
                                />
                                <h3 className="text-2xl md:text-3xl font-bold mb-1">PASSION</h3>
                                <p className="text-gray-800 text-base md:text-lg">
                                    We love what we do, and it shows in our food.
                                </p>
                            </motion.div>

                            {/* COMMUNITY Card */}
                            <motion.div
                                {...getSectionAnim({ direction: "up", delay: 0.6 })}
                                className="flex flex-col bg-white/50 items-center gap-4 px-3 py-6 rounded-2xl shadow-lg border border-orange-100 transition hover:shadow-xl hover:-translate-y-1"
                            >
                                <Image
                                    src="/4-about/4-values/4-values_3.png"
                                    alt="Community icon"
                                    width={90}
                                    height={90}
                                    className="mb-4"
                                />
                                <div className="text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-1">COMMUNITY</h3>
                                    <p className="text-gray-800 text-base md:text-lg">
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
            className="relative w-full min-h-[500px] px-0 left-1/2 right-1/2"
            style={{ transform: "translateX(-50%)" }}
        >
            <div className="relative overflow-hidden px-2 md:px-6">
                {/* Decorative background */}
                <img
                    src="/4-about/5-team/5-team_bg_shapes.png"
                    alt="Background decoration"
                    className="hidden md:block absolute left-0 w-315 left-25 mx-8 pointer-events-none"
                />

                {/* EXPANDED CONTAINER */}
                <div className="relative z-10 max-w-[1200px] mx-auto mt-12 text-center">
                    <motion.h2
                        {...getSectionAnim({ direction: "", delay: 0.1 })}
                        className="text-6xl md:text-8xl tracking-wide font-[Anton] mb-10 text-black"
                    >
                        MEET THE TEAM
                    </motion.h2>

                    <div className="flex flex-col gap-14 max-w-3xl mx-auto">
                        {/* Row 1 */}
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-end">
                            {/* Melis */}
                            <motion.div
                                {...getSectionAnim({ direction: "", delay: 0.2 })}
                                className="flex flex-col items-center flex-1 text-center"
                            >
                                <Image
                                    src="/4-about/5-team/5-team_1.png"
                                    alt="Melis"
                                    width={180}
                                    height={180}
                                    className="mx-auto mb-2"
                                />
                                <h3 className="text-xl md:text-3xl font-extrabold text-[#F44336] mb-0.5">
                                    MELIS
                                </h3>
                                <p className="text-gray-800 text-sm md:text-lg">
                                    Head of Burger R&amp;D
                                </p>
                            </motion.div>
                            {/* Kyle */}
                            <motion.div
                                {...getSectionAnim({ direction: "", delay: 0.3 })}
                                className="flex flex-col items-center flex-1 text-center"
                            >
                                <Image
                                    src="/4-about/5-team/5-team_2.png"
                                    alt="Kyle"
                                    width={180}
                                    height={180}
                                    className="mx-auto mb-2"
                                />
                                <h3 className="text-xl md:text-3xl font-extrabold text-[#F44336] mb-0.5">
                                    KYLE
                                </h3>
                                <p className="text-gray-800 text-sm md:text-lg">
                                    General Manager
                                </p>
                            </motion.div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-end">
                            {/* Omar */}
                            <motion.div
                                {...getSectionAnim({ direction: "", delay: 0.4 })}
                                className="flex flex-col items-center flex-1 text-center"
                            >
                                <Image
                                    src="/4-about/5-team/5-team_3.png"
                                    alt="Omar"
                                    width={180}
                                    height={144}
                                    className="mx-auto mb-2"
                                />
                                <h3 className="text-xl md:text-3xl font-extrabold text-[#F44336] mb-0.5">
                                    OMAR
                                </h3>
                                <p className="text-gray-800 text-sm md:text-lg">
                                    Customer Experience Lead
                                </p>
                            </motion.div>
                            {/* Ava */}
                            <motion.div
                                {...getSectionAnim({ direction: "", delay: 0.5 })}
                                className="flex flex-col items-center flex-1 text-center"
                            >
                                <Image
                                    src="/4-about/5-team/5-team_4.png"
                                    alt="Ava"
                                    width={180}
                                    height={144}
                                    className="mx-auto mb-2"
                                />
                                <h3 className="text-xl md:text-3xl font-extrabold text-[#F44336] mb-0.5">
                                    AVA
                                </h3>
                                <p className="text-gray-800 text-sm md:text-lg">
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
        <section id='visit-us' className="relative overflow-hidden w-full h-150 md:h-[500px] mx-auto px-4 ">
            <div className="relative overflow-hidden px-4 md:px-10 md:py-25 h-[500px]">
                {/* Decorative background */}
                <img
                    src="/4-about/6-visit/bg_shapes.png"
                    alt="Decorative background"
                    className="hidden md:block absolute w-[1100px] top-0 mb-25 left-70 pointer-events-none"
                />

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col-reverse md:flex-row md:bottom-10 items-center justify-between gap-8">
                    {/* Left: Text */}
                    <motion.div
                        {...getSectionAnim({ direction: "", delay: 0.1 })}
                        className="text-center md:text-left max-w-md"
                    >
                        <h2 className="text-6xl md:text-8xl tracking-wide font-[Anton] text-black mb-4">
                            VISIT US
                        </h2>
                        <p className="text-2xl text-gray-800 mb-6">
                            Experience our delicious handcrafted burgers and welcoming atmosphere in person.
                        </p>
                        <button className="bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] font-semibold px-5 py-2.5 rounded-lg text-lg transition">
                            FIND A SLAMBURGER
                        </button>
                    </motion.div>

                    {/* Right: Burger image */}
                    <motion.div
                        {...getSectionAnim({ direction: "left", delay: 0.2 })}
                        className="w-full max-w-xs"
                    >
                        <Image
                            src="/4-about/6-visit/burger.png"
                            alt="SlamBurger"
                            width={350}
                            height={350}
                            className="w-full h-auto"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>

    );
}


