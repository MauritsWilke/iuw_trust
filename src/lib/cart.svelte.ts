import type { InventoryData } from "./types";

class Cart {
    content: InventoryData[] = $state([]);

    constructor() {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            this.content = JSON.parse(storedCart);
        }
    }

    removeItem(ID: number) {
        this.content = this.content.filter(v => v.ID !== ID);
        localStorage.setItem("cart", JSON.stringify(this.content));
    }

    addItem(item: InventoryData) {
        if (this.content.find((v) => v.ID === item.ID)) return;
        this.content.push(item);
        localStorage.setItem("cart", JSON.stringify(this.content));
    }
}

export const cart = new Cart();