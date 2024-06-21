export type Product = {
  id?: number;
  name?: string;
  price?: number;
  variant?: string;
  description?: string;
  image?: string;
  rating?: number;
  ratingCount?: number;
  amount?: number;
  loved?: boolean;
  nutrition_types?: NutritionType[];
};

export type NutritionType = {
  id?: number;
  name?: string;
};
