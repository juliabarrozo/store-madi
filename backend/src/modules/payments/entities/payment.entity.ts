import { Order, PaymentStatus } from "@prisma/client";

export class Payment {
        id: number;
        orderId: number;
        method: string;
        amount: number;
        paidAt: Date;
        paymentStatus: PaymentStatus;
        createdAt: Date;

        order?: Order;
}
