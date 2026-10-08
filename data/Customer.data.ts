import { faker } from "@faker-js/faker";
import { CustomerInfo } from "./CustomerInfo.type";

export function getCustomerData(): CustomerInfo {
    return {
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        password: faker.internet.password(),
        days: '12',
        months: '3',
        years: '1990'
    };
}
     