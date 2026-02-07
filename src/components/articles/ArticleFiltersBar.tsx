"use client"
import { Filters } from '@/types/facets';
import { Facets } from '@/types/getArticlesAndFacets';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ArticleFiltersBarProps {
  activeFilters: Filters,
  facets: Facets
}

function ArticleFiltersBar({ activeFilters, facets }: ArticleFiltersBarProps) {
  //Récupération du router de NextJS pour faire de la magie dans le code
  const router = useRouter();

  // const testUrl = {
  //   category: "Développement",
  //   level: "beginner",
  //   tag: "devops"
  // }

  const buildUrl = (filters: Filters) => {
    const segments = [];

    for (const key in filters) {
      const value = filters[key as keyof Filters];
      if (value) segments.push(key, encodeURIComponent(value));
    }
    return segments.length
      ? `/articles/filters/${segments.join("/")}`
      : `/articles`;
  }



  const updateFilter = (key: keyof Filters, value?: string) => {
    router.push(buildUrl({
      ...activeFilters,
      [key]: value || undefined
    }));
  }

  const resetFilters = () => router.push("/articles");


  // useEffect(() => updateFilter());

  return (
    <div className="max-w-4xl mx-auto px-6 mb-2 mt-1">
      <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 flex justify-between gap-6">
        <Link href="/articles" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200 whitespace-nowrap">
          Tous
        </Link>


        <div className='grow flex justify-between'>
          <select
            onChange={e => updateFilter("category", e.target.value)}
            className="bg-slate-50 border-none text-slate-600 py-3 pl-4 pr-10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none min-w-30">
            {/* 
            category = Développement 
            - faire appel updateFilter
            - passer les valeurs category et Développement à updateFilter
            */}

            <option value="">Category {facets?.category?.length}</option>
            {facets?.category.map((category, i) => (
              <option key={i}>{category}</option>
            ))}
          </select>
          <select
            onChange={e => updateFilter("tag", e.target.value)}
            className="bg-slate-50 border-none text-slate-600 py-3 pl-4 pr-10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none min-w-30">
            <option value="">Tag {facets?.tags?.length}</option>
            {facets?.tags.map((tag, i) => (
              <option key={i}>{tag}</option>
            ))}
          </select>
          <select
            onChange={e => updateFilter("level", e.target.value)}
            className="bg-slate-50 border-none text-slate-600 py-3 pl-4 pr-10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none min-w-30">
            <option value="">Level {facets?.levels?.length}</option>
             {facets?.levels.map((level, i) => (
              <option key={i}>{level}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <button
            onClick={resetFilters}
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
  )
}

export default ArticleFiltersBar