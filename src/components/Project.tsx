import Image, { StaticImageData } from "next/image"

interface ProjectProps {
  title: string
  description: string
  url?: string
  image: string | StaticImageData
}

const ProjectImage = ({
  image,
  title,
}: {
  image: string | StaticImageData
  title: string
}) => {
  return (
    <Image
      width={520}
      height={390}
      className="aspect-[4/3]"
      src={image}
      alt={`${title} screenshot`}
    />
  )
}

export const Project = ({ title, description, url, image }: ProjectProps) => {
  return (
    <div className="flex flex-col gap-3">
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ProjectImage image={image} title={title} />
          <span className="sr-only">Visit {title} site</span>
        </a>
      )}

      {!url && <ProjectImage image={image} title={title} />}

      <figcaption className="flex flex-col gap-2">
        <h3 className="text-teal font-black font-serif text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink transition-colors hover:text-pink-dark underline text-sm"
          >
            Visit Site
          </a>
        )}
      </figcaption>
    </div>
  )
}
