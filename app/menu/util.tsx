'use client'

import { useEffect, useState } from "react";

export default function LongPressDesc({ desc, showRest }: { desc: string, showRest: boolean }) {
    const { first, rest } = descSplitter(desc);
    const [detail, setDetail] = useState<string>(first);
    

    useEffect(()=>{
        const lastResult = window.innerWidth > 600 ? desc : first
        setDetail(lastResult)
    },[])
    return (
        <p className="overflow-hidden md:block text-sm md:text-2xl text-gray-700">
            {detail}
            {rest && '...'}
            <span className={`${showRest ? "block" : "hidden"} md:hidden text-xs text-gray-500`}>
                {rest}
            </span>
        </p>
    );
}

export const descSplitter = (desc: string) => {
    const words = desc.split(' ');
    const first = words.slice(0, 3).join(' ');
    const rest = words.slice(3).join(' ');
    return { first, rest }
}