import { notFound } from "next/navigation";

// import { Article } from "@/types/articles";
import ArticleCardView from "@/components/articles/ArticleCardView";
import { getArticlesAndFacets } from "@/utils/articles";
import ArticleFiltersBar from "@/components/articles/ArticleFiltersBar";

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ tag?: string; level?: string }>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
  // 1. On récupère les données des deux sources
  const rawParams = await params;
  const category = decodeURIComponent(rawParams.category);
  
  const sParams = await searchParams;
 
  // 2. On construit l'objet de filtres actifs
  const activeFilters = {
    category: category, // Vient du chemin /articles/category/[category]
    tag: sParams.tag,   // Vient de ?tag=...
    level: sParams.level // Vient de ?level=...
  };

  // 3. Appel à ta méthode "Source de Vérité"
  // Cette méthode doit filtrer tes 70 articles et recalculer les facettes disponibles
  const { articles, facets } = await getArticlesAndFacets(activeFilters);

  // Sécurité : Si la catégorie n'existe pas dans tes données globales
  if (articles.length === 0 && !facets.categories.includes(category)) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">

      {/* On passe les filtres à la barre pour qu'elle sache où elle se trouve */}
      <ArticleFiltersBar facets={facets} activeFilters={activeFilters} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {articles.map(article => <ArticleCardView article={article} key={article.id} />)}
      </div>
    </div>
  );
}