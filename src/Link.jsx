import { EVENTS } from "./constants";

export function navigate(href) {
  window.history.pushState({}, "", href);

  // Crear un Evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    // Verifica si el usuario presiona el boton del mouse y no hay un target
    const isMainEvent = event.button === 0 && !target;
    // Verifica si el usuario presiona una tecla modificadora
    const isModifiedEvent =
      !!event.metaKey || !!event.altKey || !!event.ctrlKey || !!event.shiftKey;
    // Verifica si el usuario presiona un link que abre en una nueva pestaña
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      // Evitar el comportamiento por defecto del navegador de recargar la pagina
      event.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
