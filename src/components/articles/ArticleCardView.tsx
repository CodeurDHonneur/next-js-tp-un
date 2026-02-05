"use client"

import { IMAGES } from '@/lib/images'
import { getRandomItem } from '@/utils/random'
import { Article } from '@/types/articles'
import CustomImage from '@/ui/Image'
import troncateStr from '@/utils/troncateString'
import Link from 'next/link'

import React from 'react'

type ArticleCardViewProps = {
  article: Article;
};


function ArticleCardView({ article }: ArticleCardViewProps) {
  const [image, setImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    setImage(getRandomItem(IMAGES));
  }, []);


  return (
    <div className='group flex flex-col bg-white rounded-4xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer'>
      <div className='relative h-40 w-full overflow-hidden'>
        {image && <CustomImage src={image} alt={article.title} className="h-full w-full" />}

        <span className='absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg'>
          {article.category}
        </span>
      </div>

      <div className='p-6 flex flex-col grow'>
        <div className='flex items-center gap-2 text-[10px] font-medium text-gray-400 mb-3 uppercase tracking-wider'>
            <span>{article.level}</span>
            <span>•</span>
          <span>5 min de lecture</span>
        </div>

        <h3 className='text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors'>
          {article.title}
        </h3>

        <p className='text-gray-500 text-sm leading-relaxed mb-6'>
          {troncateStr(article.content)}
        </p>

        <div className='mt-auto'>
          <Link 
          href={`/articles/post/${article.id}`}
          className='bg-[#FFE57F] hover:bg-[#FFD54F] text-[#5D4037] text-xs font-bold py-2 px-6 rounded-xl transition-colors shadow-sm'
          >
            Lire l&pos;article 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCardView