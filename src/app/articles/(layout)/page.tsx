// Importation des composants nécessaires pour la page
import ArticleCardView from '@/components/articles/ArticleCardView'; // Affiche chaque article
import FilterArticles from '@/components/articles/ArticleFiltersBar'; // Barre de filtres permettant de modifier l'URL
import { EmptyArticlesSection } from '@/components/articles/EmptyArticlesSection'; // Affiche un message si aucun article n'est disponible

// Importation de la fonction utilitaire qui récupère les articles et les facets (filtres)
import { getArticlesAndFacets } from '@/utils/articles'

// Composant principal de la page qui récupère et affiche les articles
const ArticlesPage = async () => {

  // Récupération des articles et des facets (filtres) via la fonction utilitaire
  const { articles, facets } = await getArticlesAndFacets({});

  return (
    <>
      {/* Affichage de la barre de filtres avec les facets et aucun filtre actif initialement */}
      <FilterArticles
        facets={facets}          //Passe les options disponibles pour chaque filtre (catégorie, tag, niveau) 
        activeFilters={{}}       //Aucun filtre actif au départ 
      />
      
      {/* Vérification si des articles sont présents */}
      {articles.length > 0 ? (
        // Si des articles sont trouvés, affichage dans une grille responsive
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10'>
          {/* Parcours de la liste des articles pour générer une carte pour chaque article */}
          {articles.map(article => <ArticleCardView article={article} key={article.id} />)}
        </div>
      )
      : (
        // Si aucun article n'est trouvé, affichage d'un message vide ou d'une illustration
        <EmptyArticlesSection />
      )}
    </>
  )
}

export default ArticlesPage;
