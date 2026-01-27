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
/**
 * const ArticleCard = ({ article }) => {
  return (
    <div className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      
   
      <div className="relative h-52 w-full overflow-hidden">
        <img 
          src={article.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
    
        <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg">
          {article.category}
        </span>
      </div>

      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-[10px] font-medium text-gray-400 mb-3 uppercase tracking-wider">
          <span>{article.level}</span>
          <span>•</span>
          <span>5 min de lecture</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6">
          {article.content}
        </p>

      
        <div className="mt-auto">
          <button className="bg-[#FFE57F] hover:bg-[#FFD54F] text-[#5D4037] text-xs font-bold py-2 px-6 rounded-xl transition-colors shadow-sm">
            Lire l'article
          </button>
        </div>
      </div>
    </div>
  );
};


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">

  <ArticleCard article={article1} />
  <ArticleCard article={article2} />
  <ArticleCard article={article3} />
</div>
 */