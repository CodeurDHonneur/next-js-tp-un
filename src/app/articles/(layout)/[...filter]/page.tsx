import { getArticlesViaObject } from '@/utils/articles';
import constructValideObj from '@/utils/construcValidObject';
import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
  params: Promise<{
    filter: string[]
  }>
}
async function page(props: Props) {
 
  const params = await props.params;
 
  // const filter = params.filter;
  // const length = filter.length;
  // const paires = [];

  // if(length == 0 || (length % 2 != 0)){
  //   notFound();
  // }

  // for(let i = 0; i < (length - 1); i++){

  //   if(i % 2 == 0) paires.push([filter[i], filter[i+1]])

  //   // const array = [filter[i], filter[i+1]];
  //   // paires.push(array);
  // }

  const obj = constructValideObj(params);

  if(!obj){
    notFound();
  }

  const articles = await getArticlesViaObject(obj);
  console.log(articles);

  /***
   * `/articles/filter/category/nextjs`
   * `/articles/filter/tag/routing`
   * `/articles/filter/category/nextjs/tag/routing`
   */

  return (
    <>
      Bienvenue sur la page de filtrage !
    </>
  )
}

export default page