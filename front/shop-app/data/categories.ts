export async function getCategories() {
    const res = await fetch(`http://shop-next-api.somee.com/api/categories`);
    const categories = await res.json();
    return categories as CategoryItem[];
}

export async function getCategory(id: number) {
    const res = await fetch(`http://shop-next-api.somee.com/api/categories/${id}`);
    const category = await res.json();
    return category as CategoryItem;
}

export async function getCategoryBySearchInput(input: string) {
    const res = await fetch(`http://shop-next-api.somee.com/api/categories/search`, 
        {
            headers: {
                'content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(input)
        }
    );
    const categories = await res.json();
    return categories as CategoryItem[];
}

export async function getCategoryIdByName(name: string) {
    const res = await fetch(`http://shop-next-api.somee.com/api/categories/id/${name}`);
    const id = await res.json();
    return id as number;
}

export interface CategoryItem {
    id: number;
    name: string;
    description: string;
    image: string;
}