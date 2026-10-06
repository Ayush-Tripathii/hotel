export const hotelInfo = {
  name: "HOTEL STARLINK",
  secondaryBrand: "BY THE NINE HOTEL",
  tagline: "A refined stay in the heart of Jaipur.",
  locationShort: "Mansarovar, Jaipur, Rajasthan",
  fullAddress: "Plot No 41, Shiv Vatika-A, Opposite Pink City Complex, Ganpatpura, Mangyawas, Mansarovar, Jaipur, Rajasthan 302020",
  phone: "+91 98290 00000", // Clearly marked reservation concierge
  whatsapp: "+919829000000",
  email: "reservations@the9hotel.com",
  instagramUrl: "https://www.instagram.com/hotelstarlinktheninehotel",
  checkInTime: "1:00 PM",
  checkOutTime: "11:00 AM",
  bookingEngineUrl: "https://www.makemytrip.com/hotels/hotel-starlink-by-the-nine-hotel-jaipur.html",
  coordinates: {
    lat: 26.8529,
    lng: 75.7617
  },
  nearbyDistances: [
    { place: "Mansarovar Metro Station", distance: "2.5 km", time: "6 mins" },
    { place: "Jaipur Junction Railway Station", distance: "8.5 km", time: "20 mins" },
    { place: "Jaipur International Airport (JAI)", distance: "12 km", time: "22 mins" },
    { place: "Hawa Mahal & Old Pink City", distance: "11 km", time: "25 mins" },
    { place: "City Palace & Jantar Mantar", distance: "11.5 km", time: "26 mins" },
    { place: "Amber Fort & Palace", distance: "19 km", time: "40 mins" },
  ]
};

