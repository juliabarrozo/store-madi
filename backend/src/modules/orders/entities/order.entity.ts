import { OrderStatus } from "@prisma/client";

export class Order {
        id: number;
        total: number;
        orderStatus: OrderStatus
        userId: number;
}
