# 📸 Capturas del sistema — FACTRA Ecuador

Pon aquí tus capturas de pantalla del sistema.

## Formato recomendado
- Resolución: 1280×720 px o mayor (proporción 16:9 funciona mejor)
- Formato: PNG o JPG
- Peso: máximo 500 KB por imagen (comprime en https://squoosh.app si es necesario)

## Nombres sugeridos
```
01-caja-principal.png
02-facturacion-sri.png
03-inventario.png
04-clientes.png
05-reportes.png
```

## Cómo agregar o cambiar capturas
1. Copia tus imágenes a esta carpeta (`assets/screenshots/`)
2. Abre `config.json` (está en la raíz de Landing/)
3. Edita el array `"imagenes"`:

```json
"imagenes": [
  {
    "url": "assets/screenshots/mi-captura.png",
    "caption": "Descripción que aparece en el carrusel"
  }
]
```

4. Guarda `config.json` y listo. El carrusel se actualiza automáticamente.

## Notas
- El carrusel avanza solo cada ~4 segundos
- El visitante puede pasar las slides con los botones ◀ ▶, con las flechas del teclado, o deslizando en móvil
- Al hacer clic en cualquier captura se abre en pantalla completa (lightbox)
- Las miniaturas (thumbnails) aparecen abajo del carrusel para navegación rápida
