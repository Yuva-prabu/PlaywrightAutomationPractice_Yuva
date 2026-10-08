import { user } from "./user.type";

export function getUserData(): user {
    return {
        email: `${process.env.EMAIL}`,
        password: `${process.env.PASSWORD}`
    };
}