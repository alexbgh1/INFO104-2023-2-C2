const API_URL = "https://info104-2023-2-db.onrender.com";

export async function DELETE(request, { params }) {
  console.log(params);
  const { id } = params;
  console.log(id);
  const res = await fetch(API_URL + `/api/comentarios/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();
  console.log(data);

  return Response.json(data);
}
