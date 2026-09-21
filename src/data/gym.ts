export interface GymInfo {
  name: string;
  tagline: string;
  subTagline: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappUrl: string;
  instagramUrl: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  reviewCount: number;
  hours: {
    days: string;
    time: string;
    note?: string;
  }[];
}

export const GYM_DATA: GymInfo = {
  name: "BBC Pro Gym",
  tagline: "BUILD YOUR STRONGEST SELF.",
  subTagline: "Train with purpose. Build strength. Transform your body at BBC Pro Gym, Aurangabad.",
  address: "Gayatri Nagar Ward No. 4, Mission School Road, Ratanua",
  locality: "Gayatri Nagar, Ratanua",
  city: "Aurangabad",
  state: "Bihar",
  pincode: "824101",
  phone: "+918709207893",
  displayPhone: "+91 87092 07893",
  whatsappNumber: "918709207893",
  whatsappUrl: "https://wa.me/918709207893?text=Hi%20BBC%20Pro%20Gym%2C%20I%20would%20like%20to%20enquire%20about%20membership%20and%20visiting%20the%20gym.",
  instagramUrl: "https://www.instagram.com/bbcprogym/?hl=en",
  googleMapsUrl: "https://maps.google.com/?q=24.7427364,84.3650776",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=24.7427364,84.3650776&z=16&output=embed",
  coordinates: {
    lat: 24.7427364,
    lng: 84.3650776,
  },
  rating: 4.5,
  reviewCount: 174,
  hours: [
    { days: "Monday", time: "05:00 AM – 09:00 PM" },
    { days: "Tuesday – Saturday", time: "05:00 AM – 10:00 PM" },
    { days: "Sunday", time: "Special Morning Sessions / Contact Front Desk", note: "Subject to owner confirmation" },
  ],
};

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "strength-training",
    title: "Heavy Iron & Strength",
    category: "FOUNDATION",
    description: "Built for progressive overload with Olympic barbells, power cages, heavy dumbbells, and competition-grade plates.",
    features: ["Olympic barbells & bumper plates", "Multiple power racks & bench stations", "Dumbbell pairs ranging up to heavy sets"],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "body-transformation",
    title: "Body Transformation",
    category: "RESULTS",
    description: "Structured progressive programs designed to sculpt lean muscle mass, strip body fat, and build lasting physical discipline.",
    features: ["Milestone body assessment", "Targeted volume & hypertrophy splits", "Consistency and form accountability"],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cardio-conditioning",
    title: "Cardio & Conditioning",
    category: "ENDURANCE",
    description: "High-stamina conditioning zones with modern treadmills, ellipticals, and HIIT cardio circuits to elevate cardiovascular health.",
    features: ["Cardiovascular capacity building", "Fat burn HIIT circuits", "Dedicated pre-workout warm-up zone"],
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "personal-guidance",
    title: "Personal Training",
    category: "ONE-ON-ONE",
    description: "Direct supervision from dedicated trainers for proper posture, injury prevention, and customized workout progression.",
    features: ["Biomechanical form checks", "Customized split per schedule", "Weekly intensity adjustments"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "nutrition-counsel",
    title: "Nutrition & Diet Strategy",
    category: "LIFESTYLE",
    description: "Practical caloric calculations, macronutrient breakdowns, and clean eating guidance aligned with your training goals.",
    features: ["Caloric maintenance & deficit calculation", "Protein optimization guidance", "Hydration and supplement basics"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
  },
];

export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
}

export const FACILITIES: FacilityItem[] = [
  {
    id: "free-weights",
    title: "Dedicated Free-Weight Deck",
    subtitle: "Heavy-gauge racks, flat & incline benches, and comprehensive dumbbell pairs.",
    tag: "STRENGTH",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "selectorized",
    title: "Plate-Loaded & Cable Towers",
    subtitle: "Smooth biomechanical cable crossovers, lat pulldowns, leg press, and chest fly machines.",
    tag: "ISOLATION",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cardio-deck",
    title: "High-Output Cardio Deck",
    subtitle: "Endurance-focused treadmills, exercise bikes, and sprint conditioning space.",
    tag: "STAMINA",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "recovery",
    title: "Locker & Warm-Up Zones",
    subtitle: "Clean storage lockers, dedicated stretch mat space, and refreshment staging.",
    tag: "COMFORT",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "INTERIOR" | "EQUIPMENT" | "TRAINING" | "VIBE";
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Barbell Squat Platform & Stadium Lighting",
    category: "TRAINING",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "g2",
    title: "Olympic Flat Bench Station & Barbells",
    category: "EQUIPMENT",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "g3",
    title: "Functional Cross-Training Rig & Pull-Up Zone",
    category: "TRAINING",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "g4",
    title: "Heavy Overhead Dumbbell Press Bay",
    category: "EQUIPMENT",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "g5",
    title: "Plate-Loaded Leg Press & Quad Power Station",
    category: "INTERIOR",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "g6",
    title: "Illuminated Mirror Dumbbell Deck",
    category: "VIBE",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=85",
  },
];

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  speciality: string[];
  certifications: string;
  image: string;
  bio: string;
}

