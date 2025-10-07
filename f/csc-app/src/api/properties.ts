import client from "./client";

export const getProperties = () => client.get("properties/");
export const getProperty = (id: string) => client.get(`properties/${id}/`);
export const createProperty = (data: any) => client.post("properties/", data);
export const updateProperty = (id: string, data: any) => client.put(`properties/${id}/`, data);
export const deleteProperty = (id: string) => client.delete(`properties/${id}/`);