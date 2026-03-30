import type { MouseEvent } from "react";

export const QUOTE_URL = "https://sistema.woker.ar/solicitar-cotizacion/plannerseguros/";

export const handleQuoteLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
  if (window.self === window.top) return;

  event.preventDefault();

  try {
    if (window.top) {
      window.top.location.href = QUOTE_URL;
      return;
    }
  } catch {
    // If top navigation is blocked by browser sandbox, fallback to a new tab.
  }

  window.open(QUOTE_URL, "_blank", "noopener,noreferrer");
};
