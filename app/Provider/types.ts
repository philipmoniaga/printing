import { ProductList, ProductPackageType, ProductPlan } from '@/pages/api/product/types';

export type FieldValues = {
  activeStep: number;
  productSelected?: ProductList | null;
  planSelected?: ProductPlan | null;
  packageSelected?: ProductPackageType | null;
  printSide: string;
  printCorner: 'standard' | 'round';
  totalPrice: number;
  countBox: number;
  file?: null | any;
  fileUrl?: string;
  linkUrl?: string;
  sendByEmail: boolean;
  email?: string;
  recipient: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  address: {
    city: string;
    zipCode: string;
    fullAddress: string;
    logisticOption: 'regular' | 'express';
  };
};