export const roomCategories = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    category: "Signature Rest",
    tagline: "Intimate warmth with handcrafted contemporary comforts.",
    description: "Our Deluxe Room is an oasis of calm designed with modern minimalism and warm wooden accents. Features a plush king bed with organic cotton linen, bespoke reading lamps, soundproof glazing, and an en-suite rain shower.",
    image: "./images/room_deluxe.jpg",
    gallery: [
      "./images/room_deluxe.jpg",
      "./images/room_executive.jpg",
      "./images/pause_atrium.jpg"
    ],
    bed: "King Bed",
    maxOccupancy: "2 Adults + 1 Child",
    size: "260 sq.ft (Approx.)",
    basePriceINR: 2499,
    highlights: ["King Bed", "Smart LED TV", "High-Speed Wi-Fi", "Rain Shower", "Work Desk", "24/7 Room Service"],
    amenities: [
      "Custom King Bed with Fine Linen",
      "Air Conditioning with Individual Climate Control",
      "Complimentary High-Speed Wi-Fi",
      "Wall-mounted 43\" Smart HD TV",
      "Modern En-suite Bathroom with Rain Shower",
      "Bespoke Organic Toiletries",
      "Tea & Coffee Maker with Curated Blends",
      "Daily Housekeeping & Turndown Service",
      "Mineral Water Bottles Replaced Daily",
      "In-Room Dining Access"
    ]
  },
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Bed Room",
    category: "Twin Comfort",
    tagline: "Twin comfort tailored for colleagues and companions.",
    description: "Configured with two ergonomic plush single beds, fine Egyptian cotton linen, and dedicated bedside charging docks. Ideal for business travellers or friends exploring Jaipur together.",
    image: "./images/room_twin.jpg",
    gallery: [
      "./images/room_twin.jpg",
      "./images/room_deluxe.jpg",
      "./images/hero_exterior.jpg"
    ],
    bed: "2 Single Twin Beds",
    maxOccupancy: "2 Adults",
    size: "275 sq.ft (Approx.)",
    basePriceINR: 2699,
    highlights: ["Twin Single Beds", "High-Speed Wi-Fi", "Smart TV", "Work Station", "Air Conditioned", "Sanitized Bathroom"],
    amenities: [
      "Two Separate Plush Twin Beds",
      "Individual Reading Lights & USB Power Points",
      "High-Speed Wi-Fi Connectivity",
      "Energy-Efficient Climate Control",
      "Smart HD Television",
      "Tea & Coffee Crafting Station",
      "Spacious Wardrobe & Luggage Rack",
      "24-Hour Hot & Cold Water Supply",
      "Room Service on Call"
    ]
  },
  {
    id: "executive-room",
    name: "Executive Room",
    category: "Spacious Elegance",
    tagline: "Expanded living space with refined furnishings.",
    description: "Generously proportioned with an integrated seating lounge, ambient lighting design, rich timber details, and expansive panoramic windows bringing in gentle natural daylight.",
    image: "./images/room_executive.jpg",
    gallery: [
      "./images/room_executive.jpg",
      "./images/room_luxury_cityview.jpg",
      "./images/starlink_pause_atrium_1791273428270.jpg"
    ],
    bed: "King Bed + Lounge Seating",
    maxOccupancy: "3 Guests",
    size: "340 sq.ft (Approx.)",
    basePriceINR: 3299,
    highlights: ["Lounge Seating", "King Bed", "Express Check-in", "Smart TV", "Minibar (On Request)", "Complimentary Breakfast"],
    amenities: [
      "Plush King-Size Bed with Pillow Menu Option",
      "Dedicated Sitting Lounge with Velvet / Linen Sofa",
      "Large Working Desk with Ergonomic Seating",
      "50\" 4K Smart Television",
      "High-Speed Premium Wi-Fi Access",
      "Premium Marble Vanity Bathroom",
      "Electric Kettle with Premium Teas & Coffee",
      "Express In-Room Check-In Assist",
      "Iron & Ironing Board on Request"
    ]
  },
  {
    id: "luxury-cityview",
    name: "Luxury Room with City View",
    category: "Panoramic Haven",
    tagline: "Elevated living with breathtaking Jaipur horizon vistas.",
    description: "Our premier accommodation featuring wide private terrace/balcony perspectives over the Pink City skyline. Experience quiet sunset moments and bespoke hospitality tailored to your needs.",
    image: "./images/room_luxury_cityview.jpg",
    gallery: [
      "./images/room_luxury_cityview.jpg",
      "./images/room_executive.jpg",
      "./images/hero_exterior.jpg"
    ],
    bed: "Grand King Bed",
    maxOccupancy: "2 Adults + 1 Child",
    size: "380 sq.ft (Approx.)",
    basePriceINR: 3999,
    highlights: ["Panoramic City View", "Private Balcony", "Grand King Bed", "Welcome Drink", "Late Checkout (Subject to Availability)", "Luxury Bath"],
    amenities: [
      "Panoramic Skyline Views from High Floor",
      "Private Balcony / Terrace Seating Area",
      "Grand King Bed with Feather-Down Topper",
      "Smart Ambience Lighting Control",
      "Curated Welcome Refreshment on Arrival",
      "Luxury En-Suite with Glass Enclosed Shower",
      "Complimentary High-Speed Wi-Fi",
      "Bathrobes & Plush Slippers",
      "Priority Table Reservations at Dining"
    ]
  }
];

export const hotelAmenities = [
  {
    icon: "Wifi",
    title: "High-Speed Wi-Fi",
    description: "Seamless fiber internet across all rooms, suites, and public spaces for work and leisure."
  },
  {
    icon: "Car",
    title: "Secure On-Site Parking",
    description: "Complimentary dedicated parking facility with 24/7 security surveillance."
  },
  {
    icon: "Clock",
    title: "24/7 Front Desk",
    description: "Round-the-clock front desk and concierge team to attend to all your travel requirements."
  },
  {
    icon: "Utensils",
    title: "In-House Dining",
    description: "Freshly prepared multi-cuisine delicacies, authentic Rajasthani specialties, and breakfast buffet."
  },
  {
    icon: "Coffee",
    title: "Express Room Service",
    description: "Savour gourmet meals and freshly brewed refreshments delivered directly to your room."
  },
  {
    icon: "Wind",
    title: "Climate Control AC",
    description: "Individual temperature control in every room ensuring year-round sanctuary from the Jaipur heat."
  },
  {
    icon: "Sparkles",
    title: "Daily Housekeeping",
    description: "Meticulous sanitization and fresh linen service ensuring immaculate hygiene standards."
  },
  {
    icon: "Zap",
    title: "100% Power Backup",
    description: "Uninterrupted power supply with automatic generator backup systems."
  },
  {
    icon: "MapPin",
    title: "Prime Mansarovar Hub",
    description: "Effortless connectivity to Metro station, Jaipur Airport, Ring Road, and city landmarks."
  }
];

