export interface ProductList {
  id: number;
  tab: string;
  plan: ProductPlan[];
}

export interface ProductPlan {
  name: string;
  image: string;
  value: string;
  price: string;
  benefit: ProductBenefit[];
  packageType: ProductPackageType[];
}

export interface ProductBenefit {
  description: string;
}

export interface ProductPackageType {
  name: string;
  image: string;
  isFavorite: boolean;
  price: string;
  description: string;
  printSide: ProductPackagePrintSide[];
}

export interface ProductPackagePrintSide {
  name: string;
  price: string;
}
