// src/Invoice.ts
interface Item {
  name: string;
  price: number;
}

interface Customer {
  id: string;
  name: string;
  email: string;
}

export class Invoice {
  static create(
    customer: Customer,
    items: Item[]
  ): {
    id: string;
    customer: Customer;
    items: Item[];
    total: number;
    createdAt: Date;
  } {
    return {
      id: Math.random().toString(36).substr(2, 9),
      customer,
      items,
      total: items.reduce((sum, item) => sum + item.price, 0),
      createdAt: new Date(),
    };
  }

  static getById(id: string): { id: string; message: string } {
    return { id, message: "Invoice details would be fetched here" };
  }
}