export const TRAINERS: Trainer[] = [
  {
    id: "coach-vikram",
    name: "Coach Vikram Singh",
    role: "Head Strength & Powerlifting Coach",
    experience: "10+ Years Experience",
    speciality: ["Squat & Deadlift Biomechanics", "Powerlifting Programming", "Olympic Overload"],
    certifications: "Certified Strength Specialist (CSCS) · State Powerlifting Medalist",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    bio: "Passionate about heavy compound movements, joint safety, and helping Aurangabad lifters break personal records with textbook biomechanics.",
  },
  {
    id: "coach-rajesh",
    name: "Coach Rajesh Sharma",
    role: "Body Transformation & Hypertrophy Coach",
    experience: "8+ Years Experience",
    speciality: ["Hypertrophy Volume Splits", "Body Fat Reduction", "Physique Sculpting"],
    certifications: "Certified Physique Coach · Sports Nutrition Advisor",
    image: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?auto=format&fit=crop&w=800&q=80",
    bio: "Specializes in dramatic body transformations, structured caloric strategies, and muscle hypertrophy for both men and women.",
  },
  {
    id: "coach-amit",
    name: "Coach Amit Verma",
    role: "Functional Conditioning & Agility Coach",
    experience: "6+ Years Experience",
    speciality: ["HIIT Stamina Circuits", "Core & Mobility", "Athletic Conditioning"],
    certifications: "Certified Functional Fitness Trainer · First-Aid Certified",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    bio: "Helps members boost cardiovascular endurance, sprint power, and functional mobility so you feel athletic and pain-free every day.",
  },
];

export interface MembershipPlan {
  id: string;
  title: string;
  duration: string;
  price: string;
  effectiveMonthly: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  whatsappMessage: string;
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "plan-1month",
    title: "Starter Strength",
    duration: "1 Month Pass",
    price: "₹1,200",
    effectiveMonthly: "Billed monthly · No commitment",
    features: [
      "Full gym floor & free-weight access",
      "Morning (05:00 AM) & Evening shifts",
      "Daily locker access during workouts",
      "Floor trainer workout orientation",
      "No admission or signup fee",
    ],
    whatsappMessage: "Hi BBC Pro Gym, I am interested in the 1-Month Starter Strength membership plan.",
  },
  {
    id: "plan-3months",
    title: "Momentum Builder",
    duration: "3 Months Pass",
    price: "₹3,200",
    effectiveMonthly: "₹1,066 / month",
    badge: "MOST POPULAR",
    isPopular: true,
    features: [
      "Everything in Starter plan",
      "Customized 3-day or 5-day workout split",
      "Baseline body fat & measurement check",
      "1 Complimentary guest weekend pass",
      "Priority equipment guidance",
    ],
    whatsappMessage: "Hi BBC Pro Gym, I want to enrol in the 3-Month Momentum Builder plan.",
  },
  {
    id: "plan-6months",
    title: "Discipline & Hypertrophy",
    duration: "6 Months Pass",
    price: "₹5,800",
    effectiveMonthly: "₹966 / month",
    badge: "BEST RESULTS",
    features: [
      "Everything in Momentum plan",
      "Diet & protein macro calculation guide",
      "Bi-weekly progress review with coach",
      "3 Guest weekend workout passes",
      "Locker priority access",
    ],
    whatsappMessage: "Hi BBC Pro Gym, I would like to join the 6-Month Discipline & Hypertrophy membership.",
  },
  {
    id: "plan-12months",
    title: "Annual Iron Elite",
    duration: "12 Months (1 Year)",
    price: "₹9,999",
    effectiveMonthly: "₹833 / month",
    badge: "MAX VALUE",
    features: [
      "Full 365-day all-access membership",
      "2 One-on-one personal coaching sessions",
      "Dedicated personal kit locker reservation",
      "Unlimited guest passes (1 per month)",
      "Free BBC Pro Gym shaker / kit pack",
    ],
    whatsappMessage: "Hi BBC Pro Gym, I want to sign up for the Annual Iron Elite 12-Month plan.",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
  tag: string;
  source: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Aman S.",
    rating: 5,
    quote: "Best gym environment in Aurangabad! All the heavy dumbbells, barbells and cable stations are well-maintained. The atmosphere pushes you to train hard every single day.",
    tag: "Strength Member",
    source: "Google Review",
  },
  {
    id: "t2",
    name: "Rahul K.",
    rating: 5,
    quote: "Very supportive coaching and clean space. Opening at 5:00 AM makes it super convenient to get your workout done before work or college. Highly recommended on Mission School Road.",
    tag: "Morning Batch",
    source: "Google Review",
  },
  {
    id: "t3",
    name: "Vikas P.",
    rating: 5,
    quote: "The gym has top-notch equipment for serious bodybuilding and transformation. Good crowd, disciplined vibe, and great guidance from the trainers.",
    tag: "Transformation",
    source: "Google Review",
  },
];

export const TRUST_METRICS = [
  { label: "Google Rating", value: "4.5 / 5.0", sub: "Based on 174+ verified reviews" },
  { label: "Early Doors", value: "05:00 AM", sub: "Morning & evening shifts" },
  { label: "Location", value: "Mission School Rd", sub: "Ratanua, Aurangabad (Bihar)" },
  { label: "Equipment", value: "Pro Strength", sub: "Free weights & selectorized" },
];
