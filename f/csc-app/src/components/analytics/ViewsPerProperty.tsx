import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { getViewsPerProperty } from "../../api/analytics";
import { ViewsPerPropertyData } from "../../types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ViewsPerProperty() {
  const [data, setData] = useState<ViewsPerPropertyData[]>([]);

  useEffect(() => {
    getViewsPerProperty().then(res => setData(res.data));
  }, []);

  const chartData = {
    labels: data.map(d => d._id),
    datasets: [
      {
        label: "Views",
        data: data.map(d => d.views),
        backgroundColor: "#16a085",
      },
    ],
  };

  return (
    <div className="neumorphic" style={{ padding: "1rem" }}>
      <h3>Views Per Property</h3>
      <Bar data={chartData} options={{ indexAxis: "y" }} />
    </div>
  );
}