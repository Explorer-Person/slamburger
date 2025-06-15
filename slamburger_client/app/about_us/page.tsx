'use client'
import Image from 'next/image';

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
    <section id='about-slamburger' className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="relative bg-[#FFF7EA] overflow-hidden py-12 px-6 sm:px-12">
            {/* Decorative background image */}
            <Image
                src="/4-about/1-about/arkaplan.png"
                alt="Decorative background"
                className="absolute w-full h-full object-cover pointer-events-none"
                fill
                priority
            />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                {/* Left: Text content */}
                <div className="max-w-xl text-center md:text-left">
                    <h2 className="lg:text-7xl font-[Anton] text-black leading-tight mb-4">
                        About <span className="block">Slamburger</span>
                    </h2>
                    <p className="text-xl text-gray-800 mb-6">
                        Bold flavors. Real ingredients. Made to slam.
                    </p>
                    <button className="bg-[#F44336] hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition">
                        READ OUR STORY
                    </button>
                </div>

                {/* Right: Chef Illustration */}
                <div className="w-full max-w-sm">
                    <Image
                        src="/4-about/1-about/1-about_1.png"
                        alt="Chef holding burger"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
    );
}

function OurStory() {
    return (
    <section id='our-story' className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="relative bg-[#FFF7EA] overflow-hidden py-12 px-6 sm:px-12">
            {/* Decorative background */}
            <Image
                src="/4-about/2-story/hikaye_arkaplan.png"
                alt="Decorative background"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                fill
                priority
            />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                {/* Left: Text content */}
                <div className="max-w-xl text-center md:text-left">
                    <h2 className="lg:text-7xl font-[Anton] text-black leading-tight mb-4">
                        Our <span className="block">Story</span>
                    </h2>
                    <p className="text-xl text-gray-800 mb-6">
                        SLAMBURGER was founded with a simple vision: to put a unique spin on the classic burger.
                        We elevate familiar flavors with a creative touch, always made fresh and crafted with care.
                    </p>
                </div>

                {/* Right: Kitchen illustration */}
                <div className="w-full max-w-sm">
                    <Image
                        src="/4-about/2-story/2-story_1.png"
                        alt="Kitchen scene with chef"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
    );
}


