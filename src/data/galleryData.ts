export interface GalleryImage {
  src: string;
  alt: string;
  category?: 'prewedding' | 'engagement' | 'couple' | 'family';
}

// Remote images (can be empty if not needed)

// Function to load local images from assets
export function loadLocalImages(): GalleryImage[] {
  const imageModules = import.meta.glob(
    '../assets/gallery/*.{png,jpg,jpeg,webp}',
    { eager: true }
  );

  return Object.entries(imageModules).map(
    ([path, module]: [string, any], index) => {
      // Extract filename from path for better alt text
      const filename =
        path.split('/').pop()?.split('.')[0] || `image-${index + 1}`;

      return {
        src: module.default,
        alt: filename.replace(/-|_/g, ' '),
        category: 'couple', // default category
      };
    }
  );
}
