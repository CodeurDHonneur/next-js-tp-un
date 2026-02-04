// Importation des composants nécessaires pour la page
import ArticleCardView from '@/components/articles/ArticleCardView'; // Affiche chaque article
import FilterArticles from '@/components/articles/ArticleFiltersBar'; // Barre de filtres permettant de modifier l'URL
import { EmptyArticlesSection } from '@/components/articles/EmptyArticlesSection'; // Affiche un message si aucun article n'est disponible

// Importation de la fonction utilitaire qui récupère les articles et les facets (filtres)
import { getArticlesAndFacets } from '@/utils/articles'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}


// Composant principal de la page qui récupère et affiche les articles
const ArticlesPage = async ({ searchParams }: Props) => {
  // 1. On attend la résolution des paramètres de recherche
  const sParams = await searchParams;
  console.log("paramètres de route", sParams);

    // 2. On construit l'objet activeFilters proprement
  // Contrairement aux Paths, ici on n'a plus besoin de "parseFilters" complexe 
  // car les clés sont déjà nommées dans l'URL !

  const activeFilters = {
    category: typeof sParams.category === 'string' ? sParams.category : undefined,
    tag: typeof sParams.tag === 'string' ? sParams.tag : undefined,
    level: typeof sParams.level === 'string' ? sParams.level : undefined,
  }


  // Récupération des articles et des facets (filtres) via la fonction utilitaire
  const { articles, facets } = await getArticlesAndFacets(activeFilters);

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
