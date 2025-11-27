import { Product } from "@prisma/client";

export class ComboProduct {
        id: number;
        productAId: number;
        productBId: number;
        
        productA?: Product;
        productB?: Product;
}
