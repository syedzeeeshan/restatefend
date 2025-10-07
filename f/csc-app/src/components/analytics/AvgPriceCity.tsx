import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { getAvgPriceByCity } from "../../api/analytics";
import { AvgPriceData } from "../../types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AvgPriceByCity() {
  const [data, setData] = useState<AvgPriceData[]>([]);

  useEffect(() => {
    getAvgPriceByCity().then(res => setData(res.data));
  }, []);

  const chartData = {
    labels: data.map(d => d.city),
    datasets: [
      {
        label: "Average Price",
        data: data.map(d => d.avg_price),
        backgroundColor: "#1abc9c",
      },
    ],
  };

  return (
    <div className="neumorphic" style={{ padding: "1rem" }}>
      <h3>Average Price by City</h3>
      <Bar data={chartData} />
    </div>
  );
}