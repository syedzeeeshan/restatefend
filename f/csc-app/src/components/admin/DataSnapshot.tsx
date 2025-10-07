import { useEffect, useState } from "react";
import { getSnapshot } from "../../api/admin";
import { DataSnapshotData } from "../../types";

export default function DataSnapshot() {
  const [snapshot, setSnapshot] = useState<DataSnapshotData | null>(null);

  useEffect(() => {
    getSnapshot().then(res => setSnapshot(res.data));
  }, []);

  if (!snapshot) return <p>Loading...</p>;

  return (
    <div className="neumorphic" style={{ padding: "1rem" }}>
      <h3>Data Snapshot</h3>
      <p>Total Properties: {snapshot.properties}</p>
      <p>Cities: {snapshot.cities}</p>
      <p>Property Types: {snapshot.types}</p>
    </div>
  );
}