import ArticleCardView from '@/components/articles/ArticleCardView';
import ArticleFiltersBar from '@/components/articles/ArticleFiltersBar';
import { EmptyArticlesSection } from '@/components/articles/EmptyArticlesSection'


import { getArticlesAndFacets } from '@/utils/articles'

const ArticlesPage = async () => {


  // const fetchArticles = await getAllArticles();
  // const {articles, facets} = await getArticlesAndFacets({}, "articles");
  const {articles, facets} = await getArticlesAndFacets({});

  // const firstElement = fetchArticles[0];

  

  return (
    <>
      <ArticleFiltersBar activeFilters={{}} facets={facets}/>
      {articles.length > 0 ?
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10'>
          {articles.map(article => <ArticleCardView article={article} key={article.id}/>)}

        </div>

        : <EmptyArticlesSection />}
    </>
  )
}

export default ArticlesPage