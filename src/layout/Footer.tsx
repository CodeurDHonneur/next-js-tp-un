import NavComponent from '@/components/Nav'
import React from 'react'

const FooterPage = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-12 mb-4 items-start">

          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Suivez-nous</h3>
            <div className="flex mt-4 space-x-6">
              <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
              <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xl font-bold text-amber-500">H5 TechRadar </span>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed ml-auto max-w-md">
              H5 est le diminutif de High Five University, une initiative orientée apprentissage, partage et excellence académique.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <NavComponent />
        </div>

        <div className="border-t border-slate-200 pt-5 text-center">
          <p className="text-slate-400 text-sm">&copy; 2026 H5 TechRadar. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  )
}

export default FooterPage