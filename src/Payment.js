// src/Payment.js
class Payment {
  static process(invoice, amount) {
    // Implementation for processing a payment
    return {
      success: true,
      invoiceId: invoice.id,
      amountPaid: amount,
      timestamp: new Date(),
    };
  }

  static refund(paymentId, amount) {
    // Implementation for refunding a payment
    return {
      success: true,
      paymentId,
      amountRefunded: amount,
      timestamp: new Date(),
    };
  }
}

module.exports = Payment;
