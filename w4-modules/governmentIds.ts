namespace CitizenServices {

    const voterIdLength = 10;

    export function validateVoterId(id: string): boolean {
        const numeric = /^\d+$/.test(id);
        return numeric && id.length === voterIdLength;
    }

    export function validatePassport(passport: string): boolean {
        const pattern = /^[A-Z][0-9]{7}$/;
        return pattern.test(passport.toUpperCase());
    }

    export namespace Tax {
        export function calculateServiceTax(amount: number): number {
            return amount * 0.18;
        }
    }
}

const voterId = "1234567890";
const passport = "A1234567";

console.log(`Voter ID Valid? ${CitizenServices.validateVoterId(voterId)}`);
console.log(`Passport Valid? ${CitizenServices.validatePassport(passport)}`);

const amount = 5000;
const tax = CitizenServices.Tax.calculateServiceTax(amount);

console.log(`Service Tax on ₹${amount}: ₹${tax}`);