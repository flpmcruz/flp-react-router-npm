import { Link } from "../Link";

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina para crear un Router Dom</p>
      <Link to={"/about"}>Ir sobre nosotros</Link>
    </>
  );
}

export default HomePage;
