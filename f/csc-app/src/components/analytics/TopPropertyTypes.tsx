import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getTopPropertyTypes } from "../../api/analytics";
import { TopPropertyTypeData } from "../../types";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TopPropertyTypes() {
  const [data, setData] = useState<TopPropertyTypeData[]>([]);

  useEffect(() => {
    getTopPropertyTypes().then(res => setData(res.data));
  }, []);

  const chartData = {
    labels: data.map(d => d.property_type),
    datasets: [
      {
        label: "Count",
        data: data.map(d => d.count),
        backgroundColor: ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#48c9b0"],
      },
    ],
  };

  return (
    <div className="neumorphic" style={{ padding: "1rem" }}>
      <h3>Top Property Types</h3>
      <Pie data={chartData} />
    </div>
  );
}