import CarWidget from "./CarWidget";

function NavBar() {
  return (
    <nav>
      <h1>Mi Tienda</h1>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CarWidget />
    </nav>
  );
}

export default NavBar;
