
export type LocalDateTime = string;
export type GeoLocation = number
export default interface Transaction{
    id : string;
    customerId : string;
    amount : String;
    currency : String;
    merchant : String;
    category : string;
    country : string;
    longitude : GeoLocation;
    latitude : GeoLocation;
    devideId : string;
    time: LocalDateTime;

}