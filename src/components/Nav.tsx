import Button from '@/ui/Button'
import NavLink from '@/ui/NavLink';
import Link from 'next/link'
import React from 'react'

const NavComponent = () => {
    const classLink = "text-slate-600 hover:text-amber-500";
    return (
        <nav className='flex space-x-8 items-center'>
            <NavLink href="/articles" className={classLink}>Articles</NavLink>
            <NavLink href="#" className={classLink}>Tutoriels</NavLink>
            <NavLink href="#" className={classLink}>A propos</NavLink>
            <NavLink href="#" className={classLink}>A venir</NavLink>
            <NavLink href="#" className={classLink}>Nos partenaires</NavLink>
            <Button title='Nous suvire' />
        </nav>
    )
}

export default NavComponent