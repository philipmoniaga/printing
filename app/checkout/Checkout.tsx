'use client';
import { useSelector } from 'react-redux';
import { CheckoutState } from '@/redux/reducers/checkout/type';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

export default function Checkout() {
  const activeTab = useSelector((state: { checkout: CheckoutState }) => state.checkout.activeTab);
  console.log('activeTab', activeTab);

  const renderPage = () => {
    switch (activeTab) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      default:
        return <div />;
    }
  };

  return <div>{renderPage()}</div>;
}