export const diningHighlights = {
  tagline: "SAVOUR THE MOMENT.",
  description: "At Hotel Starlink, dining is an intimate exploration of authentic flavours. From steaming morning Masala Chai and freshly cooked hot breakfasts to rich Rajasthani vegetarian specialties and comforting North Indian classics, our kitchen emphasizes wholesome ingredients and heartfelt presentation.",
  imageMain: "./images/dining_gourmet.jpg",
  imageSecondary: "./images/jaipur_food_thali.jpg",
  features: [
    { title: "Artisan Breakfast", desc: "Fresh seasonal juices, South Indian classics, stuffed parathas, and continental selections." },
    { title: "Rajasthani Specialties", desc: "Authentic local flavours prepared with traditional spices and pure ghee." },
    { title: "In-Room Private Dining", desc: "Personalized room service offering midnight comfort bites and relaxed family feasts." },
    { title: "Fresh Pure Vegetarian Focus", desc: "Specially curated vegetarian options crafted to the highest purity standards." }
  ],
  sampleMenu: [
    { category: "Morning Artisan Start", items: ["Paneer Stuffed Kulcha & Curd", "Traditional Poha & Masala Chai", "South Indian Crisp Dosa", "Continental Toast & Fresh Juices"] },
    { category: "Rajasthani & Indian Delicacies", items: ["Dal Baati Churma (On Request)", "Paneer Butter Masala & Butter Naan", "Shahi Dum Biryani with Raita", "Yellow Dal Tadka with Jeera Rice"] },
    { category: "Comfort Bakes & Beverages", items: ["Masala Chai & Filter Coffee", "Crispy Cottage Cheese Fingers", "Fresh Lime Soda & Seasonal Shakes", "Gulab Jamun with Rabri"] }
  ]
};

export const jaipurStories = [
  {
    id: "heritage",
    category: "HERITAGE",
    title: "Royal Legacy & Grand Palaces",
    description: "Discover Jaipur's UNESCO World Heritage landmarks — from the honeycombed façade of Hawa Mahal to the amber sandstone ramparts of Amer Fort and the astronomical wonders of Jantar Mantar.",
    image: "./images/jaipur_hawa.jpg",
    distance: "11 km from hotel",
    tag: "Must Visit"
  },
  {
    id: "culture",
    category: "CULTURE",
    title: "Bazaars, Block Prints & Blue Pottery",
    description: "Immerse yourself in Jaipur's centuries-old craftsmanship. Walk through Johari Bazaar for precious gems, Bapu Bazaar for textiles, and local ateliers crafting indigo block prints.",
    image: "./images/jaipur_culture.jpg",
    distance: "10 km from hotel",
    tag: "Craft & Art"
  },
  {
    id: "food",
    category: "FOOD",
    title: "Flavours of the Desert Royal Kitchens",
    description: "Explore Rajasthan's distinctive culinary culture — from crisp Pyaaz Kachoris and fragrant Ghewar to pure ghee thalis, sweet lassis, and royal slow-cooked delicacies.",
    image: "./images/jaipur_food_thali.jpg",
    distance: "Near Mansarovar food hubs",
    tag: "Culinary"
  },
  {
    id: "city",
    category: "CITY TRANSIT",
    title: "Modern Mansarovar & Pink City Pulse",
    description: "Move effortlessly between old-world Jaipur and its modern buzzing avenues. Hotel Starlink offers direct arterial access to Jaipur Airport, Ring Road, and Mansarovar Metro.",
    image: "./images/hero_exterior.jpg",
    distance: "Prime Location",
    tag: "Connectivity"
  }
];

