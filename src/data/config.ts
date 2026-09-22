export const businessConfig = {
  name: "Neymat Kadah",
  phone: "+92 300 1234567", // Placeholder
  whatsapp: "+923001234567", // Placeholder, use exact number
  email: "hello@neymatkadah.com", // Placeholder
  instagram: "https://instagram.com/neymatkadah",
  facebook: "https://facebook.com/neymatkadah",
  description: "Homemade meals, regular meals and event catering.",
};

export const activeAreas = [
  {
    name: "I-8 / I-9",
    status: "ACTIVE", // ACTIVE, TESTING, COMING SOON, INACTIVE
    regularMealsAvailable: true,
    deliveryAvailable: true,
    note: "This week"
  },
  {
    name: "Gulberg Greens",
    status: "ACTIVE",
    regularMealsAvailable: true,
    deliveryAvailable: true,
    note: "This week"
  },
  {
    name: "Bahria Phase 7 / 8 / 9",
    status: "ACTIVE",
    regularMealsAvailable: true,
    deliveryAvailable: true,
    note: "This week"
  },
  {
    name: "F-10 / F-11",
    status: "COMING SOON",
    regularMealsAvailable: false,
    deliveryAvailable: false,
    note: "Expanding soon"
  }
];

export const weeklyMenu = [
  {
    day: "MONDAY",
    dish: "Dal Chawal",
    description: "Classic homemade dal with basmati rice and fresh salad.",
    price: null, // Add if needed
    areas: ["I-8 / I-9", "Gulberg Greens", "Bahria Phase 7 / 8 / 9"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
    status: "ACTIVE"
  },
  {
    day: "TUESDAY",
    dish: "Seasonal Sabzi",
    description: "Fresh seasonal vegetables cooked in traditional spices, served with hot roti.",
    price: null,
    areas: ["I-8 / I-9", "Gulberg Greens", "Bahria Phase 7 / 8 / 9"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    status: "ACTIVE"
  },
  {
    day: "WEDNESDAY",
    dish: "Chicken Karahi",
    description: "Tender chicken in a rich tomato gravy, prepared in a classic karahi style.",
    price: null,
    areas: ["I-8 / I-9", "Gulberg Greens", "Bahria Phase 7 / 8 / 9"],
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800",
    status: "ACTIVE"
  },
  {
    day: "THURSDAY",
    dish: "Naan Channay",
    description: "Slow-cooked chickpeas with warm, fluffy naan.",
    price: null,
    areas: ["I-8 / I-9", "Gulberg Greens", "Bahria Phase 7 / 8 / 9"],
    image: "https://images.unsplash.com/photo-1626074961596-caa96a51d424?auto=format&fit=crop&q=80&w=800",
    status: "ACTIVE"
  },
  {
    day: "FRIDAY",
    dish: "Biryani",
    description: "Aromatic basmati rice layered with spiced chicken and potatoes, served with raita.",
    price: null,
    areas: ["I-8 / I-9", "Gulberg Greens", "Bahria Phase 7 / 8 / 9"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    status: "ACTIVE"
  }
];

export const services = [
  {
    id: "regular",
    title: "Regular Meals",
    description: "Daily food for offices, hostels and individuals.",
    image: "https://images.unsplash.com/photo-1627308595229-7830b5c91f54?auto=format&fit=crop&q=80&w=800",
    link: "/menu"
  },
  {
    id: "office",
    title: "Office Lunches",
    description: "Simple, homemade-style meals for teams and workplaces.",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
    link: "/offices"
  },
  {
    id: "hostel",
    title: "Hostel Meals",
    description: "Regular meals arranged around a predictable weekly menu.",
    image: "https://images.unsplash.com/photo-1518712711674-94c03b0cba48?auto=format&fit=crop&q=80&w=800",
    link: "/hostels"
  },
  {
    id: "events",
    title: "Events",
    description: "Food for gatherings, weddings, nikah, engagements and other occasions.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    link: "/events"
  }
];

export const eventCategories = [
  "Wedding",
  "Nikah",
  "Engagement",
  "Birthday",
  "Kitty Party",
  "Corporate Lunch",
  "Family Gathering"
];
