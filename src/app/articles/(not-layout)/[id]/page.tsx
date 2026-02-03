import { Article } from '@/types/articles';
import { getArticle } from '@/utils/articles';
import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
    params: Promise<{ id: string }>
}


async function page(props: Props) {

    const params = await props.params;
    const { id } = params;

    const article = await getArticle(id) as Article;

    if (!article) {
        notFound();
    }

    return (
        <>
            <div className="relative h-[30vh]  w-full overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/60 to-slate-900"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-4xl mx-auto">
                        <span className="px-4 py-2 bg-blue-500 text-white text-xs font-bold uppercase rounded-full tracking-widest">{article.category}</span>
                        <h1 className="text-2xl md:text-5xl font-black text-white mt-4 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex items-center mt-8 space-x-4 backdrop-blur-md bg-white/10 p-4 rounded-2xl w-fit border border-white/20">

                            <div className="text-white px-3">
                                <p className="text-xs opacity-70">Level</p>
                                <p className="text-sm font-bold uppercase">{article.level}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-5 mb-5 relative z-10">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-900/20 text-slate-700 text-lg leading-relaxed space-y-8">
                    <div className="flex flex-wrap gap-3 border-b border-slate-100 pb-6">
                        {article.tags.map((tag, i) => (
                            <span key={i} className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="whitespace-pre-line"> 
                        {article.content}
                    </div> 
                </div>
            </div>
        </>
    )
}

export default page