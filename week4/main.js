"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("./Order");
const customer = {
    name: "Bhuvana",
    phone: 9876543210,
    address: "Bhimavaram"
};
const order = new Order_1.Order(customer, 2000, 501);
order.displayOrder();
