export default function Admin(){
  const pending = [
    {id: 1, title: "Protest Expected", region: "Delhi", status: "Pending"},
    {id: 2, title: "Flash Flood Warning", region: "Uttarakhand", status: "Approved"}
  ];
  return (
    <main style={{padding:40,fontFamily:'Arial'}}>
      <h1>CheqWorld Admin (MVP v0.1)</h1>
      <p>Manual validation workflow (demo).</p>
      <table border={1} cellPadding={8}>
        <thead><tr><th>Title</th><th>Region</th><th>Status</th></tr></thead>
        <tbody>
          {pending.map(p => (
            <tr key={p.id}><td>{p.title}</td><td>{p.region}</td><td>{p.status}</td></tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
