import { useEffect, useState, Children } from "react";
import { match } from "path-to-regexp";
import { EVENTS } from "./constants";
import { getCurrentPath } from "./utils/getCurrentPath";

export function Router({
  children,
  routes = [],
  fallback: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(getCurrentPath());

    // Escuchar el evento de navegacion (pushState) que he creado
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    // Escuchar el evento de navegacion (popstate) que es el que se dispara cuando el usuario presiona el boton de regresar
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  // Add routes from children <Route /> components
  const childrenRoutes = Children.map(children, ({ props, type }) => {
    const { name } = type;
    return name === "Route" ? props : null;
  });

  // Concatenate children routes with routes from props
  const routeToUse = routes.concat(childrenRoutes).filter(Boolean);

  let routeParams = {};

  const Page = routeToUse.find(({ path }) => {
    if (path === currentPath) return true;

    // Hemos usados path-to-regexp para poder obtener los parametros de la ruta
    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matchUrl = matcherUrl(currentPath);
    if (!matchUrl) return false;
    routeParams = matchUrl.params;
    return true;
    /*  */
  })?.component;

  return Page ? <Page routeParams={routeParams} /> : DefaultComponent();
}
