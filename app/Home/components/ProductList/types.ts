export interface ProductList {
  tab: string;
  plan: ProductPlan[];
}

export interface ProductPlan {
  name: string;
  image: string;
  value: string;
  price: string;
  benefit: ProductBenefit[];
}

export interface ProductBenefit {
  description: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
