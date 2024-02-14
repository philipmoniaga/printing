'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Paths } from '../../constant/Paths';

export default function CheckoutPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace(`${Paths.CHECKOUT}/1`);
  }, []);

  return <div />;
}
