import Link from 'next/link'


function ArticleFiltersBar() {
  return (
    <div className="max-w-4xl mx-auto px-6 mb-2 mt-1">
      <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 flex justify-between gap-6">
        <Link href="/articles" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200 whitespace-nowrap">
          Tous
        </Link>


        <div className='grow flex justify-between'>
          <select className="bg-slate-50 border-none text-slate-600 py-3 pl-4 pr-10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none min-w-[120px]">
            <option>Catégorie</option>
            <option>Tutoriels</option>
            <option>Actualités</option>
          </select>
          <select className="bg-slate-50 border-none text-slate-600 py-3 pl-4 pr-10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none min-w-[120px]">
            <option>Niveau</option>
            <option>Débutant</option>
            <option>Expert</option>
          </select>
          <select className="bg-slate-50 border-none text-slate-600 py-3 pl-4 pr-10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none min-w-[120px]">
            <option>Date</option>
            <option>Récent</option>
            <option>Ancien</option>
          </select>
        </div>
      <div className="flex items-center">
        <button
          title="Réinitialiser les filtres"
          className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all active:scale-90 group border border-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:-rotate-45 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
      </div>



    </div>
    // </div>

  )
}

export default ArticleFiltersBar