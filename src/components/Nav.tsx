import Button from '@/ui/Button'
import Link from 'next/link'
import React from 'react'

const NavComponent = () => {
    const classLink = "text-slate-600 hover:text-amber-500";
    return (
        <nav className='flex space-x-8 items-center'>
            <Link href="/articles" className={classLink}>Articles</Link>
            <Link href="#" className={classLink}>Tutoriels</Link>
            <Link href="#" className={classLink}>A propos</Link>
            <Link href="#" className={classLink}>A venir</Link>
            <Link href="#" className={classLink}>Nos partenaires</Link>
            <Button title='Nous suvire' />
        </nav>
    )
}

export default NavComponent