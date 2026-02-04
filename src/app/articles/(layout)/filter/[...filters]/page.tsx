// Importation des composants nécessaires
import ArticleCardView from '@/components/articles/ArticleCardView'; // Composant pour afficher chaque article sous forme de carte
import ArticleFiltersBar from '@/components/articles/ArticleFiltersBar'; // Barre de filtres permettant de sélectionner des critères
import { Article } from '@/types/articles'; // Définition du type d'article pour la sécurité de type
import { getArticlesAndFacets} from '@/utils/articles'; // Fonction pour récupérer les articles et les options de filtres (facets)
import parseFilters from '@/utils/parseFilters'; // Fonction pour parser les filtres de l'URL
import { notFound } from 'next/navigation'; // Fonction de redirection vers une page 404 si les filtres sont invalides
import React from 'react'; // Import de React, nécessaire dans les composants Next.js

// Interface définissant les paramètres attendus par le composant
interface Props {
  params: Promise<{
    filters: string[]; // Tableau de filtres extraits de l'URL (ex: ["category", "nextjs", "tag", "routing"])
  }>
}

// Composant de la page de filtrage
async function FilterPage({ params }: Props) {
  
  // Résolution de la promesse 'params' pour récupérer les filtres de l'URL
  const activeFilters = parseFilters((await params).filters)

  // Si les filtres sont invalides ou mal formés, rediriger vers la page 404
  if (!activeFilters) {
    notFound()  // Next.js redirige l'utilisateur vers une page "Not Found" (404)
  }
  
  // Récupération des articles filtrés et des options de filtrage (facets) en fonction des filtres actifs
  const { articles, facets } = await getArticlesAndFacets(activeFilters)

  // Début du rendu du composant
  return (
    <>
      {/* Affichage de la barre de filtres avec les options de filtrage (facets) et les filtres actifs */}
      <ArticleFiltersBar
        facets={facets}  // Les différentes options disponibles pour les filtres (par exemple, catégories, tags, niveaux)
        activeFilters={activeFilters}  // Les filtres actifs, qui sont utilisés pour ajuster les articles à afficher
      />
      
      {/* Vérification si des articles ont été récupérés */}
      {articles.length > 0 && 
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10'>
          {/* Pour chaque article récupéré, afficher une carte d'article avec les informations de l'article */}
          {articles.map((article: Article) => (
            <ArticleCardView article={article} key={article.id} />
          ))}
        </div>
      }
      {/* Si aucun article n'est trouvé, tu pourrais afficher un message (ex: "Aucun article trouvé avec ces filtres") */}
    </>
  )
}

// Export du composant pour l'utiliser dans l'application
export default FilterPage;
