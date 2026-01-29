// Liste des clés autorisées dans l'URL pour le filtrage des articles
const allowedKeys = ["category", "tag", "level"];

// Définition du type `Filters` qui représente un ensemble de filtres potentiels pour les articles
type Filters = {
    category?: string;  // Filtre sur la catégorie de l'article
    tag?: string;       // Filtre sur le tag de l'article
    level?: string;     // Filtre sur le niveau de l'article (ex: débutant, expert)
}

// Fonction principale qui parse un tableau de filtres sous forme de chaîne de caractères dans l'URL
export default function parseFilters(filters?: string[]): Filters | null {
    // Si aucun filtre n'est passé (undefined ou null), retourne null
    if (!filters) return null;

    const length = filters.length;

    // Vérifie si le nombre d'éléments dans le tableau `filters` est impair
    // Si c'est le cas, cela signifie qu'il y a un filtre sans valeur, ce qui est invalide
    if (filters.length % 2 !== 0) return null;

    // Objet qui va contenir les filtres valides sous forme de clé-valeur
    const result: Filters = {};

    // Parcourt le tableau `filters` deux éléments à la fois (clé et valeur)
    for (let i = 0; i < length; i += 2) {
        const key = filters[i];        // Clé (ex: "category", "tag", "level")
        const value = filters[i + 1];  // Valeur associée à la clé (ex: "nextjs", "routing", "beginner")

        // Si la clé n'est pas dans la liste des clés autorisées, retourne null
        // Cela empêche d'ajouter des filtres non valides dans l'URL
        if (!allowedKeys.includes(key)) return null;

        // Ajoute le filtre dans l'objet `result` si la clé est autorisée
        result[key as keyof Filters] = value;
    }

    // Retourne l'objet `result` qui contient les filtres valides sous forme de clé-valeur
    return result;
}
