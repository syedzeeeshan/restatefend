import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { getListingsPerDay } from "../../api/analytics";
import { ListingPerDayData } from "../../types";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ListingPerDay() {
  const [data, setData] = useState<ListingPerDayData[]>([]);

  useEffect(() => {
    getListingsPerDay().then(res => setData(res.data));
  }, []);

  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: "Listings Per Day",
        data: data.map(d => d.count),
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.2)",
      },
    ],
  };

  return (
    <div className="neumorphic" style={{ padding: "1rem" }}>
      <h3>Listings Per Day</h3>
      <Line data={chartData} />
    </div>
  );
}
