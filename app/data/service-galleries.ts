export type ServiceGalleryImage = {
  title: string;
  image: string;
  className: string;
};

export type ServiceGallery = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  image: string;
  className: string;
  galleryIntro: string;
  gallery: ServiceGalleryImage[];
};

const sharedServiceImages = [
  {
    title: "Service detail",
    image: "/assets/images/gallery/dinner.jpg",
    className: "md:col-span-4",
  },
  {
    title: "Guest moments",
    image: "/assets/images/gallery/friends.jpg",
    className: "md:col-span-4",
  },
  {
    title: "Plated service",
    image: "/assets/dish-fish.jpg",
    className: "md:col-span-4",
  },
];

export const services: ServiceGallery[] = [
  {
    title: "Parties",
    slug: "parties",
    eyebrow: "Gathered Tables",
    description: "Buffets and plated menus for lively private celebrations.",
    image: "/assets/images/services/parties.jpg",
    className: "md:col-span-6 md:row-span-2",
    galleryIntro:
      "Private celebrations, birthday spreads and family gatherings served with fire, rhythm and generous island flavour.",
    gallery: [
      {
        title: "Private garden buffet",
        image: "/assets/images/services/parties.jpg",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Friends around food",
        image: "/assets/images/gallery/friends.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Table celebration",
        image: "/assets/images/gallery/dinner2.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
  {
    title: "Cooperate Events",
    slug: "cooperate-events",
    eyebrow: "Precision Service",
    description: "Reliable catering for launches, meetings and brand moments.",
    image: "/assets/images/services/cooperate.jpg",
    className: "md:col-span-3 md:row-span-1",
    galleryIntro:
      "Hot, punctual catering for launches, company moments and teams that need service handled without friction.",
    gallery: [
      {
        title: "Corporate reception",
        image: "/assets/images/services/cooperate.jpg",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Brand gathering",
        image: "/assets/images/gallery/company.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Service flow",
        image: "/assets/images/gallery/book.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
  {
    title: "Concerts",
    slug: "concerts",
    eyebrow: "Live Crowd Energy",
    description: "Fast, crowd-ready food service built for big live nights.",
    image: "/assets/images/services/concerts.jpg",
    className: "md:col-span-3 md:row-span-1",
    galleryIntro:
      "Crowd-ready Jamaican food, quick service and bold plates built for late nights, stages and festivals.",
    gallery: [
      {
        title: "Late-night pop-up",
        image: "/assets/images/services/concerts.jpg",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Festival service",
        image: "/assets/images/services/more.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Live crowd setup",
        image: "/assets/images/gallery/boat10.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
  {
    title: "Dinners",
    slug: "dinners",
    eyebrow: "Evening Service",
    description: "Refined Jamaican menus for intimate hosted dinner service.",
    image: "/assets/images/services/dinners.jpg",
    className: "md:col-span-6 md:row-span-1",
    galleryIntro:
      "Intimate dinners shaped around slow fire, clean plating and courses that carry the warmth of Jamaica.",
    gallery: [
      {
        title: "Hosted dinner",
        image: "/assets/images/services/dinners.jpg",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Dinner details",
        image: "/assets/images/gallery/dinner3.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Romantic private table",
        image: "/assets/images/gallery/romantic.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
  {
    title: "Office Lunch",
    slug: "office-lunch",
    eyebrow: "Midday Delivery",
    description: "Fresh lunch drops for teams, studios and office gatherings.",
    image: "/assets/images/services/office_lunch.jpg",
    className: "md:col-span-4 md:row-span-1",
    galleryIntro:
      "Fresh lunch drops and office spreads designed to arrive hot, organized and ready for the whole team.",
    gallery: [
      {
        title: "Office lunch market",
        image: "/assets/images/services/office_lunch.jpg",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Team lunch",
        image: "/assets/images/gallery/company.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Food delivery setup",
        image: "/assets/images/menu_page/rice_and_peas.jpeg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
  {
    title: "Weddings",
    slug: "weddings",
    eyebrow: "Signature Celebrations",
    description: "Elegant island catering shaped for your biggest day.",
    image: "/assets/images/services/place_wedding.png",
    className: "md:col-span-4 md:row-span-1",
    galleryIntro:
      "Wedding catering with elegant service, tasting-led menus and island flavours shaped around the day.",
    gallery: [
      {
        title: "Wedding celebration",
        image: "/assets/images/services/place_wedding.png",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Garden reception",
        image: "/assets/images/gallery/boat1.png",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Evening table",
        image: "/assets/images/gallery/romantic.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
  {
    title: "Funerals",
    slug: "funerals",
    eyebrow: "Respectful Service",
    description: "Warm, respectful food service for family remembrance days.",
    image: "/assets/images/services/funerals.jpg",
    className: "md:col-span-4 md:row-span-1",
    galleryIntro:
      "Respectful family catering handled with quiet care, warm service and reliable food for remembrance days.",
    gallery: [
      {
        title: "Respectful service",
        image: "/assets/images/services/funerals.jpg",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Family table",
        image: "/assets/images/gallery/dinner2.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Kitchen care",
        image: "/assets/images/gallery/company.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
  {
    title: "Chef Tables",
    slug: "chef-tables",
    eyebrow: "Private Experience",
    description: "A close-up dining experience with curated multi-course menus.",
    image: "/assets/dish-patty.jpg",
    className: "md:col-span-4 md:row-span-1",
    galleryIntro:
      "Close-up chef-led experiences with curated courses, controlled pacing and dishes built around the room.",
    gallery: [
      {
        title: "Chef table",
        image: "/assets/dish-patty.jpg",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Signature plating",
        image: "/assets/cta-plating.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Private dish",
        image: "/assets/dish-curry-goat.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
  {
    title: "School Dinner",
    slug: "school-dinner",
    eyebrow: "Community Catering",
    description: "Balanced, flavour-led meals for school service and events.",
    image: "/assets/images/services/school.jpg",
    className: "md:col-span-4 md:row-span-1",
    galleryIntro:
      "Balanced, flavour-led school meals and community catering with dependable planning and friendly service.",
    gallery: [
      {
        title: "School service",
        image: "/assets/images/services/school.jpg",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Community meal",
        image: "/assets/dish-ackee.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Lunch plate",
        image: "/assets/images/menu_page/coconut_rice.jpeg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
  {
    title: "More Events",
    slug: "more-events",
    eyebrow: "Festival Setup",
    description: "Full-service catering for festivals, conferences and more.",
    image: "/assets/images/services/more.jpg",
    className: "md:col-span-4 md:row-span-1",
    galleryIntro:
      "Flexible food setups for festivals, conferences, pop-ups and events that need a custom plan.",
    gallery: [
      {
        title: "Festival setup",
        image: "/assets/images/services/more.jpg",
        className: "md:col-span-8 md:row-span-2",
      },
      {
        title: "Pop-up crowd",
        image: "/assets/images/services/concerts.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      {
        title: "Outdoor service",
        image: "/assets/images/gallery/boat13.jpg",
        className: "md:col-span-4 md:row-span-1",
      },
      ...sharedServiceImages,
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
