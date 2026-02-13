"use client"
import Link from 'next/link'
import { usePathname, useRouter } from "next/navigation";

type Filters = {
  category?: string
  tag?: string
  level?: string
}

type Facets = {
  categories: string[]
  tags: string[]
  levels: string[]
}

interface Props {
  facets: Facets
  activeFilters: Filters
}

function ArticleFiltersBar({ facets, activeFilters }: Props) {
  
  // Récupère le router de Next.js pour manipuler l'URL
const router = useRouter();


// Fonction pour construire l'URL en fonction des filtres actifs
const buildUrl = (filters: Filters) => {
  const segments = [];  // Tableau qui contiendra les segments d'URL (ex : /articles/filter/category/nextjs/tag/routing)

  // Itère à travers chaque clé du filtre
  for (const key in filters) {
    const value = filters[key as keyof Filters];  // Récupère la valeur associée à chaque clé de filtre
    if (value) segments.push(key, value);  // Si la valeur existe, ajoute la clé et la valeur à segments
  }

  // Si des segments ont été ajoutés (c'est-à-dire des filtres actifs), retourne l'URL construite avec les segments
  // Sinon, retourne l'URL de base sans filtres
  return segments.length
    ? `/articles/filter/${segments.join("/")}`  // Exemple : /articles/filter/category/nextjs/tag/routing
    : `/articles`;  // Exemple : /articles sans filtres
}

// Fonction pour mettre à jour l'URL en modifiant un filtre spécifique
const updateFilter = (key: keyof Filters, value?: string) => {
  // Appelle router.push pour modifier l'URL, en utilisant la fonction buildUrl pour générer la nouvelle URL avec le filtre mis à jour
  router.push(
    buildUrl({
      ...activeFilters,  // Ajoute tous les filtres existants
      [key]: value || undefined  // Modifie le filtre actuel, ou le supprime si `value` est undefined
    })
  );
}

// Fonction pour réinitialiser tous les filtres en renvoyant à l'URL de base sans filtres
const resetFilters = () => router.push("/articles");  // Redirige vers la page /articles sans filtres



  return (
    <div className="max-w-4xl mx-auto px-6 mb-2 mt-1">
      <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 flex justify-between gap-6">
        <Link href="/articles" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200 whitespace-nowrap">
          Tous
        </Link>
        <div className='grow flex justify-between'>
          <select
            className="bg-slate-50 border-none text-slate-600 py-3 pl-4 pr-10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none min-w-50"
            value={activeFilters?.category ?? ""}
            onChange={e => updateFilter("category", e.target.value)}
          >
            <option value="" disabled>Category</option>
            {facets?.categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            className="bg-slate-50 border-none text-slate-600 py-3 pl-4 pr-10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none min-w-50"
            value={activeFilters?.tag ?? ""}
            onChange={e => updateFilter("tag", e.target.value)}
          >
            <option value="" disabled>Tag</option>
            {facets?.tags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          <select className="bg-slate-50 border-none text-slate-600 py-3 pl-4 pr-10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none min-w-50"
            value={activeFilters?.level ?? ""}
            onChange={e => updateFilter("level", e.target.value)}
          >
            <option value="" disabled>Level</option>
            {facets?.levels.map(level => (
              <option key={level} value={level}>{level}</option>
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