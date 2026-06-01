export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1>Feature Branch Demo  🚀</h1>
      <p>GitHub Actions + Vercel Deployment</p>

      <button
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "10px",
          background: "#38bdf8",
          color: "black",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Live Project
      </button>
    </div>
  );
}