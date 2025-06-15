'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminHeader() {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        // This will fire every time the route changes
        setCurrentPath(pathname);
    }, [pathname]);


    const isLoginPage = currentPath === '/login';

    return (
        <header className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2 bg-white border-b border-gray-200">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link href="/">
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
                        <NavLink href="/dashboard" label="Dashboard" pathname={pathname} />
                        <NavLink href="/menu" label="Menu" pathname={pathname} />
                        <NavLink href="/category" label="Category" pathname={pathname} />
                        <NavLink href="/orders" label="Orders" pathname={pathname} />
                        <NavLink href="/settings" label="Settings" pathname={pathname} />
                    </>
                )}
            </nav>
        </header>
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
