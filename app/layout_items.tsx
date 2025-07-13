'use client';
import Link from 'next/link';
import './globals.css';
import React, { useState, useEffect } from 'react';
import { getSectionAnim } from "./animation-util";
import { motion } from "framer-motion";
// import SlamBurgerLogo from './slamburger_logo';
import { usePathname } from "next/navigation";

export function ClientLayoutBackground({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
    if (pathname.startsWith('/admin')) {
        document.documentElement.style.setProperty('--layout-bg', 'var(--admin-bg)');
    } else {
        // Use the default you defined in CSS (sync these values!)
        document.documentElement.style.setProperty('--layout-bg', '#fef6e3'); // <-- match your default
    }
}, [pathname]);


    return <>{children}</>;
}

export function Header() {
    const pathname = usePathname();
    console.log("Current pathname:", pathname);
    if (pathname.startsWith("/admin")) {
        return <AdminHeader />;
    }
    return <ClientHeader />;
}

export function BasketWidget() {
    const pathname = usePathname();
    console.log("Current pathname:", pathname);
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Check basket on mount
        const checkBasket = () => {
            const basketString = localStorage.getItem("basket");
            try {
                const basket = basketString ? JSON.parse(basketString) : [];
                setVisible(Array.isArray(basket) && basket.length > 0 && pathname !== '/admin');
                setCount(basket.length);
            } catch {
                setVisible(false);
                setCount(0);
            }
        };
        checkBasket();

        // Listen to storage changes (for other tabs/windows)
        window.addEventListener("storage", checkBasket);
        return () => window.removeEventListener("storage", checkBasket);
    }, [pathname]);


    if (!visible) return null;

    return (
        <div className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-12">
            <Link
                href={pathname === '/basket' ? '/menu' : '/basket'}
                className={`
                    group relative flex items-center gap-2 px-4 py-2 rounded-[3rem]
                    bg-[var(--background)] text-[var(--foreground)]
                    shadow-xl font-semibold transition
                    border-2 border-color-[var(--foreground)]
                    hover:scale-105 active:scale-95
                    hover:border-gradient-to-r hover:from-[#f64b36] hover:to-[#f6be36]
                    hover:shadow-[0_4px_24px_0_rgba(246,75,54,0.18)]
                    outline-none
                    after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none
                    after:opacity-0 after:transition-opacity after:duration-500
                    hover:after:opacity-100
                `}
            >
                <span className="relative">
                    <img src="/basket-icon.png" alt="Basket Icon" className={`${pathname === '/basket' ? 'hidden' : 'block'} w-8 h-8 drop-shadow-md`} />

                    {/* Count bubble */}
                    <span className={`${pathname === '/basket' ? 'hidden' : 'block'} absolute -top-1.5 -right-1.5 bg-[#f64b36] text-white rounded-full px-2 py-0.5 text-xs font-bold shadow-md border border-white`}>
                        {count}
                    </span>
                </span>
                <span className="text-lg font-semibold">{pathname === '/basket' ? 'Add More Item!' : 'Basket'}</span>
                {/* Fading/animated border effect */}
                <span className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-[#f64b36] group-hover:to-[#f6be36] group-hover:opacity-80 transition-all duration-500" />
            </Link>
        </div>
    );
}


function NavLink({
    href,
    label,
    pathname,
}: {
    href: string;
    label: string;
    pathname: string;
}) {
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <span
                className={`hover:text-red-500 ${isActive ? 'text-red-600 underline underline-offset-8' : ''
                    }`}
            >
                {label}
            </span>
        </Link>
    );
}
export function AdminHeader() {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        // This will fire every time the route changes
        setCurrentPath(pathname);
    }, [pathname]);


    const isLoginPage = currentPath === '/admin/login';

    return (
        <header className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2 bg-white border-b border-gray-200">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link href="/admin/dashboard">
                    <span className="text-2xl">
                        <img
                            className="w-28 sm:w-36 h-20 sm:h-24"
                            src="/burger-icon-transparent.png"
                            alt="Burger Icon"
                        />
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-14 mt-4 sm:mt-0 text-base sm:text-lg font-medium text-gray-800">
                {isLoginPage ? (
                    <NavLink href="/login" label="Login" pathname={pathname} />
                ) : (
                    <>
                        <NavLink href="/admin/dashboard" label="Dashboard" pathname={pathname} />
                        <NavLink href="/admin/menu" label="Menu" pathname={pathname} />
                        <NavLink href="/admin/category" label="Category" pathname={pathname} />
                        <NavLink href="/admin/orders" label="Orders" pathname={pathname} />
                        <NavLink href="/admin/settings" label="Settings" pathname={pathname} />
                    </>
                )}
            </nav>
        </header>
    );

}

