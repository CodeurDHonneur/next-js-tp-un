import Image from 'next/image'

interface Props {
    src: string;
    alt: string;
    className?: string; // On utilise className pour Tailwind
}

export default function CustomImage({ src, alt, className }: Props) {
    return (
        <div className={className} style={{ position: 'relative' }}> 
            <Image
                src={src}
                alt={alt}
                fill // Remplace width et height pour remplir le parent
                className="object-cover" // Pour garder le ratio sans déformer
            />
        </div>
    )
}