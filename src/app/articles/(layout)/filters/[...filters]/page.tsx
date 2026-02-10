import ArticleCardView from '@/components/articles/ArticleCardView';
import ArticleFiltersBar from '@/components/articles/ArticleFiltersBar'
import { getArticlesAndFacets } from '@/utils/articles';
import parseFilters from '@/utils/parseFilters';
import { notFound } from 'next/navigation';
import React, { act } from 'react'

interface Props {
  params: Promise<{
    filters: string[]
  }>
}
async function FilterPage(props: Props) {
  //const activeFilters = (await params).filters; valable quand on a FilterPage({params} : Props) 

  const { filters: getParamsURL } = await props.params; //Récupération des valeurs de filtrage passées dans l'url (tableau) 

  //Transforamtion du tableau en objet pour faciliter le filter
  const activeFilters = parseFilters(getParamsURL);

  console.log(activeFilters);

  if (!activeFilters) {
    notFound();
  }

  const { articles, facets } = await getArticlesAndFacets(activeFilters);

  // console.log(articles, facets);

  return (
    <>
      <ArticleFiltersBar activeFilters={activeFilters} facets={facets} />
      {
        articles.length &&
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10'>
          {articles.map(article => <ArticleCardView article={article} key={article.id} />)}
        </div>
      }
    </>
  )
}

export default FilterPage