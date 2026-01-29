import articles from "@/data/artilces.json";
import { Article } from "@/types/articles";


//Fonction pour récupérer tous les articles 
export async function getAllArticles(): Promise<Article[]> {

  const data = articles as Article[];

  return data;
}


//Fonction pour récupérer les trois derniers articles 
export async function getLatestThreeArticles(): Promise<Article[]> {
  const data = await getAllArticles();

  if (data) return data.slice(-3);
  else return [];
}

//Fonction de récupération d'un article selon son id 
export async function getArticle(id: number): Promise<Article | []> {
  const data = await getAllArticles();

  if (!data) return [];

  const article = data.find(item => item.id === id);

  if (!article) return [];

  return article;
}

const normalize = (value?: string) =>
value ? decodeURIComponent(value).trim().toLowerCase() : undefined;

//Récupération d'un ensemble d'articles selon une url donnée
export async function getArticlesViaObject(obj: { category?: string, tag?: string, level?: string }): Promise<Article[] | []> {
  const articles = await getAllArticles();

  if (articles.length === 0) return [];
  console.log(obj)
  return articles.filter((article) => {
    if (
      obj.category &&
      normalize(article.category) !== normalize(obj.category)
      // article.category.toLowerCase() !== obj.category.toLowerCase()
    ) {
      return false;
    }


    if (
      obj.level &&
      normalize(article.level) !== normalize(obj.level)
      // article.level.toLowerCase() !== obj.level.toLowerCase()
    ) {
      return false;
    }


    if (obj.tag && !article.tags.includes(obj.tag)) {
      return false;
    }


    return true;
  });

}