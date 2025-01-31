import type { InventoryData } from "./types";

class Cart {
    content: InventoryData[] = $state([
        {
            "Naam": "Titicacameer",
            "Continent": "Zuid-Amerika",
            "Land": "Bolivia; Peru",
            "Omschrijving": "Dit hooggelegen meer is beroemd om de drijvende rieteilanden van de Uros. Het wordt omringd door Andesdorpjes met rijke culturele tradities.",
            "Prijs": 20000000000,
            "Oppervlakte": 8372,
            "Volume": 896,
            "Diepte": 281,
            "Temperatuur": 11,
            "ID": 0
        },
        {
            "Naam": "Lake Pehoe",
            "Continent": "Zuid-Amerika",
            "Land": "Chili",
            "Omschrijving": "Dit turquoise meer in Torres del Paine National Park biedt adembenemende uitzichten op bergtoppen. Het is een favoriete bestemming voor wandelaars en fotografen.",
            "Prijs": 1500000,
            "Oppervlakte": 22,
            "Volume": 351,
            "Diepte": 13,
            "Temperatuur": 16,
            "ID": 1
        }
    ]);

    constructor() {
        console.log("CONSTRUCTED")
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
        this.content.push(item);
        localStorage.setItem("cart", JSON.stringify(this.content));
    }
}

export const cart = new Cart();