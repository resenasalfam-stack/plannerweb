

## Actualizar sitemap.xml para usar www

### Resumen
Actualizar todas las URLs en `public/sitemap.xml` de `https://plannerseguros.com/` a `https://www.plannerseguros.com/` para que coincidan con la propiedad verificada en Google Search Console.

### Cambio a realizar

En `public/sitemap.xml`, reemplazar todas las ocurrencias de `https://plannerseguros.com/` por `https://www.plannerseguros.com/` en las 8 URLs del sitemap.

### URLs afectadas

| Antes | Después |
|-------|---------|
| `https://plannerseguros.com/` | `https://www.plannerseguros.com/` |
| `https://plannerseguros.com/#servicios` | `https://www.plannerseguros.com/#servicios` |
| `https://plannerseguros.com/#nosotros` | `https://www.plannerseguros.com/#nosotros` |
| `https://plannerseguros.com/#aseguradoras` | `https://www.plannerseguros.com/#aseguradoras` |
| `https://plannerseguros.com/#productores` | `https://www.plannerseguros.com/#productores` |
| `https://plannerseguros.com/#testimonios` | `https://www.plannerseguros.com/#testimonios` |
| `https://plannerseguros.com/#faq` | `https://www.plannerseguros.com/#faq` |
| `https://plannerseguros.com/#contacto` | `https://www.plannerseguros.com/#contacto` |

### Nota importante
Tambien se deberia actualizar la URL canonical en `index.html` de `https://plannerseguros.com` a `https://www.plannerseguros.com` para mantener consistencia SEO. Esto se hara en el mismo cambio.

### Detalles tecnicos

| Archivo | Cambio |
|---------|--------|
| `public/sitemap.xml` | Reemplazar dominio en las 8 URLs |
| `index.html` | Actualizar `<link rel="canonical">` para usar www |

### Despues de implementar
1. **Publicar el sitio** con Publish > Update
2. **Re-enviar el sitemap** en Google Search Console: `sitemap.xml`

