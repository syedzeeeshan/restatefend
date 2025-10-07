import QuickActions from "../components/admin/QuickActions";
import SystemHealth from "../components/admin/SystemHealth";
import DataSnapshot from "../components/admin/DataSnapshot";

export default function AdminPanel() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1rem" }}>
      <QuickActions />
      <SystemHealth />
      <DataSnapshot />
    </div>
  );
}