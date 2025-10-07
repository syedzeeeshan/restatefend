import { clearLogs } from "../../api/admin";

export default function QuickActions() {
  const handleClearLogs = () => {
    clearLogs().then(() => alert("Logs cleared!"));
  };

  return (
    <div className="neumorphic" style={{ padding: "1rem" }}>
      <h3>Quick Actions</h3>
      <button onClick={handleClearLogs} style={btnStyle}>Clear Logs</button>
      <button onClick={() => alert("Not implemented yet")} style={btnStyle}>Reindex Search</button>
      <button onClick={() => alert("Not implemented yet")} style={btnStyle}>Backup Data</button>
      <button onClick={() => alert("Not implemented yet")} style={btnStyle}>Restore Data</button>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  margin: "0.5rem",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "8px",
  background: "#1abc9c",
  color: "white",
  cursor: "pointer",
};