export const galleryItems = [
  { id: 1, category: "Architecture", title: "Hotel Starlink Dusk Facade", image: "./images/hero_exterior.jpg", aspect: "wide" },
  { id: 2, category: "Suites", title: "Deluxe King Room", image: "./images/room_deluxe.jpg", aspect: "square" },
  { id: 3, category: "Experience", title: "Serene Water Courtyard", image: "./images/pause_atrium.jpg", aspect: "tall" },
  { id: 4, category: "Dining", title: "Candlelit Dining Lounge", image: "./images/dining_gourmet.jpg", aspect: "wide" },
  { id: 5, category: "Suites", title: "Luxury City View Suite", image: "./images/room_luxury_cityview.jpg", aspect: "wide" },
  { id: 6, category: "Suites", title: "Deluxe Twin Bed Room", image: "./images/room_twin.jpg", aspect: "square" },
  { id: 7, category: "Jaipur", title: "Hawa Mahal at Twilight", image: "./images/jaipur_hawa.jpg", aspect: "tall" },
  { id: 8, category: "Dining", title: "Rajasthani Gourmet Feast", image: "./images/jaipur_food_thali.jpg", aspect: "wide" },
  { id: 9, category: "Jaipur", title: "Artisanal Brass Craftsmanship", image: "./images/jaipur_culture.jpg", aspect: "square" },
  { id: 10, category: "Suites", title: "Executive Room Sitting Area", image: "./images/room_executive.jpg", aspect: "wide" },
];

export const guestReviews = [
  {
    id: 1,
    guest: "Vikram Rathore",
    source: "Verified Guest · Business Traveler",
    date: "February 2026",
    rating: 5,
    quote: "A genuinely comfortable and modern hotel in Mansarovar. The rooms are spotless, Wi-Fi was fast enough for my work calls, and the staff at The Nine Hotel was courteous and attentive.",
    room: "Executive Room"
  },
  {
    id: 2,
    guest: "Ananya & Rohan Mehra",
    source: "Verified Guest · Couple Holiday",
    date: "January 2026",
    rating: 5,
    quote: "Stayed for 3 nights while exploring Jaipur. Peaceful location away from the chaotic traffic yet easy to reach all monuments via cab. The bed was super comfortable and the breakfast was hot and fresh.",
    room: "Luxury Room with City View"
  },
  {
    id: 3,
    guest: "Dr. S. K. Sharma",
    source: "Verified Guest · Family Visit",
    date: "March 2026",
    rating: 5,
    quote: "Great hospitality and very clean rooms. Value for money in Jaipur with safe parking space. Highly recommended for families looking for a peaceful stay by The Nine Hotel.",
    room: "Deluxe Room"
  }
];

export const faqs = [
  {
    q: "What are the check-in and check-out times?",
    a: "Standard check-in time is 1:00 PM and check-out is 11:00 AM. Early check-in or late check-out is subject to room availability upon request."
  },
  {
    q: "Is parking available at Hotel Starlink?",
    a: "Yes, we provide secure complimentary on-site parking for all our staying guests."
  },
  {
    q: "How far is the hotel from Jaipur Airport & Railway Station?",
    a: "Jaipur International Airport (JAI) is approximately 12 km (22 mins drive) and Jaipur Junction Railway Station is approximately 8.5 km (20 mins drive)."
  },
  {
    q: "Are vegetarian meals and room service available?",
    a: "Yes, our in-house dining kitchen serves fresh pure vegetarian and multi-cuisine meals, and room service is available for guest convenience."
  },
  {
    q: "What ID documents are required for check-in?",
    a: "All adult guests must present a valid government-issued photo ID (Aadhar Card, Driving License, Passport, or Voter ID) at check-in as per statutory regulations (PAN cards not accepted)."
  }
];
