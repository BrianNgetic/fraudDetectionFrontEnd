// src/data/mockTransactions.ts

import Transaction, { GeoLocation, LocalDateTime } from '../types/Transaction';

const createTransaction = (
  id: string,
  customerId: string,
  amount: string,
  currency: string,
  merchant: string,
  category: string,
  country: string,
  longitude: GeoLocation,
  latitude: GeoLocation,
  devideId: string,
  time: string
): Transaction => {
  return {
    id,
    customerId,
    amount,
    currency,
    merchant,
    category,
    country,
    longitude,
    latitude,
    devideId,
    time,
  };
}

export const mockTransactions: Transaction[] = [

  createTransaction(
    'tx_101',
    'cust_901',
    '45.50',
    'USD',
    'Starbucks',
    'Food & Beverage',
    'US',
    -73.9851 as GeoLocation,
    40.7488 as GeoLocation,
    'dev_ios_01',
    '2026-03-30T08:15:00' as unknown as LocalDateTime
  ),
  createTransaction(
    'tx_102',
    'cust_902',
    '129.99',
    'USD',
    'Amazon',
    'Shopping',
    'US',
    -122.3321 as GeoLocation,
    47.6062 as GeoLocation,
    'dev_web_05',
    '2026-03-30T10:42:00' as unknown as LocalDateTime
  ),
  createTransaction(
    'tx_103',
    'cust_901',
    '15.00',
    'EUR',
    'Uber',
    'Transportation',
    'FR',
    2.3522 as GeoLocation,
    48.8566 as GeoLocation,
    'dev_ios_01',
    '2026-03-30T12:05:30' as unknown as LocalDateTime
  ),
  createTransaction(
    'tx_104',
    'cust_903',
    '8.75',
    'GBP',
    'Tesco',
    'Groceries',
    'UK',
    -0.1278 as GeoLocation,
    51.5074 as GeoLocation,
    'dev_and_12',
    '2026-03-30T14:22:15' as unknown as LocalDateTime
  ),
  createTransaction(
    'tx_105',
    'cust_904',
    '240.00',
    'USD',
    'Delta Air Lines',
    'Travel',
    'US',
    -84.4277 as GeoLocation,
    33.6407 as GeoLocation,
    'dev_web_09',
    '2026-03-30T18:50:00' as unknown as LocalDateTime
  ),
];