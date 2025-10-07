export interface Property {
  id: number;
  title: string;
  description: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
}

export interface AvgPriceData {
  city: string;
  avg_price: number;
}

export interface ListingPerDayData {
  date: string;
  count: number;
}

export interface TopPropertyTypeData {
  property_type: string;
  count: number;
}

export interface ViewsPerPropertyData {
  _id: string;
  views: number;
}

export interface DataSnapshotData {
  properties: number;
  cities: number;
  types: number;
}

export interface SystemHealthData {
  postgres: boolean;
  mongo: boolean;
}