function WhatWeStandFor() {
    return (
    <section
                id='what-we-stand-for'
                className="w-screen min-h-[600px] px-0 py-20 relative left-1/2 right-1/2 -mx-[50vw] max-w-none"
                style={{ transform: 'translateX(-50%)' }}
            >
        <div className="relative bg-[#FFF7EA] overflow-hidden py-16 px-6 ">
            {/* Decorative background shapes */}
            <img
                src="/4-about/3-features/3-features_bg_shapes.png"
                alt="Background shapes"
                className="absolute left-0 top-20 w-full object-cover"
            />

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <h2 className="lg:text-7xl font-[Anton] mb-25 text-black mb-12">
                    WHAT WE STAND FOR
                </h2>

                <div className="grid grid-rows-2 grid-cols-3 gap-8 text-center items-start">
                    {/* Row 1: Icons */}
                    <div>
                        <Image
                            src="/4-about/3-features/3-features_icon_1.png"
                            alt="Quality icon"
                            width={68}
                            height={68}
                            className="mx-auto"
                        />
                    </div>
                    <div>
                        <Image
                            src="/4-about/3-features/3-features_icon_2.png"
                            alt="Freshness icon"
                            width={68}
                            height={68}
                            className="mx-auto"
                        />
                    </div>
                    <div>
                        <Image
                            src="/4-about/3-features/3-features_icon_3.png"
                            alt="Community icon"
                            width={68}
                            height={68}
                            className="mx-auto"
                        />
                    </div>

                    {/* Row 2: Texts */}
                    <div>
                        <h3 className="text-3xl font-bold mb-2">Quality</h3>
                        <p className="text-gray-800 text-lg">
                            We are committed to providing top-notch food and service.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-2">Freshness</h3>
                        <p className="text-gray-800 text-lg">
                            We use only the freshest, locally sourced ingredients.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-2">Community</h3>
                        <p className="text-gray-800 text-lg">
                            We strive to make a positive impact in our neighborhood.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
}

function OurValues() {
    return (
    <section id='our-values' className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="relative bg-[#FFF7EA] overflow-hidden py-16 px-6 sm:px-12">
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <h2 className="lg:text-7xl font-[Anton] mb-25 text-black mb-12">
                    OUR VALUES
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
                    {/* Row 1 */}
                    <div className="flex flex-col items-center flex-1 text-center">
                        <Image src="/4-about/4-values/4-values_1.png" alt="Quality icon" width={80} height={80} className="mb-4" />
                        <h3 className="text-3xl font-bold mb-1">QUALITY</h3>
                        <p className="text-gray-800 text-lg">
                            We use only the freshest ingredients in every dish.
                        </p>
                    </div>
                    <div className="flex flex-col items-center flex-1 text-center">
                        <Image src="/4-about/4-values/4-values_4.png" alt="Service icon" width={80} height={80} className="mb-4" />
                        <h3 className="text-3xl font-bold mb-1">SERVICE</h3>
                        <p className="text-gray-800 text-lg">
                            We go the extra mile to serve our customers
                        </p>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col items-center flex-1 text-center">
                        <Image src="/4-about/4-values/4-values_2.png" alt="Service icon" width={80} height={80} className="mb-4" />
                        <h3 className="text-3xl font-bold mb-1">SERVICE</h3>
                        <p className="text-gray-800 text-lg">
                            We go the extra mile to serve our customers
                        </p>
                    </div>
                    <div className="flex flex-col items-center flex-1 text-center">
                        <Image src="/4-about/4-values/4-values_5.png" alt="Passion icon" width={80} height={80} className="mb-4" />
                        <h3 className="text-3xl font-bold mb-1">PASSION</h3>
                        <p className="text-gray-800 text-lg">
                            We love what we do, and it shows in our food
                        </p>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col items-center gap-4 col-span-full">
                        <Image src="/4-about/4-values/4-values_3.png" alt="Community icon" width={80} height={80} />
                        <div className="text-center">
                            <h3 className="text-3xl font-bold mb-1">COMMUNITY</h3>
                            <p className="text-gray-800 text-lg">
                                We care about our community and give back
                            </p>
                        </div>
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
        id='our-team'
        className="w-screen min-h-[600px] px-0 py-20 relative left-1/2 right-1/2 -mx-[50vw] max-w-none"
        style={{ transform: 'translateX(-50%)' }}
    >
        <div className="relative bg-[#FFF7EA] overflow-hidden py-16 px-6 sm:px-12">
            {/* Decorative background */}
            <img
                src="/4-about/5-team/5-team_bg_shapes.png"
                alt="Background decoration"
                className="absolute left-25 object-cover pointer-events-none"
            />

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <h2 className="lg:text-7xl font-[Anton] mb-25 text-black mb-12">
                    MEET THE TEAM
                </h2>

                <div className="flex flex-col gap-24 max-w-5xl mx-auto">
                    {/* Row 1: Melis & Kyle */}
                    <div className="flex flex-row gap-12 justify-center items-end">
                        {/* Melis */}
                        <div className="flex flex-col items-center flex-1">
                            <Image src="/4-about/5-team/5-team_1.png" alt="Melis" width={240} height={240} className="mx-auto mb-4" />
                            <h3 className="text-3xl font-extrabold text-[#F44336] mb-1">MELIS</h3>
                            <p className="text-gray-800 text-lg">Head of Burger R&amp;D</p>
                        </div>
                        {/* Kyle */}
                        <div className="flex flex-col items-center flex-1">
                            <Image src="/4-about/5-team/5-team_2.png" alt="Kyle" width={240} height={240} className="mx-auto mb-4" />
                            <h3 className="text-3xl font-extrabold text-[#F44336] mb-1">KYLE</h3>
                            <p className="text-gray-800 text-lg">General Manager</p>
                        </div>
                    </div>
                    {/* Row 2: Omar & Ava */}
                    <div className="flex flex-row gap-12 justify-center items-end">
                        {/* Omar */}
                        <div className="flex flex-col items-center flex-1">
                            <Image src="/4-about/5-team/5-team_3.png" alt="Omar" width={240} height={240} className="mx-auto mb-4" />
                            <h3 className="text-3xl font-extrabold text-[#F44336] mb-1">OMAR</h3>
                            <p className="text-gray-800 text-lg">Customer Experience Lead</p>
                        </div>
                        {/* Ava */}
                        <div className="flex flex-col items-center flex-1">
                            <Image src="/4-about/5-team/5-team_4.png" alt="Ava" width={240} height={240} className="mx-auto mb-4" />
                            <h3 className="text-3xl font-extrabold text-[#F44336] mb-1">AVA</h3>
                            <p className="text-gray-800 text-lg">Marketing Specialist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

function VisitUs() {
    return (
    <section id='visit-us' className="w-full h-full max-w-7xl mx-auto px-6 py-6">
        <div className="relative bg-[#FFF7EA] overflow-hidden py-16 px-6 sm:px-12 w-full min-h-[700px]">
            {/* Decorative background */}
            <Image
                src="/4-about/6-visit/bg_shapes.png"
                alt="Decorative background"
                className="absolute object-cover pointer-events-none"
                fill
                priority
            />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Left: Text */}
                <div className="text-center md:text-left max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
                        VISIT US
                    </h2>
                    <p className="text-lg text-gray-800 mb-8">
                        Experience our delicious handcrafted burgers and welcoming atmosphere in person.
                    </p>
                    <button className="bg-[#F44336] hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition">
                        FIND A SLAMBURGER
                    </button>
                </div>

                {/* Right: Burger image */}
                <div className="w-full max-w-sm">
                    <Image
                        src="/4-about/6-visit/burger.png"
                        alt="SlamBurger"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
    );
}


