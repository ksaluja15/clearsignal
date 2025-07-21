// navbar and header components, fully responsive
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SearchModal from './SearchModal';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
    </svg>
);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); 
    const pathname = usePathname();

    const isHomePage = pathname === '/';

    // Combined effect for locking body scroll when either menu or search is open
    useEffect(() => {
        const isModalOpen = isMenuOpen || isSearchOpen;
        if (isModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen, isSearchOpen]);

    const headerClasses = isHomePage
        ? 'absolute top-0 left-0 right-0 z-50'
        : 'sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800';

    return (
        <>
            <header className={headerClasses}>
                <nav className="mx-auto flex max-w-screen-xl items-center p-4 md:p-6 lg:px-8">
                    {/* Left: Logo */}
                    <div className="flex flex-1 justify-start">
                        <Link href="/" aria-label="Homepage">
                            <Image
                                src="/10-logo-transparent-png.png"
                                alt="Kusalco Logo"
                                width={40}
                                height={40}
                                className="h-6 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
                        <Link href="/" className="text-2xl font-medium text-white hover:text-gray-200">Home</Link>
                        <Link href="/author" className="text-2xl font-medium text-white hover:text-gray-200">Author</Link>
                        <Link href="/portfolio" className="text-2xl font-medium text-white hover:text-gray-200">Portfolio</Link>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-4">
                        <button 
                            onClick={() => setIsSearchOpen(true)}
                            className="text-white hover:text-gray-300"
                            aria-label="Open search"
                        >
                            <SearchIcon />
                        </button>

                        <button
                            className="z-50 h-8 w-8 text-white md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="relative flex h-full w-full items-center justify-center">
                                <span className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                                <span className={`absolute h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 flex flex-col bg-black transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            >
                <div className="flex-grow pt-24">
                    <nav className="flex flex-col items-center justify-center gap-8">
                        <Link href="/" className="text-3xl font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/author" className="text-3xl font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Author</Link>
                        <Link href="/portfolio" className="text-3xl font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                    </nav>
                </div>
            </div>
        </>
    );
}