import AvgPriceCity from "../components/analytics/AvgPriceCity";
import ListingPerDay from "../components/analytics/ListingPerDay";
import TopPropertyTypes from "../components/analytics/TopPropertyTypes";
import ViewsPerProperty from "../components/analytics/ViewsPerProperty";

export default function Analytics() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1rem" }}>
      <AvgPriceByCity />
      <ListingsPerDay />
      <TopPropertyTypes />
      <ViewsPerProperty />
    </div>
  );
}