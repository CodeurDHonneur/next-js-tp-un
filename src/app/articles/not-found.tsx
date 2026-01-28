import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className="fixed inset-0  flex items-center justify-center px-6 overflow-hidden">
      {/* Cercles décoratifs en arrière-plan pour le style Tech */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-md w-full text-center relative z-10 ">
        {/* Le chiffre 404 avec un dégradé */}
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-slate-900">
          404
        </h1>

        <div className="mt-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Page introuvable
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Désolé, l'article que vous cherchez a probablement été déplacé ou n'existe plus dans notre base de données.
          </p>
        </div>

        {/* Bouton de retour avec l'effet "Actif" qu'on a appris */}
        <div className="mt-10">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-2xl shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à la page d'articles
          </Link>
        </div>

        {/* Petit lien d'aide discret */}
        <p className="mt-8 text-sm text-slate-400">
          Besoin d'aide ? <Link href="/" className="text-blue-500 hover:underline">Contactez le support</Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound