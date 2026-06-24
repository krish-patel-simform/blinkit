import { useEffect, useState } from "react";
import type { Category } from "../types";
import { CONFIG } from "../consts/config";

type RawCategory = {
  image_title: string;
  image: string;
  id: string;
};

function useProductCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`${CONFIG.JSON_CATEGORIES}`);
      const jsonData = await response.json();

      if (!response.ok) throw new Error("Can not get the categories");

      const filterData: Category[] = jsonData.map((category: RawCategory) => {
        return {
          name: category.image_title,
          imageUrl: category.image,
          id: category.id,
        };
      });
      setCategories(filterData);
    }

    fetchCategories();
  }, []);

  return categories;
}

export { useProductCategory };
