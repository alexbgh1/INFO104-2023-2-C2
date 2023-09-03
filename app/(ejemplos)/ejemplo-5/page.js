import ListaDePersonas from "./ListaDePersonas";

// Hacemos la carga de información desde el servidor
const fetchData = async () => {
  const response = await import("../../api/ejemplo-1/ejemplo-1", {
    method: "GET",
  });
  // response es un objeto que tiene muchas propiedades, entre ellas "miArreglo"
  const data = response.miArreglo;
  console.log("Obteniendo datos desde SERVIDOR:", response.miArreglo);
  return data;
};

export default async function Ejemplo5() {
  const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
  return (
    <div className="container center">
      <ListaDePersonas data={data} />
    </div>
  );
}
