import { PaymentStatus } from "@prisma/client";

export class Payment {
    
        id: number;
        orderId: number;
        method: String;
        amount: number;
        paidAt: Date;
        paymentStatus: PaymentStatus;
        createdAt: Date;
}
