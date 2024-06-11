import { Address } from "../address";
import { SocialMedia } from "./socialMedia";

export interface Shelter {
    name: string,
    address: Address,
    socialMedia: SocialMedia[],
    email: string,
    phoneNumber: string
}