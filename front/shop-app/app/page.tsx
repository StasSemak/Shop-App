import CategoryCard from "@/components/categories/categoryCard";
import { getCategories } from "@/data/categories";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop App - Home",
  description: "Homepage of Shop App"
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="mt-3">
      <div className="flex flex-col items-center mx-auto gap-2">
        <div className="flex flex-wrap gap-y-4 mx-auto justify-around gap-4">
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
