export default async function Cards() {
  try {
    const res = await fetch(
      "https://dynamic-events-api.onrender.com/api/eventos"
    );
    const eventos = await res.json();
    console.log(eventos);
    return(
        <>
        {eventos.map((evento) => (
            
        ))}
        </>
    );

  } catch (error) {
    console.log(error);
  }
}
