"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
    href: string;
    children: string;
    className: string;
}


function NavLink({ href, children, className }: Props) {
    const pathname = usePathname();
    
    const isActive = pathname === href;
    
    const addStyle = 'bg-amber-200 hover:text-blue-600 font-bold px-4 py-2 rounded-lg transition-all duration-150';

    return (
        <Link 
        href={href}
        className={`${className} ${isActive ? addStyle  : ''}`}
        >
            {children}
        </Link>
    )
}

export default NavLink