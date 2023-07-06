import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[] = [];

    get totalPrice():number{
        let totalPrice = 0;
        
        this.items.forEach(item => {
            let validPrice = Number(item.price)
            totalPrice += validPrice;

        });
        return totalPrice;
    }
}