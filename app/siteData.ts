export type HeroSlide = {
  label: string;
  title: string;
  copy: string;
  href: string;
  image: string;
};

export type Feature = {
  eyebrow: string;
  title: string;
  copy: string;
  button: string;
  image: string;
  secondaryImage: string;
};

export const heroSlides: HeroSlide[] = [
  {
    label: "Welcome to Taniti",
    title: "Escape to an Island of Adventure",
    copy:
      "Trade the everyday for warm beaches, rainforest trails, volcano views, and nights out by Yellow Leaf Bay.",
    href: "/things-to-do",
    image:
      "https://images.unsplash.com/photo-1507876466758-bc54f384809c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Things to Do",
    title: "Beaches, rainforest hikes, tours, and island nightlife",
    copy:
      "Plan activities around Yellow Leaf Bay, Merriton Landing, the rainforest, and Taniti's small active volcano.",
    href: "/things-to-do",
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Where to Stay",
    title: "Resort, hotels, B&Bs, and a budget hostel",
    copy:
      "Compare lodging styles across the island, all regulated and inspected by the Tanitian government.",
    href: "/where-to-stay",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Food & Drink",
    title: "Local fish, rice dishes, groceries, and evening plans",
    copy:
      "Find local meals, American-style restaurants, Pan-Asian cuisine, grocery stores, and Taniti's microbrewery.",
    href: "/food-drink",
    image:
      "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=1600&q=80",
  },
];

export const navItems = [
  {
    label: "Things to Do",
    href: "/things-to-do",
    links: [
      ["Beaches", "/things-to-do#beaches"],
      ["Rainforest & Volcano", "/things-to-do#rainforest-volcano"],
      ["Merriton Landing", "/things-to-do#merriton"],
      ["Tours & Entertainment", "/things-to-do#tours"],
    ],
  },
  {
    label: "Where to Stay",
    href: "/where-to-stay",
    links: [
      ["Resort", "/where-to-stay#resort"],
      ["Family Hotels", "/where-to-stay#family-hotels"],
      ["Bed & Breakfasts", "/where-to-stay#bed-breakfasts"],
      ["Hostel", "/where-to-stay#hostel"],
    ],
  },
  {
    label: "Food & Drink",
    href: "/food-drink",
    links: [
      ["Local Food", "/food-drink#local-food"],
      ["Dining Choices", "/food-drink#dining"],
      ["Groceries", "/food-drink#groceries"],
      ["Nightlife", "/food-drink#nightlife"],
    ],
  },
  {
    label: "Transportation",
    href: "/transportation",
    links: [
      ["Arriving by Air", "/transportation#arriving"],
      ["Cruise Ship", "/transportation#cruise"],
      ["Buses", "/transportation#buses"],
      ["Taxis & Rental Cars", "/transportation#cars-taxis"],
      ["Bicycles", "/transportation#walking-bikes"],
      ["Walking", "/transportation#walking"],
    ],
  },
  {
    label: "FAQs",
    href: "/faqs",
    links: [
      ["Travel Basics", "/faqs#faq-travel"],
      ["Money", "/faqs#faq-money"],
      ["Health & Safety", "/faqs#faq-safety"],
      ["Contact Us", "/faqs#contact"],
    ],
  },
];

export const thingsToDo: Feature[] = [
  {
    eyebrow: "SUN AND SHORE",
    title: "Beaches and Yellow Leaf Bay",
    copy:
      "Spend time on Taniti's sandy and rocky beaches, including the white sandy beaches around Yellow Leaf Bay near Taniti City.",
    button: "Learn More",
    image:
      "https://images.unsplash.com/photo-1654293813344-ef19554f3eb6?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://d1jyxxz9imt9yb.cloudfront.net/article/9367/meta_image/regular/GreenSeaturtle_1632x922.jpg",
  },
  {
    eyebrow: "RAINFOREST AND VOLCANO",
    title: "Hikes, views, and active landscapes",
    copy:
      "Visitors can hike through lush tropical rainforest, explore mountainous inland areas, and visit Taniti's small active volcano.",
    button: "Learn More",
    image:
      "https://www.journeyera.com/wp-content/uploads/2018/02/kauai-photos-hawaii-00980.jpg",
    secondaryImage:
      "https://notaboutthemiles.com/wp-content/uploads/2023/05/Sliding-Sands-Trail.jpg",
  },
  {
    eyebrow: "MERRITON LANDING",
    title: "A walkable hub for entertainment",
    copy:
      "Many newer activities are located in Merriton Landing on the north side of Yellow Leaf Bay, making it easy to explore several stops on foot.",
    button: "Learn More",
    image:
      "https://resizer.otstatic.com/v2/photos/xlarge/1/52268896.jpg",
    secondaryImage:
      "https://www.gohawaii.cn/sites/default/files/styles/listing_slide/public/listing_images/hawaii-Te-Au-Moana-3-100_70DA9E76-6A93-43BA-B6D88BDA9D130912_16f724d8-5cdd-49e7-ad0af78c0d322a96.jpg.webp?itok=u3D08D0Q",
  },
  {
    eyebrow: "TOURS AND ENTERTAINMENT",
    title: "Tours, nightlife, and island fun",
    copy:
      "Visitors can book fishing tours, snorkeling, zip-lining, boat and bus tours, helicopter rides, and rainforest hikes. Evening options include pubs, a microbrewery, a dance club, a movie theater, an arcade, art galleries, and bowling.",
    button: "Learn More",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c6a0fd77788977a41b9c3f0/1691799443010-QWYE9KEAIM2Y11WI7P11/Willin_NapaliCoast.jpg?format=1200w",
    secondaryImage:
      "https://static.wixstatic.com/media/e10754_c2951b950e914e74b239c2cede30df10~mv2.jpg/v1/fill/w_800,h_800,q_90/e10754_c2951b950e914e74b239c2cede30df10~mv2.jpg",
  },
];