export function ClientHeader() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 20);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`
        fixed flex top-0 left-0 w-full z-50
        flex-row items-center justify-between
        px-4 md:px-10 py-4 md:py-8
        shadow-md gap-x-4 md:gap-x-8 text-center md:text-left
        transition-colors duration-300
        backdrop-blur
        ${scrolled
            ? "bg-[var(--layout-bg)]/80"
            : "bg-[var(--layout-bg)]"
        }
        `}>
            <Link href="/" className="flex items-center gap-3 h-10" aria-label="Go to homepage">
                {/* <SlamBurgerLogo /> */}
                <h1 className="text-2xl md:text-4xl font-[Anton] text-[--foreground] tracking-wide cursor-pointer">
                    SLAMBURGER
                </h1>
            </Link>

            {/* Hamburger for mobile only */}
            <button
                className={`md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none active:scale-95 transition-transform hover:bg-gray-100 rounded`}
                aria-label="Open menu"
                onClick={() => setMobileNavOpen((prev) => !prev)}
            >
                <span className={`block w-7 h-1 bg-[var(--layout-fg)] rounded my-0.5 transition-all`}></span>
                <span className={`block w-7 h-1 bg-[var(--layout-fg)] rounded my-0.5 transition-all`}></span>
                <span className={`block w-7 h-1 bg-[var(--layout-fg)] rounded my-0.5 transition-all`}></span>
            </button>

            {/* Navigation */}
            <nav
                className={`
            hidden md:flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:space-x-6 text-base md:text-lg font-semibold uppercase
        `}
            >
                <a href="/menu" className="hover:text-[--accent]">Menu</a>
                <a href="/about_us" className="hover:text-[--accent]">About Us</a>
                <a href="/gallery" className="hover:text-[--accent]">Gallery</a>
                <a href="/contact" className="hover:text-[--accent]">Contact</a>
            </nav>

            {/* Mobile Dropdown */}
            <motion.div
                {...getSectionAnim({ direction: "", delay: 0.15 })}
                className={`
            md:hidden
            absolute top-full left-0 w-full bg-[#FFF4E8] shadow-lg transition-all duration-200
            ${mobileNavOpen ? "block" : "hidden"}
            ${scrolled
                        ? "bg-[var(--layout-bg)]/80 text-[var(--layout-fg)]"
                        : "bg-[var(--layout-bg)] text-[var(--layout-fg)]"
                    }

        `}
            >
                <nav className="flex flex-col gap-y-2 py-4 px-2 text-base font-semibold uppercase">
                    <a
                        href="/menu"
                        className="hover:text-[--accent] py-2 active:scale-95 transition-transform"
                        onClick={() => setMobileNavOpen(false)}
                    >
                        Menu
                    </a>
                    <a
                        href="/about_us"
                        className="hover:text-[--accent] py-2 active:scale-95 transition-transform"
                        onClick={() => setMobileNavOpen(false)}
                    >
                        About Us
                    </a>
                    <a
                        href="/gallery"
                        className="hover:text-[--accent] py-2 active:scale-95 transition-transform"
                        onClick={() => setMobileNavOpen(false)}
                    >
                        Gallery
                    </a>
                    <a
                        href="/contact"
                        className="hover:text-[--accent] py-2 active:scale-95 transition-transform"
                        onClick={() => setMobileNavOpen(false)}
                    >
                        Contact
                    </a>
                </nav>
            </motion.div>
        </header>
    );
}

export function Footer() {
    const pathname = usePathname();
    console.log("Current pathname:", pathname);
    if (pathname.startsWith("/admin")) {
        return (<div></div>);
    }

    return (
        <footer className="px-10 pt-10 pb-6 mt-12">
            {/* Top Row: Logo + Navigation */}
            <div className="flex flex-col md:flex-row justify-center items-center w-full gap-y-4">
                <h2 className="text-5xl font-[Anton] tracking-wide mx-10">SLAMBURGER</h2>
                <nav className="flex space-x-8 text-lg font-medium uppercase tracking-wide">
                    <a href="/menu" className="hover:text-[--accent]">Menu</a>
                    <a href="/about_us" className="hover:text-[--accent]">About</a>
                    <a href="/gallery" className="hover:text-[--accent]">Gallery</a>
                    <a href="/contact" className="hover:text-[--accent]">Contact</a>
                </nav>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-[--foreground]"></div>

            {/* Bottom Text */}
            <div className="text-center text-sm font-medium">
                © 2025 SLAMBURGER. All rights reserved.
            </div>
        </footer>
    );
}

