"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const Config_1 = require("./Config");
class Order {
    constructor(customer, amount, orderId) {
        this.customer = customer;
        this.amount = amount;
        this.orderId = orderId;
    }
    calculateBill() {
        const tax = this.amount * Config_1.TAX_RATE;
        return this.amount + tax + Config_1.DELIVERY_CHARGE;
    }
    displayOrder() {
        console.log("----- Order Details -----");
        console.log(`Customer: ${this.customer.name}`);
        console.log(`Phone: ${this.customer.phone}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Bill: ₹${this.calculateBill()}`);
        console.log("-------------------------");
    }
}
exports.Order = Order;
