'use server'

import CategoryCard from "@/components/categories/categoryCard";
import Link from "next/link";

async function getCategories() {
    const res = await fetch(`${process.env.GLOBAL_SERVER}/api/categories`);
    return res.json(); 
}

export default async function Home() {
  const categories = await getCategories();
  const arr = Object.values(categories);

  return (
    <div className="mt-3">
      <div className="flex flex-col items-center w-11/12 mx-auto gap-2">
        <div className="flex flex-wrap gap-y-4 mx-auto justify-around">
          {arr.map((item:any, index) => (
            <Link key={index} href={`/categories/${item.id}`}>
              <CategoryCard name={item.name} imagePath={item.image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
