import CustomImage from "@/ui/Image";
import Image from "@/ui/Image";

import React from 'react'

const MainPage = () => {
  return (
    <main className="grow bg-yellow-100">
      <section className="mt-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            <strong className="text-blue-600">Articles de programmation</strong> pour apprendre et comprendre
          </h1>

          <p className="mt-3 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez les ressources les plus pointues du développement web, sélectionnées par la communauté H5 TechRadar.
          </p>
        </div>
      </section>

      <section className="mt-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 cursor-pointer h-64">
              {/* <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800" alt="React" className="w-full h-full object-cover"> */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white">
                <span className="text-xs font-semibold uppercase bg-blue-600 px-2 py-1 rounded-full">React</span>
                <h3 className="mt-2 text-xl font-bold">Maîtriser les React Hooks</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 cursor-pointer h-64">
              <div className="w-64 h-64"> {/* Le conteneur définit la taille */}
                <CustomImage
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400"
                  alt="Tailwind"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white">
                <span className="text-xs font-semibold uppercase bg-red-600 px-2 py-1 rounded-full">CSS</span>
                <h3 className="mt-2 text-xl font-bold">Le guide complet Tailwind CSS</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 cursor-pointer h-64">
              {/* <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800" alt="Python" className="w-full h-full object-cover"> */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white">
                <span className="text-xs font-semibold uppercase bg-green-600 px-2 py-1 rounded-full">Backend</span>
                <h3 className="mt-2 text-xl font-bold">Développer avec Django</h3>
              </div>
            </div>

          </div> </div>
      </section>
      <section className="mt-6 mb-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl font-semibold text-slate-700 leading-relaxed italic">
            « Explorer, comprendre et apprendre la programmation »
          </p>
        </div>
      </section>
    </main>
  )
}

export default MainPage