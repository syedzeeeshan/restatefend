import { useEffect, useState } from "react";
import { getHealth } from "../../api/admin";
import { SystemHealthData } from "../../types";

export default function SystemHealth() {
  const [health, setHealth] = useState<SystemHealthData | null>(null);

  useEffect(() => {
    getHealth().then(res => setHealth(res.data));
  }, []);

  if (!health) return <p>Loading...</p>;

  return (
    <div className="neumorphic" style={{ padding: "1rem" }}>
      <h3>System Health</h3>
      <p>Postgres: {health.postgres ? "✅" : "❌"}</p>
      <p>MongoDB: {health.mongo ? "✅" : "❌"}</p>
    </div>
  );
}