import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  href?: string;
  tags?: string[];
};

export default function ProjectCard({ title, description, image, href, tags = [] }: Props) {
  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-[16/9]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="opacity-80 mt-1">{description}</p>
        {tags.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="mono rounded-full border px-2 py-1">{t}</span>
            ))}
          </div>
        ) : null}
        {href ? (
          <a className="btn mt-4" href={href} target="_blank" rel="noreferrer">
            <ExternalLink size={16} /> Check Live Site
          </a>
        ) : null}
      </div>
    </article>
  );
}
