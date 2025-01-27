import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // Obtener la ruta actual

  useEffect(() => {
    window.scrollTo(0, 0); // Hacer scroll a la parte superior
  }, [pathname]); // Ejecutar cada vez que cambia la ruta

  return null;
}

export default ScrollToTop;
