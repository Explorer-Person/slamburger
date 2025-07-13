/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image';
import { getSectionAnim } from "../animation-util";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <main className="flex flex-col items-center md:w-[100%] md:overflow-hidden pt-25 md:pt-45 md:relative space-y-20 md:min-h-screen md:space-y-25 font-[var(--font-body)]">
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
        <section id="about-slamburger" className="relative w-[100%]">
            <div className="">
                {/* Background image - preserved */}
                <img
                    src="/4-about/1-about/arkaplan.png"
                    alt="Decorative background"
                    className="hidden md:block md:absolute w-[80%] mx-[10%] bottom-[-150px]"
                />

                <motion.div {...getSectionAnim({ direction: "", delay: 0.1 })} className="md:w-[80%] md:mx-[10%] w-[90%] mx-[5%] space-y-10 md:space-y-0 z-10 md:flex items-center justify-center gap-16 text-center text-left">
                    {/* Left: Text content */}
                    <div className="text-center md:text-start">
                        <h2 className="text-5xl md:text-8xl md:tracking-wide font-[Anton] text-black leading-tight mb-8">
                            ABOUT <span className="block">SLAMBURGER</span>
                        </h2>
                        <p className="text-lg md:text-2xl text-gray-800 mb-8">
                            Bold flavors. Real ingredients. Made to slam.
                        </p>
                        <button className="bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] font-semibold text-lg px-10 py-5 rounded-xl transition">
                            READ OUR STORY
                        </button>
                    </div>

                    {/* Right: Chef Image */}
                    <div className="
                    z-10
                    ">
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
        <section id="our-story" className="relative w-[100%]">
            <div className="relative">
                {/* Background image - preserved */}
                <img
                    src="/4-about/2-story/hikaye_arkaplan.png"
                    alt="Decorative background"
                    className="hidden md:block absolute w-[90%] top-[-100px] "

                />

                <div className="md:w-[80%] md:mx-[10%] w-[90%] mx-[5%] z-10 relative flex flex-col md:flex-row items-center justify-center gap-16 text-center md:text-left">
                    {/* Text content */}
                    <motion.div {...getSectionAnim({ direction: "left", delay: 0.1 })} className="">
                        <h2 className="text-6xl md:text-8xl tracking-wide font-[Anton] text-black leading-tight mb-8">
                            OUR <span className="block">STORY</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-800 mb-8">
                            SLAMBURGER was founded with a simple vision: to put a unique spin on the classic burger.
                            We elevate familiar flavors with a creative touch, always made fresh and crafted with care.
                        </p>
                    </motion.div>

                    {/* Illustration */}
                    <motion.div {...getSectionAnim({ direction: "right", delay: 0.1 })} className="w-[100%]">
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
            className="relative w-[100%]"
        >
            <div className="">
                {/* Background shapes (untouched) */}
                <img
                    src="/4-about/3-features/3-features_bg_shapes.png"
                    alt="Background shapes"
                    className="hidden md:block absolute w-[90%] mx-[5%] bottom-[-250px]"
                />

                <div className="relative text-center w-[90%] mx-[5%] md:w-[80%] md:mx-[10%]">
                    <motion.h2 {...getSectionAnim({ direction: "", delay: 0.1 })} className="text-6xl md:text-8xl font-[Anton] mb-16 text-black">
                        WHAT WE STAND FOR
                    </motion.h2>

                    {/* Grid of icons and texts */}
                    <div className="flex flex-col md:flex-row items-center justify-center text-center gap-5">
                        {/* Block 1 */}
                        <motion.div {...getSectionAnim({ direction: "up", delay: 0.2 })} className="relative shadow-md p-10 rounded-[3rem] bg-white/20">
                            <Image
                                src="/4-about/3-features/3-features_icon_1.png"
                                alt="Quality icon"
                                width={90}
                                height={90}
                                className="mx-auto w-[68px] md:w-[78px]"
                            />
                            <div className="">
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
                            <div className="">
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
                            <div className="">
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
        <section id="our-values" className="relative w-[100%]">
            <div>
                <div className="relative text-center w-[90%] mx-[5%] md:w-[80%] md:mx-[10%]">
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

                        <div className="mt-6 grid md:grid-cols-2 gap-6">
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
            className="relative w-[100%]"
        >
            <div>
                {/* Decorative background */}
                <img
                    src="/4-about/5-team/5-team_bg_shapes.png"
                    alt="Background decoration"
                    className="hidden md:block absolute left-0 w-315 left-25 mx-8 pointer-events-none"
                />

                {/* EXPANDED CONTAINER */}
                <div className="relative text-center w-[90%] mx-[5%] md:w-[80%] md:mx-[10%]">
                    <motion.h2
                        {...getSectionAnim({ direction: "", delay: 0.1 })}
                        className="text-6xl md:text-8xl tracking-wide font-[Anton] mb-10 text-black"
                    >
                        MEET THE TEAM
                    </motion.h2>

                    <div className="flex flex-col gap-25">
                        {/* Row 1 */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-25 md:gap-0">
                            {/* Melis */}
                            <motion.div
                                {...getSectionAnim({ direction: "", delay: 0.2 })}
                                className="flex flex-col text-center w-[100%]"
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
                                className="flex flex-col text-center w-[100%]"
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
                        <div className="flex flex-col md:flex-row justify-center items-center gap-25 md:gap-0">
                            {/* Omar */}
                            <motion.div
                                {...getSectionAnim({ direction: "", delay: 0.4 })}
                                className="flex flex-col text-center w-[100%]"
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
                                className="flex flex-col text-center w-[100%]"
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
        <section id='visit-us' className="relative w-[100%]">
            <div className="">
                {/* Decorative background */}
                <img
                    src="/4-about/6-visit/bg_shapes.png"
                    alt="Decorative background"
                    className="hidden md:block absolute top-[6px] right-25 w-300 pointer-events-none"
                />

                <div className="relative flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-center w-[90%] mx-[5%] md:w-[80%] md:mx-[10%]">
                    {/* Left: Text */}
                    <motion.div
                        {...getSectionAnim({ direction: "", delay: 0.1 })}
                        className="text-center md:text-left max-w-md"
                    >
                        <h2 className="text-6xl md:text-8xl tracking-wide font-[Anton] text-black mb-4">
                            VISIT US
                        </h2>
                        <p className="text-2xl text-gray-800 md:w-[75%] mb-6">
                            Experience our delicious handcrafted burgers and welcoming atmosphere in person.
                        </p>
                        <button className="bg-[var(--button-bg)] hover:bg-[var(--button-bg-hover)] text-[var(--button-fg)] font-semibold px-5 py-2.5 rounded-lg text-lg transition">
                            FIND A SLAMBURGER
                        </button>
                    </motion.div>

                    {/* Right: Burger image */}
                    <motion.div
                        {...getSectionAnim({ direction: "left", delay: 0.2 })}
                        className=""
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


