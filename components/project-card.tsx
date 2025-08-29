import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  /** Filename in /public/projects OR a full path starting with /projects */
  image: string;
  href?: string;
  tags?: string[];
};

function projectSrc(image: string) {
  // Accept "myapp.jpg" or "/projects/myapp.jpg"
  return image.startsWith("/projects/") ? image : `/projects/${image}`;
}

export default function ProjectCard({
  title,
  description,
  image,
  href,
  tags = [],
}: Props) {
  const src = projectSrc(image);

  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-[16/9]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="opacity-80 mt-1">{description}</p>

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="mono rounded-full border px-2 py-1">
                {t}
              </span>
            ))}
          </div>
        )}

        {href && (
          <a className="btn mt-4" href={href} target="_blank" rel="noreferrer">
            <ExternalLink size={16} /> Check Live Site
          </a>
        )}
      </div>
    </article>
  );
}
