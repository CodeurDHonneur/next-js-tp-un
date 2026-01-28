import ArticleCardView from '@/components/articles/ArticleCardView';
import { EmptyArticlesSection } from '@/components/articles/EmptyArticlesSection'


import { getAllArticles } from '@/utils/articles'

const ArticlesPage = async () => {


  const fetchArticles = await getAllArticles();

  // const firstElement = fetchArticles[0];



  return (
    <>
     

      {fetchArticles.length > 0 ?
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10'>
          {fetchArticles.map(article => <ArticleCardView article={article} key={article.id}/>)}

        </div>

        : <EmptyArticlesSection />}
    </>
  )
}

export default ArticlesPage