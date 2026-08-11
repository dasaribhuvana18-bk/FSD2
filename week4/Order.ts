import { TAX_RATE, DELIVERY_CHARGE } from "./Config";
import { Customer } from "./Customer";

export class Order {
    constructor(
        private customer: Customer,
        private amount: number,
        private orderId: number
    ) {}

    calculateBill(): number {
        const tax = this.amount * TAX_RATE;
        return this.amount + tax + DELIVERY_CHARGE;
    }

    displayOrder(): void {
        console.log("----- Order Details -----");
        console.log(`Customer: ${this.customer.name}`);
        console.log(`Phone: ${this.customer.phone}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Bill: ₹${this.calculateBill()}`);
        console.log("-------------------------");
    }
}