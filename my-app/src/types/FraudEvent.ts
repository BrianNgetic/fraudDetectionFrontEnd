export interface FraudEvent{
      Id : string;
      transactionId: string;
      CustomerId : string;
      riskScore : number;
      riskLevel :string;
      status :string;
      isNewMerchant: boolean;
      isNewDevice : boolean;
      isNewCountry: boolean;

}