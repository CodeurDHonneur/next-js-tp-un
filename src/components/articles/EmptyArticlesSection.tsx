export function EmptyArticlesSection() {
  return (
    <section className="mt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Articles & ressources sur la programmation
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Ce site est dédié à la <strong>programmation</strong>, au{" "}
          <strong>développement web</strong> et aux bonnes pratiques
          modernes. Vous y trouverez prochainement des articles sur
          JavaScript, les frameworks frontend comme React et Next.js,
          ainsi que des sujets backend et fullstack.
        </p>

        <p className="mt-4 text-gray-600">
          Tutoriels pas à pas, retours d’expérience, veille technique et
          concepts fondamentaux : l’objectif est de proposer un contenu
          clair, pédagogique et orienté pratique pour les développeurs
          de tous niveaux.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            JavaScript
          </span>
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            Développement Web
          </span>
          <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
            React & Next.js
          </span>
          <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
            Bonnes pratiques
          </span>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Les premiers articles arrivent très bientôt 🚀
        </p>
      </div>
    </section>
  );
}