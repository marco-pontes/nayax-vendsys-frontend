// src/mockData.ts

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
