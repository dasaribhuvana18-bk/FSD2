import { Order } from "./Order";
import type { Customer } from "./Customer";

const customer: Customer = {
    name: "Bhuvana",
    phone: 9876543210,
    address: "Bhimavaram"
};

const order = new Order(customer, 2000, 501);

order.displayOrder();