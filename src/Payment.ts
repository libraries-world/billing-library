export class Payment {
  static process(
    invoice: { id: string },
    amount: number
  ): {
    success: boolean;
    invoiceId: string;
    amountPaid: number;
    timestamp: Date;
  } {
    // Implementation for processing a payment
    return {
      success: true,
      invoiceId: invoice.id,
      amountPaid: amount,
      timestamp: new Date(),
    };
  }

  static refund(
    paymentId: string,
    amount: number
  ): {
    success: boolean;
    paymentId: string;
    amountRefunded: number;
    timestamp: Date;
  } {
    // Implementation for refunding a payment
    return {
      success: true,
      paymentId,
      amountRefunded: amount,
      timestamp: new Date(),
    };
  }
}
