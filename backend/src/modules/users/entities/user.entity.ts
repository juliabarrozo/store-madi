import { Address, CartItem, FavoriteProduct, Order, UserRole } from "@prisma/client";

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role?: UserRole;
    ddd: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;

    cartItems?: CartItem[];
    favoriteProducts?: FavoriteProduct[];
    orders?: Order[];
    addresses?: Address[];
}