export const stays: Feature[] = [
  {
    eyebrow: "RESORT STAY",
    title: "Four-star island resort",
    copy:
      "Taniti has one large four-star resort for visitors who want a full-service stay close to the island's main travel areas.",
    button: "Plan Your Stay",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80",
  },
  {
    eyebrow: "LOCAL COMFORT",
    title: "Family-owned hotels",
    copy:
      "Travelers can choose from many small family-owned hotels, all regulated and inspected by the Tanitian government.",
    button: "Plan Your Stay",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    eyebrow: "COMFORTS OF HOME",
    title: "Bed and breakfasts",
    copy:
      "A growing number of bed and breakfasts give visitors a homey lodging option with local hosts and a quieter stay.",
    button: "Plan Your Stay",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    eyebrow: "BUDGET OPTION",
    title: "Hostels",
    copy:
      "The island also includes an inexpensive hostel, giving budget travelers a simple place to stay while exploring Taniti.",
    button: "Plan Your Stay",
    image:
      "https://cdn.prod.website-files.com/6683166a3e242899133f7120/679a7f7b74ccf3c1d0f74c72_Courtyard%203.avif",
    secondaryImage:
      "https://polynesianhostelbeachclub.honolulucityhotels.com/data/Pictures/OriginalPhoto/17170/1717042/1717042988/picture-honolulu-polynesian-hostel-beach-club-1.JPEG",
  },
];

export const food: Feature[] = [
  {
    eyebrow: "LOCAL FLAVOR",
    title: "Fresh fish and rice",
    copy:
      "Five Taniti restaurants serve mostly local fish and rice, making traditional island meals easy to find during a visit.",
      button: "Learn More",
      image:
        "https://www.hawaiimagazine.com/wp-content/uploads/2020/12/Hawaiian-food-ThinkstockPhotos-488006550-1.jpg",
      secondaryImage:
        "https://static.wixstatic.com/media/691142_8870981859d045f4ad64ffff21181049~mv2.jpg/v1/fill/w_980%2Ch_1307%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/691142_8870981859d045f4ad64ffff21181049~mv2.jpg",
  },
  {
    eyebrow: "DINING CHOICES",
    title: "American and Pan-Asian restaurants",
    copy:
      "Three restaurants serve American-style meals, and two restaurants serve Pan-Asian cuisine for visitors looking for familiar or varied options.",
      button: "Learn More",
      image:
        "https://morimotoasiawaikiki.com/wp-content/uploads/2018/04/Copy-of-180214_MorimotoAsia_18343LORES.jpg",
      secondaryImage:
        "https://media.bizj.us/view/img/12630347/copy-of-347b9496%2A1200xx3305-2479-1147-0.jpg",
  },
  {
    eyebrow: "EASY ESSENTIALS",
    title: "Groceries and convenience",
    copy:
      "Taniti has two supermarkets, two smaller grocery stores, and one 24-hour convenience store for snacks, supplies, and simple meals.",
      button: "Learn More",
      image:
        "https://hibigisland.com/wp-content/uploads/2023/06/Vendor-produce-stand-HFM-1.png",
      secondaryImage:
        "https://imgcp.aacdn.jp/img-a/auto/auto/aa/gm/article/5/3/9/3/0/1551564942/topimg_large.jpeg",
  },
  {
    eyebrow: "EVENING PLANS",
    title: "Pubs and microbrewery",
    copy:
      "Taniti has several pubs, including a microbrewery for visitors planning a relaxed evening after beaches, tours, or dinner.",
      button: "Learn More",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
      secondaryImage:
        "https://images.unsplash.com/photo-1538488881038-e252a119ace7?auto=format&fit=crop&w=800&q=80",
  },
];

export const travelInfo = [
  "Almost all visitors arrive by air through Taniti's small airport, which handles small jets and propeller planes. A small cruise ship also docks in Yellow Leaf Bay for one night per week, and airport expansion for larger jets is planned.",
  "Public buses run in Taniti City from 5 a.m. to 11 p.m. daily.",
  "Alcohol is not allowed to be served or sold between midnight and 9:00 a.m. The drinking age on Taniti is 18, and the drinking age is not strictly enforced.",
  "Power outlets are 120 volts, the same as in the United States.",
  "Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by older residents.",
  "Taniti has many national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.",
];

export const faqs = [
  {
    question: "How do most visitors get to Taniti?",
    answer:
      "Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes, and the airport is being expanded so larger jets can land on the island within the next few years.",
  },
  {
    question: "How do visitors get around the island?",
    answer:
      "Public buses run in Taniti City from 5 a.m. to 11 p.m. daily. Private buses serve the rest of the island, taxis are available in Taniti City, and rental cars are available near the airport.",
  },
  {
    question: "Is Taniti walkable or bike friendly?",
    answer:
      "Taniti City is fairly flat and walkable, and Merriton Landing is easy to explore on foot. Bikes and helmets are available to rent, and helmets are required by law.",
  },
  {
    question: "What should visitors know about money?",
    answer:
      "Taniti uses the U.S. dollar as its currency. Many businesses also accept euros and yen, several banks facilitate currency exchange, and many businesses accept major credit cards.",
  },
  {
    question: "What should visitors know about safety and health?",
    answer:
      "Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes. Taniti has one hospital and several clinics, and the hospital has many multilingual employees.",
  },
];
