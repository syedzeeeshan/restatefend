import client from "./client";

export const getAvgPriceByCity = () => client.get("analytics/avg-price-by-city/");
export const getListingsPerDay = () => client.get("analytics/listings-per-day/");
export const getTopPropertyTypes = () => client.get("analytics/top-property-types/");
export const getViewsPerProperty = () => client.get("analytics/views-per-property/");