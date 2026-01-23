import NavComponent from '@/components/Nav';
import Button from '@/ui/Button';
import Link from 'next/link'
import React from 'react'

const HeaderPage = () => {


  return (
    <div className='bg-white border-b border-slate-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
              <div className='flex shrink-0 items-center'>
                  <Link href="/" className='text-2xl font-bold text-amber-500'>H5 TechRadar</Link>
              </div>

              <NavComponent />
          </div>
      </div>
    </div>
  )
}

export default HeaderPage