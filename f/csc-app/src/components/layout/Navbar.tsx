export default function Navbar() {
  return (
    <nav
      className="neumorphic"
      style={{
        margin: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
      }}
    >
      <h1 style={{ color: "#1abc9c" }}>RealEstate</h1>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="/">Home</a>
        <a href="/properties">Properties</a>
        <a href="/analytics">Analytics</a>
        <a href="/admin">Admin</a>
      </div>
    </nav>
  );
}