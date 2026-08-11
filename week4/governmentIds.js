"use strict";
var CitizenServices;
(function (CitizenServices) {
    const voterIdLength = 10;
    function validateVoterId(id) {
        const numeric = /^\d+$/.test(id);
        return numeric && id.length === voterIdLength;
    }
    CitizenServices.validateVoterId = validateVoterId;
    function validatePassport(passport) {
        const pattern = /^[A-Z][0-9]{7}$/;
        return pattern.test(passport.toUpperCase());
    }
    CitizenServices.validatePassport = validatePassport;
    let Tax;
    (function (Tax) {
        function calculateServiceTax(amount) {
            return amount * 0.18;
        }
        Tax.calculateServiceTax = calculateServiceTax;
    })(Tax = CitizenServices.Tax || (CitizenServices.Tax = {}));
})(CitizenServices || (CitizenServices = {}));
const voterId = "1234567890";
const passport = "A1234567";
console.log(`Voter ID Valid? ${CitizenServices.validateVoterId(voterId)}`);
console.log(`Passport Valid? ${CitizenServices.validatePassport(passport)}`);
const amount = 5000;
const tax = CitizenServices.Tax.calculateServiceTax(amount);
console.log(`Service Tax on ₹${amount}: ₹${tax}`);
