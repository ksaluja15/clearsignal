//portfolio data see main docs

/* leave gridClass and aspectClass to defaults
{
    href: '/portfolio/(slug)',
    imageSrc: '/portfolio/(image),
    alt: 'Image_Alt',
    title: 'Title',
    gridClass: 'md:col-span-1', 
    aspectClass: 'aspect-[4/3]',
  }

*/

export interface PortfolioItem {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
  gridClass: string;
  aspectClass: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    href: '/portfolio/ar-vr',
    imageSrc: '/portfolio/Screenshot-2024-11-08-at-10-40-24-PM.png',
    alt: 'AR/VR headset project',
    title: 'AR/VR',
    gridClass: 'md:col-span-1',
    aspectClass: 'aspect-[4/3]',
  },
  {
    href: '/portfolio/retail',
    imageSrc: '/portfolio/Picture_showing_object_detection_of_multiple_peopl.jpg',
    alt: 'Retail Monitoring Systems',
    title: 'Retail Monitoring Systems',
    gridClass: 'md:col-span-1',
    aspectClass: 'aspect-[4/3]',
  },
  {
    href: '/portfolio/self-driving-farm-vehicles',
    imageSrc: '/portfolio/Screenshot-from-2024-11-11-16-53-29.png',
    alt: 'Self-driving vehicle dashboard',
    title: 'Self Driving',
    gridClass: 'md:col-span-2',
    aspectClass: 'aspect-[21/9]',
  },
  {
    href: '/portfolio/adtech',
    imageSrc: '/portfolio/Create_an_image_of_a_person_viewing_a_website-_The.jpg',
    alt: 'AdTech project',
    title: 'AdTech',
    gridClass: 'md:col-span-1',
    aspectClass: 'aspect-video',
  },
  {
    href: '/portfolio/pipe-inspection',
    imageSrc: '/portfolio/Screenshot-2024-11-08-at-10-40-40-PM.png',
    alt: 'Automated pipe inspection UI',
    title: 'Pipe Inspection',
    gridClass: 'md:col-span-1',
    aspectClass: 'aspect-video',
  },
];