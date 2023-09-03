// Diferencia entre px y rem
// En el caso de Chrome: chrome://settings/appearance
// Tamaño de fuente
export default function Ejemplo7() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <p style={{ fontSize: "1rem" }}>Texto 1 rem</p>
      <p style={{ fontSize: "16px" }}>Texto 16 px</p>
    </div>
  );
}
