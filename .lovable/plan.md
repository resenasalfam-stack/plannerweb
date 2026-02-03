

## Agregar verificación de Google Search Console

### Resumen
Voy a agregar la meta tag de verificación de Google para que puedas verificar la propiedad del sitio en Google Search Console.

### Cambio a realizar

Agregar la siguiente línea en el `<head>` del archivo `index.html`, justo después de las meta tags principales:

```html
<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="B-GTaqx6HxUbM24G5rOyx-QgJndUuxUASAKo6q2EIMA" />
```

### Pasos después de implementar

1. **Publicar el sitio** - Hacer clic en "Publish" > "Update" para que el cambio esté en producción
2. **Verificar en Google Search Console** - Ir a Search Console y hacer clic en "Verify" para confirmar la propiedad
3. **Enviar el sitemap** - Una vez verificado, ir a "Sitemaps" y enviar: `https://plannerseguros.com/sitemap.xml`

---

### Detalles técnicos

| Archivo | Cambio |
|---------|--------|
| `index.html` | Agregar meta tag `google-site-verification` en línea 24 (después del favicon) |

