import { useState } from "react";
import { Property } from "../types";

export default function PropertyForm() {
  const [formData, setFormData] = useState<Omit<Property, 'id'>>({
    title: "",
    description: "",
    city: "",
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Property submitted! Check the console for the data.");
  };

  return (
    <form onSubmit={handleSubmit} className="neumorphic-form" style={{ margin: "2rem", padding: "2rem" }}>
      <h2>Add New Property</h2>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Bedrooms" required />
      <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="Bathrooms" required />
      <button type="submit">Submit</button>
    </form>
  );
}
