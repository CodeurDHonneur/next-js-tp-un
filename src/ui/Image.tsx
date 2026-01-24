import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string; // On utilise className pour Tailwind
}

export default function CustomImage({ src, alt, className }: Props) {
  return (
    <div className={className} style={{ position: "relative" }}>
      <Image
        src={src}
        alt={alt}
        fill // Remplace width et height pour remplir le parent
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
      />
    </div>
  );
}
