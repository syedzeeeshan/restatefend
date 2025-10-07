import { useEffect, useState } from "react";
import { getProperties } from "../api/properties";
import PropertyCard from "../components/properties/PropertyCard";
import { Property } from "../types";

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    getProperties().then(res => setProperties(res.data));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "1rem" }}>
      {properties.map(p => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}