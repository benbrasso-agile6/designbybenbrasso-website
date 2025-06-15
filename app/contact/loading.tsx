export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 200px)", // Adjust height as needed
        padding: "20px",
      }}
    >
      <p style={{ fontSize: "1.25rem", color: "inherit" }}>Loading Contact page...</p>
    </div>
  )
}
