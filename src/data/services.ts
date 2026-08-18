// Service data for line boring business
export interface ServiceData {
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  equipment: string[];
  industries: string[];
  emergencyAvailable: boolean;
}

export const services: ServiceData[] = [
  {
    title: 'Mobile Line Boring',
    slug: 'mobile-line-boring',
    description: 'On-site precision line boring services for heavy equipment, eliminating downtime by repairing worn bores without removing components from your machinery.',
    benefits: [
      'Eliminates equipment downtime - we come to you',
      'Precision machining to OEM specifications',
      'Cost-effective vs. component replacement',
      'Same-day emergency service available',
      'Serves excavators, loaders, dozers, and more'
    ],
    equipment: [
      'Portable line boring machines (2" to 20" diameter)',
      'CNC-controlled precision equipment',
      'Hydraulic power units',
      'Laser measurement systems'
    ],
    industries: [
      'Construction equipment',
      'Agricultural machinery',
      'Mining equipment',
      'Forestry machinery',
      'Material handling equipment'
    ],
    emergencyAvailable: true
  },
  {
    title: 'Bore Welding Repair',
    slug: 'bore-welding-repair',
    description: 'Professional weld buildup and restoration of worn bores before precision machining, extending equipment life and restoring original specifications.',
    benefits: [
      'Restores worn bores to original dimensions',
      'MIG/TIG welding with premium alloys',
      'Prevents further wear and damage',
      'Extends equipment lifespan',
      'Combined with line boring for complete repair'
    ],
    equipment: [
      'Portable welding rigs',
      'MIG/TIG welding systems',
      'Pre and post-heat treatment equipment',
      'Ultrasonic testing equipment'
    ],
    industries: [
      'Heavy construction equipment',
      'Mining machinery',
      'Agricultural equipment',
      'Industrial manufacturing',
      'Transportation industry'
    ],
    emergencyAvailable: true
  },
  {
    title: 'Pin & Bushing Replacement',
    slug: 'pin-bushing-replacement',
    description: 'Complete pivot point repair including pin and bushing replacement, bore restoration, and precision fitting to eliminate slop and restore equipment performance.',
    benefits: [
      'Eliminates loose pivot points',
      'Restores equipment precision and control',
      'Prevents further wear on adjacent components',
      'Complete service: removal, installation, and testing',
      'OEM-quality pins and bushings available'
    ],
    equipment: [
      'Hydraulic press equipment',
      'Pin and bushing installation tools',
      'Precision measurement instruments',
      'Portable machining equipment'
    ],
    industries: [
      'Excavators and backhoes',
      'Loaders and dozers',
      'Agricultural equipment',
      'Crane and lifting equipment',
      'Material handling machinery'
    ],
    emergencyAvailable: true
  }
];
