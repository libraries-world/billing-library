// src/Customer.js
class Customer {
  static create(name, email) {
    // Implementation for creating a customer
    return {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      createdAt: new Date(),
    };
  }

  static getById(id) {
    // Implementation for retrieving a customer
    // This is a placeholder. In a real scenario, you'd fetch from a database
    return { id, message: "Customer details would be fetched here" };
  }
}

module.exports = Customer;
