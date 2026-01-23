// Carousel Configuration
// To add, change, or remove images:
// 1. Add your image files to the /public/images/ directory
// 2. Update the images array below with the image filenames
// 3. The carousel will automatically use these images

// Uses the correct base path from your Vite config for production
// It works both in development (where base is `/`)
const baseUrl = import.meta.env.BASE_URL;

export const carouselConfig = {
  // Duration each image is displayed (in milliseconds)
  intervalDuration: 10000, // 10 seconds

  // List of images to display in the carousel
  // Add or remove image filenames here
  images: [
    `${baseUrl}images/carrusel-informe-anual-de-actividades-2025-1.jpg`,
    `${baseUrl}images/carrusel-generico-2025.jpg`,
    `${baseUrl}images/carrusel-peritos-convocatoria-2026.jpg`,
    `${baseUrl}images/carrusel-no-a-la-violencia.jpg`,
    `${baseUrl}images/carrusel-justicia-para-ti.jpg`,
    `${baseUrl}images/carrusel-whatsapp-2025.jpg`,
  ],

  // Screen dimensions
  screenWidth: 2000,
  screenHeight: 417,
};
