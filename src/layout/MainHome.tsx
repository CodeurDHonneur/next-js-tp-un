import { ArticleCard } from "@/components/ArticleCard";
import { EmptyArticlesSection } from "@/components/EmptyArticlesSection";
import { getLatestThreeArticles } from "@/utils/articles.util";

const MainHome = async () => {
  const lastArticles = await getLatestThreeArticles();

  return (
    <>
      <section className="mt-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            <strong className="text-blue-600">Articles de programmation</strong>{" "}
            pour apprendre et comprendre
          </h1>

          <p className="mt-3 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez les ressources les plus pointues du développement web,
            sélectionnées par la communauté H5 TechRadar.
          </p>
        </div>
      </section>

      {lastArticles.length > 0 ? (
        <section className="mt-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lastArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <EmptyArticlesSection />
      )}
      <section className="mt-6 mb-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl font-semibold text-slate-700 leading-relaxed italic">
            « Explorer, comprendre et apprendre la programmation »
          </p>
        </div>
      </section>
    </>
  );
};

export default MainHome;
