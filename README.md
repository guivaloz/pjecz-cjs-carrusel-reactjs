# pjecz-cjs-carrusel-reactjs
Ciudad Judicial de Saltillo: Carrusel de imágenes para la pantalla de la recepción.

## Descripción

Aplicación ReactJS que muestra un carrusel de imágenes en pantalla completa. Cada imagen se muestra durante 5 segundos y el carrusel se repite indefinidamente.

**Dimensiones de pantalla:** 2000 x 417 píxeles

## Instalación

```bash
npm install
```

## Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm run build
npm run preview
```

## Cómo agregar, cambiar o eliminar imágenes

### Opción 1: Archivo de configuración (Recomendado)

1. Coloca tus imágenes en la carpeta `/public/images/`
2. Edita el archivo `src/carouselConfig.js`
3. Actualiza el array `images` con los nombres de tus archivos:

```javascript
images: [
  '/images/imagen1.jpg',
  '/images/imagen2.jpg',
  '/images/imagen3.png',
  // Agrega más imágenes aquí
],
```

### Opción 2: Reemplazar imágenes existentes

Simplemente reemplaza los archivos en `/public/images/` manteniendo los mismos nombres.

## Configuración

El archivo `src/carouselConfig.js` permite configurar:

- **intervalDuration**: Duración de cada imagen en milisegundos (por defecto: 5000 = 5 segundos)
- **images**: Lista de rutas de imágenes a mostrar
- **screenWidth**: Ancho de pantalla (2000 píxeles)
- **screenHeight**: Alto de pantalla (417 píxeles)

## Características

- ✅ Carrusel automático con transiciones suaves
- ✅ Cada imagen se muestra por 5 segundos
- ✅ Repetición infinita
- ✅ Fácil configuración de imágenes
- ✅ Optimizado para pantalla 2000x417 píxeles
- ✅ Sin bordes ni márgenes
- ✅ Transición fade entre imágenes
