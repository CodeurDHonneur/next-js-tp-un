import { Article } from "./articles";

export interface Facets {
 
        category: string[]; //["Développement"]
        tags: string[]; //['typescript', 'javascript', 'web', "react", "frontend", "architecture", "html", "a11y"...]
        levels: string[] //["advanced", "beginner", "intermediate"]
}
export interface getArticlesAndFacetsType {
    articles: Article[];
    facets: Facets
}
