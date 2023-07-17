import CategoryCard from "@/components/categories/categoryCard";
import { getCategories } from "@/data/categories";
import Link from "next/link";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="mt-3">
      <div className="flex flex-col items-center w-11/12 mx-auto gap-2">
        <div className="flex flex-wrap gap-y-4 mx-auto justify-around lg:gap-x-4">
          {categories.map((item, index) => (
            <Link key={index} href={`/categories/${item.id}`}>
              <CategoryCard name={item.name} imagePath={item.image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
