import { CheckoutState, Action } from './type';

/* Action Types */
export const Types = {
  SET_CHECKOUT_ACTIVE_TAB: 'SET_CHECKOUT_ACTIVE_TAB',
};

const setCheckoutActiveTab = (tab: number) => ({
  type: Types.SET_CHECKOUT_ACTIVE_TAB,
  payload: tab,
});

export const CheckoutAction = {
  setCheckoutActiveTab,
};

const initialState: CheckoutState = {
  activeTab: 0,
};

const Checkout = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_CHECKOUT_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default Checkout;
