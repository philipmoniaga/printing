'use client';
import { useCallback, useEffect, useState } from 'react';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import { useParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { FieldValues } from '@/app/Provider/types';
import { ProductList } from '@/pages/api/product/types';
import { axiosClientHandler } from '@/utils/axios';

const CHECKOUT_PAGE = {
  0: Step1,
  1: Step2,
  2: Step3,
  3: Step4,
} as Record<number, any>;

export default function Checkout() {
  const params = useParams();
  const { setValue, watch, resetField } = useFormContext<FieldValues>();
  const { planSelected, productSelected, activeStep } = watch();

  const [listProduct, setListProduct] = useState<ProductList[]>([]);

  const getProduct = useCallback(async () => {
    try {
      const getProductList = await axiosClientHandler.get(`/api/product`);
      const { data } = getProductList;
      setListProduct(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  useEffect(() => {
    setValue('activeStep', 0);
    resetField('printCorner');
    resetField('printSide');
    resetField('countBox');
    resetField('linkUrl');
    resetField('sendByEmail');
    resetField('recipient');
    resetField('address');
    resetField('sendByEmail');
    resetField('email');
    setValue('file', null);

    const selectedProduct = listProduct.find((data) => data.id === parseInt(params?.id as string));

    if (selectedProduct) {
      setValue('productSelected', selectedProduct);
    } else {
      setValue('productSelected', listProduct[0]);
    }
  }, [params?.id, setValue, resetField, listProduct]);

  useEffect(() => {
    if (!planSelected && productSelected) {
      setValue('planSelected', productSelected?.plan[0]);
      setValue('packageSelected', productSelected?.plan[0].packageType[0]);
    }
  }, [productSelected, planSelected, setValue]);

  const Content = CHECKOUT_PAGE[activeStep];

  return (
    <div>
      <Content />
    </div>
  );
}
