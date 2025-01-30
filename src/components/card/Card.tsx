import Image from "next/image";
import Link from "next/link";


interface ICardProps {
  href: string;
  title: string;
  image: string;
  description: string;
};

export const Card = ({href, title, description, image}: ICardProps) => {
    return (
        <Link href={href} className="hover:no-underline">
        <article className="flex flex-col gap-2 p-2 sm:hover:bg-primary">
          <Image
            alt={title}
            src={image}
            className="rounded-2xl object-cover aspect-video"
            width={1000}
            height={0}
          />
          <h4 className="font-extrabold text-lg">{title}</h4>
          <p className="line-clamp-3">{description}</p>
        </article>
      </Link>
    );
}