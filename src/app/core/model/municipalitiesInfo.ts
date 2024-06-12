export interface Municipality {
    municipality: string;
    postalCodes: string[];
}

export interface Provinces {
    [province: string]: Municipality[];
}

export interface PostalCodeInfo {
    municipality: string;
    province: string;
}

export interface PostalCodes {
    [postalCode: string]: PostalCodeInfo;
}

export interface MunicipalitiesInfo {
    provinces: Provinces;
    postalCodes: PostalCodes;
}