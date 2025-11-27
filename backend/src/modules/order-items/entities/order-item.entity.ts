import { Order, Product } from "@prisma/client";

export class OrderItem {
    id: number;
    orderId: number;
    productId: number;
    quantityItem: number;
    price: number;
    createdAt: Date;
    
    order?: Order;
    product?: Product;
}
