
// src/types/Transaction.ts

export type GeoLocation = number;
export type LocalDateTime = string;

export enum RiskLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export interface Transaction {
  id: string;
  customerId: string;
  amount: string;
  currency: string;
  merchant: string;
  category: string;
  country: string;
  longitude: GeoLocation;
  latitude: GeoLocation;
  deviceId: string;
  time: LocalDateTime;
  riskLevel: RiskLevel;
  flagged: boolean;
}

export default Transaction;