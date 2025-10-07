export default function Footer() {
  return (
    <footer
      className="neumorphic"
      style={{
        margin: "1rem",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <p>© {new Date().getFullYear()} RealEstate App</p>
    </footer>
  );
}