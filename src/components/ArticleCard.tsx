"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { IMAGES } from "@/lib/images";
import { getRandomItem } from "@/lib/random";
import { Article } from "@/types/articles";
import CustomImage from "@/ui/Image";

type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    setImage(getRandomItem(IMAGES));
  }, []);

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 cursor-pointer h-64">
      <div className="relative h-64 w-full">
        {image && <CustomImage src={image} alt={article.title} className="h-full w-full"/>}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white">
        <span className="text-xs font-semibold uppercase bg-blue-600 px-2 py-1 rounded-full">
          {article.category}
        </span>

        <Link
          href={`/articles/${article.id}`}
          className="mt-2 block text-xl font-bold hover:underline"
        >
          {article.title}
        </Link>
      </div>
    </div>
  );
};
