import { Property } from "../../types";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="neumorphic" style={{ margin: "1rem", maxWidth: "300px" }}>
      <h2>{property.title}</h2>
      <p>{property.city}</p>
      <p style={{ color: "#2ecc71", fontWeight: "bold" }}>${property.price}</p>
    </div>
  );
}