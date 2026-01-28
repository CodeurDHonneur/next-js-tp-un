import FilterArticles from '@/components/articles/FilterArticles';
import React from 'react'

function layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

    return (
        <>
            <h2 className='text-4xl md:text-5xl font-extrabold text-blue-600 tracking-tight text-center mt-6'>Exploration technique</h2>
            <p className='font-semibold text-2xl text-center'>L'univers du développement vous ouvre ses portes</p>

            <FilterArticles />
            <div>
                {children}
            </div>
        </>
    )
}

export default layout