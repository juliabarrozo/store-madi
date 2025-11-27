import { Product } from "@prisma/client";

export class Brand {
    id: number;
    name: string;
    products?: Product[];
}
