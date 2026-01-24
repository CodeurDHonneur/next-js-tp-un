import articles from "@/data/artilces.json";
import { Article } from "@/types/articles";


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