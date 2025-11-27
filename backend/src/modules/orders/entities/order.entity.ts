import { OrderItem, OrderStatus, Payment, User } from "@prisma/client";

export class Order {
        id: number;
        total: number;
        orderStatus: OrderStatus
        userId: number;

        items?: OrderItem[];
        payment?: Payment;
        user?: User;
}
