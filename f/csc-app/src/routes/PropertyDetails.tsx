import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../api/properties";
import { Property } from "../types";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (id) {
      getProperty(id).then(res => setProperty(res.data));
    }
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div className="neumorphic" style={{ margin: "2rem", padding: "2rem" }}>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p><strong>City:</strong> {property.city}</p>
      <p><strong>Price:</strong> ${property.price}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
    </div>
  );
}