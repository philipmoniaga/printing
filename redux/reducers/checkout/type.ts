export interface CheckoutState {
  activeTab: number;
}

export type Action = { type: 'SET_CHECKOUT_ACTIVE_TAB'; payload: number };
