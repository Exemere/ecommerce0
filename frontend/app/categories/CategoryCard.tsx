import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  img: string;
}

export default function CategoryCard({ title, img }: Props) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group">
      <Image src={img} alt={title} width={400} height={300} className="object-cover" />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition">
        <h3 className="text-xl font-bold">{title}</h3>
        <Link href={`/categories/${title.toLowerCase()}`} className="mt-2 underline">
          Shop now
        </Link>
      </div>
    </div>
  );
}
