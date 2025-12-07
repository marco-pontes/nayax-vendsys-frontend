// src/mockData.ts

import type {
  Account,
  MarketDetails,
  MarketSummary,
  NLocation,
  NProvider,
} from "@/types/types.tsx";

export interface Order {
  OrderID: number;
  CustomerName: string;
  Freight: number;
  ShipCountry: string;
}

export const orderDetails: Order[] = [
  {
    OrderID: 10248,
    CustomerName: "VINET",
    Freight: 32.38,
    ShipCountry: "France",
  },
  {
    OrderID: 10249,
    CustomerName: "TOMSP",
    Freight: 11.61,
    ShipCountry: "Germany",
  },
  {
    OrderID: 10250,
    CustomerName: "HANAR",
    Freight: 65.83,
    ShipCountry: "Brazil",
  },
  {
    OrderID: 10251,
    CustomerName: "VICTE",
    Freight: 41.34,
    ShipCountry: "France",
  },
  {
    OrderID: 10252,
    CustomerName: "SUPRD",
    Freight: 51.3,
    ShipCountry: "Belgium",
  },
];

export const providers: NProvider[] = [
  {
    id: 1,
    name: "My Market",
    config: "",
  },
  {
    id: 2,
    name: "Vendsys Test",
    config: "",
  },
];

export const locations: NLocation[] = [
  {
    id: 1,
    name: "Mall",
  },
  {
    id: 2,
    name: "Market",
  },
];

export const accounts: Account[] = [
  {
    id: "VFS0001",
    name: "Athens First",
  },
  {
    id: "VFS0002",
    name: "1 Styline Plant",
  },
];

export const markets: MarketSummary[] = [
  {
    id: 1,
    accountName: accounts[0].name,
    active: true,
    providerName: providers[0].name,
  },
  {
    id: 2,
    accountName: accounts[1].name,
    active: false,
    providerName: providers[1].name,
  },
];

export const marketDetails: Record<number, MarketDetails> = {
  1: {
    id: 1,
    mngmtNumber: 0,
    creditCardFee: 0,
    creditCardFeePercentage: 0,
    applyFee: false,
    hasPriceTags: false,
    lastMarketPush: null,
    lastProductPush: null,
    lastSale: null,
    productUpdatesInQueue: [],
    assets: [],
  },
  2: {
    id: 2,
    mngmtNumber: 0,
    creditCardFee: 0,
    creditCardFeePercentage: 0,
    applyFee: false,
    hasPriceTags: false,
    lastMarketPush: null,
    lastProductPush: null,
    lastSale: null,
    productUpdatesInQueue: [],
    assets: [],
  },
};
