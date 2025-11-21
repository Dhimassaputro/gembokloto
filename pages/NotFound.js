export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          padding: "2rem 3rem",
          borderRadius: "0.75rem",
          border: "1px solid #e5e7eb",
          boxShadow: "0 10px 25px rgba(15,23,42,0.08)",
          textAlign: "center",
          maxWidth: "480px",
        }}
      >
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "999px",
            border: "2px solid #facc15",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem",
            fontSize: "1.25rem",
          }}
        >
          !
        </div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}