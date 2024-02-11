import { ProductList, ProductPackageType, ProductPlan } from '../constant/Product/types';

export type FieldValues = {
  activeStep: number;
  productSelected: ProductList | null;
  planSelected: ProductPlan | null;
  packageSelected: ProductPackageType | null;
  printSide: string;
  printCorner: 'standard' | 'corner';
  countBox: number;
  file: null | HTMLInputElement;
  linkUrl: string;
  sendByEmail: boolean;
  email: string;
};
