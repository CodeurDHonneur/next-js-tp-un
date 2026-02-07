import articles from "@/data/artilces.json";
import { Article } from "@/types/articles";
import { Filters } from "@/types/facets";
import { getArticlesAndFacetsType } from "@/types/getArticlesAndFacets";


//Fonction pour récupérer tous les articles 
export async function getAllArticles(): Promise<Article[]>{

    const data = articles as Article[];

    return data;
}


//Fonction pour récupérer les trois derniers articles 
export async function getLatestThreeArticles(): Promise<Article[]> {
    const data = await getAllArticles();

    if(data) return data.slice(-3);
    else return [];
}

//Fonction de récupération d'un article selon son id 
export async function getArticle(id: string): Promise<Article | []>{
  const data = await getAllArticles();

  if(!data) return [];
  
  const article = data.find(item => item.id === parseInt(id));

  if(!article) return [];

  return article;
}


//Récupération des articles en fonction des valeurs passées dans l'URL
export async function fetchArticlesWithFilters(obj: Filters, str?: string): Promise<Article[] | []> {


    const getArticles = await getAllArticles();

    if(!getArticles) return [];
    
    if(str === "articles") return getArticles;

    // logique 
    const filteredData = getArticles.filter(article => {
      
        for(const key in obj){
            console.log(key);
            const value = obj[key as keyof Filters];
            
            if(!value || article[key as keyof Article] !== value) return false;
            else return true;
        }
    });

    return filteredData;
}



export async function getArticlesAndFacets(filters: Filters, str?: string): Promise <getArticlesAndFacetsType> {
    const articles = await fetchArticlesWithFilters(filters, str);
     
    // console.log(articles.length);
    const tempArray: string[] = [];
    articles.forEach(article => article.tags.forEach(tag => {
        if(!tempArray.includes(tag)) tempArray.push(tag)
    }));

    // console.log(...new Set(...articles.map(article => article.tags)));
    const facets = {
        category: [...new Set(articles.map(article => article.category))],
        tags: tempArray,
        levels: [...new Set(articles.map(article => article.level))]
    }

    return {articles, facets}
} 