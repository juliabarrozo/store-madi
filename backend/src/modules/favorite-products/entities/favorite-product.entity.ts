import { Product, User } from "@prisma/client";

export class FavoriteProduct {
    id: number;
    userId: number;
    productId: number;
    
    user?: User;
    product?: Product;
}
