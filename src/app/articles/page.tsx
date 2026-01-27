import React from 'react'

const ArticlesPage = () => {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg">
  {/* Image avec effet de zoom au survol */}
  <div className="relative h-48 w-full overflow-hidden">
    <img 
      // src={`/api/og?title=${article.title}`} 
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
      // alt={article.title}
    />
    <span className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
      {/* {article.category} */}
    </span>
  </div>

  {/* Contenu de la carte */}
  <div className="p-5">
    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
      {/* <span className="capitalize">{article.level}</span> */}
      <span>•</span>
      <span>5 min de lecture</span>
    </div>
    
    <h3 className="mb-2 text-xl font-bold text-slate-900 line-clamp-2">
      {/* {article.title} */}
    </h3>
    
    <p className="text-sm text-slate-600 line-clamp-3">
      {/* {article.content} */}
    </p>
    
    <button className="mt-4 font-semibold text-blue-600 hover:text-blue-800 text-sm">
      Lire l'article →
    </button>
  </div>
</div>
  )
}

export default ArticlesPage