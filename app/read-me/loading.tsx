export default function Loading() {
  // Return a simple loading indicator instead of null
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 200px)",
        padding: "20px",
      }}
    >
      <p style={{ fontSize: "1.25rem", color: "inherit" }}>Loading Read Me page...</p>
    </div>
  )
}
