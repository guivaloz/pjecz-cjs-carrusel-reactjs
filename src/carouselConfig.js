// Carousel Configuration
// To add, change, or remove images:
// 1. Add your image files to the /public/images/ directory
// 2. Update the images array below with the image filenames
// 3. The carousel will automatically use these images

export const carouselConfig = {
  // Duration each image is displayed (in milliseconds)
  intervalDuration: 5000, // 5 seconds
  
  // List of images to display in the carousel
  // Add or remove image filenames here
  images: [
    '/images/image1.svg',
    '/images/image2.svg',
    '/images/image3.svg',
    '/images/image4.svg',
    '/images/image5.svg',
  ],
  
  // Screen dimensions
  screenWidth: 2000,
  screenHeight: 417,
};
