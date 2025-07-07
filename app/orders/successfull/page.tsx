/* eslint-disable @next/next/no-img-element */
'use client';

import Link from "next/link";

export default function SuccessfullOrderPage() {
    return (
        <section className="w-full min-h-screen pt-20 flex items-center justify-center">
            <div className="w-[350px] md:w-[370px] bg-[#FFF8EC] rounded-2xl p-8 shadow-2xl flex flex-col items-center">
                {/* Star Icon */}
                <img src="/star.png" className="w-50" alt="" />
                <h1 className="text-6xl font-[Anton] tracking-wide  text-center mb-2" >ORDER PLACED!</h1>
                <p className="text-lg text-center mb-1">Thanks! Your order has been<br />sent to the kitchen.</p>
                <p className="text-sm text-center text-black/70 mb-8">Estimated prep time: <b>12-15 minutes</b></p>
                <Link
                    href="/menu"
                    className="w-full rounded-full bg-[#F64B36] text-white text-lg font-extrabold py-3 mt-2 shadow-md hover:bg-[#d83422] transition text-center"
                >
                    VIEW MENU AGAIN
                </Link>
            </div>
        </section>
    );
}
