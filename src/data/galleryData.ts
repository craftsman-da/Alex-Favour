export interface GalleryImage {
  src: string;
  alt: string;
  category?: 'prewedding' | 'engagement' | 'couple' | 'family';
}

// Remote images (can be empty if not needed)
export const remoteImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Beautiful couple moment',
    category: 'couple',
  },
  {
    src: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Romantic wedding scene',
    category: 'prewedding',
  },
  {
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Engagement celebration',
    category: 'engagement',
  },
];

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
