export type Account = {
  id: string;
  name: string;
};

export type NProvider = {
  id: number;
  name: string;
  config: string;
};

export type NLocation = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type ProductContainer = {
  id: number;
  serial: string;
  category: string;
  model: string;
  active: boolean;
  isCash: boolean;
};

export type MarketSummary = {
  id: number;
  accountName: string;
  active: boolean;
  providerName: string;
};

export type MarketDetails = {
  id: number;
  mngmtNumber: number;
  creditCardFee: number;
  creditCardFeePercentage: number;
  applyFee: boolean;
  hasPriceTags: boolean;
  lastMarketPush: Date | null;
  lastProductPush: Date | null;
  lastSale: Date | null;
  productUpdatesInQueue: Partial<Product>[];
  assets: ProductContainer[];
};
