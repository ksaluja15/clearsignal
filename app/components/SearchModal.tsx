//the search popup
'use client';

import { useEffect, useRef } from 'react';
import Search from './Search';

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);


    return (
        <div

            className={`
                fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[15vh] backdrop-blur-sm
                transition-opacity duration-300 ease-in-out
                ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
        >
            <div 
                ref={modalRef}
                className={`
                    w-full max-w-lg transform-gpu rounded-xl bg-gray-900 shadow-2xl
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
            >
                <Search onClose={onClose} /> 
            </div>
        </div>
    );
}