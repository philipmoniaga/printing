'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Paths } from '../constant/Paths';

export default function CheckoutPage() {
  const router = useRouter();
  useEffect(() => {
    router.push(`${Paths.CHECKOUT}/0`);
  }, []);

  return <div />;
}
