import { Product, User } from "@prisma/client";

export class CartItem {
    id: number;
    idUser: number;
    idProduct: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;

    user?: User;
    product?: Product;
}
