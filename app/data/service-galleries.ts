export type Service = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  image: string;
  className: string;
  galleryIntro: string;
};

export const services: Service[] = [
  {
    title: "Parties",
    slug: "parties",
    eyebrow: "Gathered Tables",
    description: "Buffets and plated menus for lively private celebrations.",
    image: "/assets/images/services/parties.jpg",
    className: "md:col-span-6 md:row-span-2",
    galleryIntro:
      "Private celebrations, birthday spreads and family gatherings served with fire, rhythm and generous island flavour.",
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
  },
  {
    title: "Chef Tables",
    slug: "chef-tables",
    eyebrow: "Private Experience",
    description:
      "A close-up dining experience with curated multi-course menus.",
    image: "/assets/dish-patty.jpg",
    className: "md:col-span-4 md:row-span-1",
    galleryIntro:
      "Close-up chef-led experiences with curated courses, controlled pacing and dishes built around the room.",
  },
  {
    title: "Cooking Class",
    slug: "school-dinner",
    eyebrow: "Hands-on Experience",
    description:
      "Hands-on Jamaican cooking sessions for groups and communities.",
    image: "/assets/images/services/school.jpg",
    className: "md:col-span-4 md:row-span-1",
    galleryIntro:
      "Hands-on Jamaican cooking experiences where groups learn traditional techniques, bold flavours and recipes together.",
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
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
