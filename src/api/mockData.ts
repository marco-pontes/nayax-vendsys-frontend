// src/mockData.ts

import type {
  Account,
  MarketDetails,
  MarketSummary,
  MarketLocation,
  MarketProvider,
  Product,
  ProductContainer,
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

export const marketProviders: MarketProvider[] = [
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
  {
    id: 3,
    name: "Test Provider",
    config: "",
  },
];

export const marketLocations: MarketLocation[] = [
  {
    id: 1,
    name: "Mall",
  },
  {
    id: 2,
    name: "Market",
  },
  {
    id: 3,
    name: "Store",
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
  {
    id: "VFS0003",
    name: "Test Account 1",
  },
];

export const markets: MarketSummary[] = [
  {
    id: 1,
    accountName: accounts[0].name,
    active: true,
    providerName: marketProviders[0].name,
  },
  {
    id: 2,
    accountName: accounts[1].name,
    active: false,
    providerName: marketProviders[1].name,
  },
  {
    id: 3,
    accountName: accounts[2].name,
    active: false,
    providerName: marketProviders[2].name,
  },
];

const productUpdates: Partial<Product>[] = [{ id: 0, name: "Product 1" }];
const productContainers: ProductContainer[] = [
  {
    id: 0,
    serial: "123AAA123",
    category: "Beverages Cooler",
    model: "Beverages Cooler",
    active: true,
    isCash: false,
  },
  {
    id: 0,
    serial: "456BBB456",
    category: "Generic Container 1",
    model: "Generic Container 1",
    active: true,
    isCash: false,
  },
  {
    id: 0,
    serial: "456BBB456",
    category: "Generic Container 2",
    model: "Generic Container 2",
    active: false,
    isCash: true,
  },
];
export const marketDetails: Record<number, MarketDetails> = {
  1: {
    id: 1,
    active: true,
    account: accounts[0],
    location: marketLocations[0],
    provider: marketProviders[0],
    mgmtNumber: 0,
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
    active: false,
    account: accounts[1],
    location: marketLocations[1],
    provider: marketProviders[1],
    mgmtNumber: 0,
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
  3: {
    id: 3,
    active: false,
    account: accounts[2],
    location: marketLocations[2],
    provider: marketProviders[2],
    mgmtNumber: 1121212,
    creditCardFee: 3,
    creditCardFeePercentage: 4,
    applyFee: true,
    hasPriceTags: true,
    lastMarketPush: new Date(),
    lastProductPush: new Date(),
    lastSale: new Date(),
    productUpdatesInQueue: productUpdates,
    assets: productContainers,
  },
};
