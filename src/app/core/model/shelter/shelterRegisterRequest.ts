import { Address } from "../address";

export interface shelterRegisterRequest {
    name: string;
    email: string;
    phoneNumber: string;
    address: Address;
    password: string;
    confirmPassword: string;
}   