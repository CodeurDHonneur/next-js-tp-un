import ArticleCardView from '@/components/articles/ArticleCardView';
import ArticleFiltersBar from '@/components/articles/ArticleFiltersBar';
import { EmptyArticlesSection } from '@/components/articles/EmptyArticlesSection'


import { getAllArticles } from '@/utils/articles'

const ArticlesPage = async () => {


  const fetchArticles = await getAllArticles();

  // const firstElement = fetchArticles[0];



  return (
    <>
      <h2 className='text-4xl md:text-5xl font-extrabold text-blue-600 tracking-tight text-center mt-6'>Exploration technique</h2>
      <p className='font-semibold text-2xl text-center'>L'univers du développement vous ouvre ses portes</p>
      
      {fetchArticles.length > 0 ?
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10'>
          {fetchArticles.map(article => <ArticleCardView article={article} key={article.id}/>)}

        </div>

        : <EmptyArticlesSection />}
    </>
  )
}

export default ArticlesPage