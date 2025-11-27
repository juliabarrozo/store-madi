import { Brand, CartItem, ComboProduct, FavoriteProduct, OrderItem } from "@prisma/client";

export class Product {
    id: number;
    name: string;
    description?: string;
    color?: string;
    size?: string;
    price: number;
    stock: number;
    brandId: number;
    cartItems: CartItem[];
    favoritedBy: FavoriteProduct[];
    orderItems: OrderItem[];

    brand?: Brand;
    comboItemsA?: ComboProduct[];
    comboItemsB?: ComboProduct[];
}
