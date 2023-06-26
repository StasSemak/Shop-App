export async function getCategories() {
    const res = await fetch(`${process.env.GLOBAL_SERVER}/api/categories`);
    const categories = await res.json();
    return Object.values(categories) as CategoryItem[];
}

export async function getCategory(id: number) {
    const res = await fetch(`${process.env.GLOBAL_SERVER}/api/categories/${id}`);
    const category = await res.json();
    return category as CategoryItem;
}

export async function getCategoryBySearchInput(input: string) {
    const res = await fetch(`https://localhost:7187/api/categories/search`, 
        {
            headers: {
                'content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(input)
        }
    );
    const categories = await res.json();
    return Object.values(categories) as CategoryItem[];
}

export interface CategoryItem {
    id: number;
    name: string;
    description: string;
    image: string;
}